<script lang="ts">
	import { posts, type post } from '../posts';
	import PageSubtitle from '../../../../components/pageSubtitle.svelte';
	import PageLayout from '../../../../components/layout/pageLayout.svelte';
	import PageHeader from '../../../../components/pageHeader.svelte';
	import PageParagraph from '../../../../components/pageParagraph.svelte';
	import Code from '../../../../components/code.svelte';
	import Emphasis from '../../../../components/emphasis.svelte';
	import { base } from '$app/paths';
	let p: post = posts[6];
	let title = p.title;
	let date = p.date;
	let backText = 'blog';
	let backHref = '/blog';

let mapOfMutexes = `
import (
	"fmt"
	"sync"
)

// M wraps a map of mutexes.  Each key locks separately.
type M struct {
	ml sync.Mutex              // lock for entry map
	ma map[interface{}]*mentry // entry map
}

type mentry struct {
	m   *M          // point back to M, so we can synchronize removing this mentry when cnt==0
	el  sync.Mutex  // entry-specific lock
	cnt int         // reference count
	key interface{} // key in ma
}

// Unlocker provides an Unlock method to release the lock.
type Unlocker interface {
	Unlock()
}

// NewMapOfMu returns an initalized M.
func NewMapOfMu() *M {
	return &M{ma: make(map[interface{}]*mentry)}
}

// Lock acquires a lock corresponding to this key.
// This method will never return nil and Unlock() must be called
// to release the lock when done.
func (m *M) Lock(key interface{}) Unlocker {

	// read or create entry for this key atomically
	m.ml.Lock()
	e, ok := m.ma[key]
	if !ok {
		e = &mentry{m: m, key: key}
		m.ma[key] = e
	}
	e.cnt++ // ref count
	m.ml.Unlock()

	// acquire lock, will block here until e.cnt==1
	e.el.Lock()

	return e
}

// Unlock releases the lock for this entry.
func (me *mentry) Unlock() {

	m := me.m

	// decrement and if needed remove entry atomically
	m.ml.Lock()
	e, ok := m.ma[me.key]
	if !ok { // entry must exist
		m.ml.Unlock()
		panic(fmt.Errorf("Unlock requested for key=%v but no entry found", me.key))
	}
	e.cnt--        // ref count
	if e.cnt < 1 { // if it hits zero then we own it and remove from map
		delete(m.ma, me.key)
	}
	m.ml.Unlock()

	// now that map stuff is handled, we unlock and let
	// anything else waiting on this key through
	e.el.Unlock()

}
`

let mapOfMutexesTests = `
import (
	"math/rand"
	"strconv"
	"strings"
	"sync"
	"testing"
	"time"
)

func TestM(t *testing.T) {

	r := rand.New(rand.NewSource(42))

	m := NewMapOfMu()
	_ = m

	keyCount := 20
	iCount := 10000
	out := make(chan string, iCount*2)

	// run a bunch of concurrent requests for various keys,
	// the idea is to have a lot of lock contention
	var wg sync.WaitGroup
	wg.Add(iCount)
	for i := 0; i < iCount; i++ {
		go func(rn int) {
			defer wg.Done()
			key := strconv.Itoa(rn)

			// you can prove the test works by commenting the locking out and seeing it fail
			l := m.Lock(key)
			defer l.Unlock()

			out <- key + " A"
			time.Sleep(time.Microsecond) // make 'em wait a mo'
			out <- key + " B"
		}(r.Intn(keyCount))
	}
	wg.Wait()
	close(out)

	// verify the map is empty now
	if l := len(m.ma); l != 0 {
		t.Errorf("unexpected map length at test end: %v", l)
	}

	// confirm that the output always produced the correct sequence
	outLists := make([][]string, keyCount)
	for s := range out {
		sParts := strings.Fields(s)
		kn, err := strconv.Atoi(sParts[0])
		if err != nil {
			t.Fatal(err)
		}
		outLists[kn] = append(outLists[kn], sParts[1])
	}
	for kn := 0; kn < keyCount; kn++ {
		l := outLists[kn] // list of output for this particular key
		for i := 0; i < len(l); i += 2 {
			if l[i] != "A" || l[i+1] != "B" {
				t.Errorf("For key=%v and i=%v got unexpected values %v and %v", kn, i, l[i], l[i+1])
				break
			}
		}
	}
	if t.Failed() {
		t.Logf("Failed, outLists: %#v", outLists)
	}

}

func BenchmarkM(b *testing.B) {

	m := NewMapOfMu()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		// run uncontended lock/unlock - should be quite fast
		m.Lock(i).Unlock()
	}

}

`

let use = `bundlePath := fmt.Sprintf("%s/%s/bundles/%s", BUNDLE_SCHEMA, ownerEntityID, bundleID)
bundleLock := bundleMapOfMu.Lock(bundlePath)
defer bundleLock.Unlock()`
</script>

<PageLayout {backHref} {backText} {title} {date}>
	<PageSubtitle className="underline underline-offset-8 decoration-sky-500"
		>Synchronizing PwManager: Preventing Race Conditions When Sharing Password Bundles</PageSubtitle
	>
	<PageParagraph>
		PwManager provides a way for users to share their password bundles with other users. Note that a
		password bundle is a collection of password entries. If the password bundle is shared with admin
		permissions, the user can modify the password bundle, such as updating users. A race condition
		can occur when two admins try to update the same bundle at the same time from different
		goroutines. To prevent this race condition, synchronization through the use of mutexes is
		implemented.
	</PageParagraph>

	<PageParagraph>
		Since PwManager uses HashiCorp Vault and Vault is a KV store, the paths to the bundles are
		unique. To synchronize updates to bundles across goroutines, a map of mutexes is used. This
		allows a goroutine to acquire and lock the map mutex first, and then acquire and lock the bundle
		mutex second. There is a second advantage to this map of mutex pattern: it creates mutexes for
		bundle paths on demand and garbage collects the mutexes when no goroutine requires them.
	</PageParagraph>

	<PageParagraph>
		In some cases, you can find gems on Stack Overflow. However, rarely do the gems come with tests.
		The following map of mutexes code was pulled from this <a class="text-primary-500"
			href="https://stackoverflow.com/questions/40931373/how-to-gc-a-map-of-mutexes-in-go"
			target="_blank">SO</a
		> question and provided by <a class="text-primary-500" href="https://stackoverflow.com/users/961810/brad-peabody" target="_blank">Brad Peabody</a>.
	</PageParagraph>



	<PageParagraph>
		Map Of Mutexes:
	</PageParagraph>
	<Code code={mapOfMutexes} lang="go"></Code>

	<PageParagraph>
		Map Of Mutexes Tests:
	</PageParagraph>
	<Code code={mapOfMutexesTests} lang="go"></Code>

	<PageParagraph>
		Locking A Bundle:
	</PageParagraph>
	<Code code={use} lang="go"></Code>


</PageLayout>
