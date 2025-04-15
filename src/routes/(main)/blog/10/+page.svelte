<script lang="ts">
	import { posts, type post } from '../posts';
	import PageSubtitle from '../../../../components/pageSubtitle.svelte';
	import PageLayout from '../../../../components/layout/pageLayout.svelte';
	import PageHeader from '../../../../components/pageHeader.svelte';
	import PageParagraph from '../../../../components/pageParagraph.svelte';
	import { base } from '$app/paths';
	import Code from '../../../../components/code.svelte';

	let p: post = posts[9]; // 0 based post 10
	let title = p.title;
	let date = p.date;
	let backText = 'blog';
	let backHref = '/blog';

	let debugMux = `
import (
	"net/http"
	"net/http/pprof"

	"github.com/arl/statsviz"
)

func Mux() *http.ServeMux {
	mux := http.NewServeMux()

	mux.HandleFunc("/debug/pprof/", pprof.Index)
	mux.HandleFunc("/debug/pprof/cmdline", pprof.Cmdline)
	mux.HandleFunc("/debug/pprof/profile", pprof.Profile)
	mux.HandleFunc("/debug/pprof/symbol", pprof.Symbol)
	mux.HandleFunc("/debug/pprof/trace", pprof.Trace)

	statsviz.Register(mux)

	// Liveness handler
	mux.HandleFunc("/liveness", func(w http.ResponseWriter, r *http.Request) {
		// simulate IO work
		time.Sleep(time.Millisecond * 10)
		fmt.Fprintln(w, "OK")
	})

	return mux
}
`;

	let serve = `
func main() {
	if err := http.ListenAndServe("0.0.0.0:3010", Mux()); err != nil {
		fmt.Println("Server Error")
	}
}
`;

	let burst = `hey -n 10000 -c 100 http://localhost:3010/liveness`;
</script>

<PageLayout {backHref} {backText} {title} {date}>
	<PageSubtitle className="underline underline-offset-8 decoration-sky-500 capitalize"
		>How to Use Go’s Built-In Profiling Tools to Monitor and Debug Your Services</PageSubtitle
	>

	<img src="{base}/blog/10/statsviz.png" alt="cert" />

	<PageParagraph>
		Code on <a href="https://github.com/gradientsearch/go-service-profiling" class="underline underline-offset-8 text-sky-500">GitHub</a>
	</PageParagraph>
	<PageParagraph>
		In this post, we’ll walk through setting up debug endpoints to profile your Go application in
		real time. We'll also integrate <a href="https://github.com/arl/statsviz" class="text-sky-500"
			>Statsviz</a
		> to provide a user-friendly GUI for visualizing metrics like heap usage and goroutine activity.
		To make things more interesting, we’ll simulate load by sending a burst of requests to a liveness
		endpoint, allowing us to see how the heap and goroutine count respond under pressure.
	</PageParagraph>

	<PageParagraph>
		The first step is to register the pprof debug endpoints with your Go HTTP server. These handlers
		expose runtime profiling data such as heap usage, goroutines, CPU profiles, and more. Go
		provides this functionality through the net/http/pprof package, which can be easily integrated
		into your server. We’ll also hook in the Statsviz package to enhance this setup with a
		real-time, browser-based dashboard for visualizing metrics.
	</PageParagraph>

	<Code code={debugMux} lang="go"></Code>
	<PageParagraph>
		With your handlers configured, the next step is simply to serve them using Go’s built-in HTTP
		server:
	</PageParagraph>

	<Code code={serve} lang="go"></Code>

	<PageParagraph>
		Next, we'll simulate a burst of traffic using the following command. This will send 100
		concurrent request to the liveness endpoint.
	</PageParagraph>

	<Code code={burst} lang="bash"></Code>

	<PageParagraph>Before burst graph:</PageParagraph>

	<img src="{base}/blog/10/heap-graphs.png" alt="heap graphs" />

	<PageParagraph>After burst graphs:</PageParagraph>

	<img src="{base}/blog/10/heap-details.png" alt="heap details" />
	<img src="{base}/blog/10/heap-global.png" alt="heap global" />
	<img src="{base}/blog/10/goroutines.png" alt="goroutines" />

	<PageParagraph>
		From the graphs, you can see that the burst of requests put pressure on the heap, increasing the
		heap goal from 4MB to over 6MB. There's also a noticeable spike in goroutines—from 6 to just
		over 100—which makes sense given that our command triggered 100 concurrent requests.
	</PageParagraph>

	<PageParagraph>
		Using profiling tools like pprof and Statsviz helps us visualize and understand how our
		application behaves under load. In general, a consistent and stable heap graph is desirable, as
		it indicates efficient memory usage and garbage collection. Spikes, especially under heavy
		traffic, are expected—but persistent growth or erratic behavior could signal memory leaks,
		inefficient object lifetimes, or other performance issues worth investigating.
	</PageParagraph>

	<h2>⚠️ Warning</h2>

	<PageParagraph>
		<strong>Do not expose the debug endpoints to the public or production environments.</strong> The
		profiling endpoints provided by the <code>net/http/pprof</code> package expose sensitive runtime
		information that could potentially be used for malicious purposes, including heap dumps, goroutine
		stacks, and other performance data. These endpoints should be restricted to trusted internal users
		or disabled in production.
	</PageParagraph>

	<PageParagraph>To avoid exposing these endpoints, you can:</PageParagraph>
	<PageParagraph>
		<ul>
			<li>Bind the server to <code>localhost</code> or an internal network interface.</li>
			<li>
				Use environment variables or build tags to conditionally include profiling in development
				environments only.
			</li>
			<li>
				Protect the endpoints with authentication or access control mechanisms (e.g., basic auth or
				IP whitelisting).
			</li>
		</ul>
	</PageParagraph>
	<PageParagraph>
		Be cautious when running this in a production environment and always ensure these endpoints are
		not publicly accessible.
	</PageParagraph>
	
	
	<h2>Metric Descriptions</h2>

	<PageParagraph>
		Below are descriptions of the values shown in the legends of the Statsviz graphs.
	</PageParagraph>

	<table border="1" cellpadding="8" cellspacing="0">
		<thead>
			<tr>
				<th>Metric</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr
				><td>Heap in use</td><td
					>Memory occupied by live objects and dead objects not yet freed by the GC: <code
						>/memory/classes/heap/objects + /memory/classes/heap/unused</code
					>.</td
				></tr
			>
			<tr
				><td>Heap free</td><td
					>Memory that could be returned to the OS but hasn't been: <code
						>/memory/classes/heap/free</code
					>.</td
				></tr
			>
			<tr
				><td>Heap released</td><td
					>Memory that has been returned to the OS: <code>/memory/classes/heap/free</code>.</td
				></tr
			>
			<tr
				><td>Heap sys</td><td
					>Estimate of all heap memory obtained from the OS: <code
						>/memory/classes/heap/objects + unused + released + free</code
					>.</td
				></tr
			>
			<tr
				><td>Heap objects</td><td
					>Memory used by live and not-yet-freed objects: <code>/memory/classes/heap/objects</code
					>.</td
				></tr
			>
			<tr
				><td>Heap stacks</td><td
					>Memory used for stack space: <code>/memory/classes/heap/stacks</code>.</td
				></tr
			>
			<tr
				><td>Heap goal</td><td
					>Heap size target for the end of the GC cycle: <code>gc/heap/goal</code>.</td
				></tr
			>
			<tr
				><td>Live objects</td><td
					>Number of live or unswept objects occupying heap memory: <code>/gc/heap/objects</code
					>.</td
				></tr
			>
			<tr
				><td>Live bytes</td><td
					>Currently allocated bytes (not yet GC’ed): <code>/gc/heap/allocs - /gc/heap/frees</code
					>.</td
				></tr
			>
			<tr
				><td>Mspan in-use</td><td
					>Memory used by active <code>mspan</code> structures:
					<code>/memory/classes/metadata/mspan/inuse</code>.</td
				></tr
			>
			<tr
				><td>Mspan free</td><td
					>Reserved but unused memory for <code>mspan</code>:
					<code>/memory/classes/metadata/mspan/free</code>.</td
				></tr
			>
			<tr
				><td>Mcache in-use</td><td
					>Memory used by active <code>mcache</code> structures:
					<code>/memory/classes/metadata/mcache/inuse</code>.</td
				></tr
			>
			<tr
				><td>Mcache free</td><td
					>Reserved but unused memory for <code>mcache</code>:
					<code>/memory/classes/metadata/mcache/free</code>.</td
				></tr
			>
			<tr><td>Goroutines</td><td>Count of live goroutines: <code>/sched/goroutines</code>.</td></tr>
			<tr
				><td>Events per second</td><td
					>Total number of goroutine scheduling events, from <code>/sched/latencies:seconds</code>,
					multiplied by 8.</td
				></tr
			>
			<tr
				><td>Events per second per P</td><td
					>Events per second divided by <code>GOMAXPROCS</code>:
					<code>/sched/gomaxprocs:threads</code>.</td
				></tr
			>
			<tr
				><td>OS stacks</td><td
					>Stack memory allocated by the OS: <code>/memory/classes/os-stacks</code>.</td
				></tr
			>
			<tr
				><td>Other</td><td
					>Memory for trace buffers, debugging structures, finalizers, and more: <code
						>/memory/classes/other</code
					>.</td
				></tr
			>
			<tr
				><td>Profiling buckets</td><td
					>Memory used by profiling stack trace hash map: <code
						>/memory/classes/profiling/buckets</code
					>.</td
				></tr
			>
			<tr
				><td>Total</td><td
					>Total memory mapped by the Go runtime: <code>/memory/classes/total</code>.</td
				></tr
			>
			<tr
				><td>Mark assist</td><td
					>CPU time goroutines spent helping the GC: <code>/cpu/classes/gc/mark/assist</code>.</td
				></tr
			>
			<tr
				><td>Mark dedicated</td><td
					>CPU time on dedicated processors for GC tasks: <code>/cpu/classes/gc/mark/dedicated</code
					>.</td
				></tr
			>
			<tr
				><td>Mark idle</td><td
					>CPU time for GC tasks using otherwise idle CPU: <code>/cpu/classes/gc/mark/idle</code
					>.</td
				></tr
			>
			<tr
				><td>Pause</td><td
					>Total CPU time the app was paused by the GC: <code>/cpu/classes/gc/pause</code>.</td
				></tr
			>
			<tr
				><td>GC total</td><td>Total CPU time spent doing GC: <code>/cpu/classes/gc/total</code>.</td
				></tr
			>
			<tr
				><td>Mutex wait</td><td
					>Time goroutines spent blocked on a <code>sync.Mutex</code> or <code>sync.RWMutex</code>:
					<code>/sync/mutex/wait/total</code>.</td
				></tr
			>
			<tr
				><td>Scannable globals</td><td
					>Amount of scannable global variable space: <code>/gc/scan/globals</code>.</td
				></tr
			>
			<tr
				><td>Scannable heap</td><td>Amount of scannable heap space: <code>/gc/scan/heap</code>.</td
				></tr
			>
			<tr
				><td>Scanned stack</td><td
					>Bytes of stack scanned during the last GC cycle: <code>/gc/scan/stack</code>.</td
				></tr
			>
		</tbody>
	</table>
</PageLayout>
