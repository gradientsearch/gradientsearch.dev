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
</script>

<PageLayout {backHref} {backText} {title} {date}>
	<PageSubtitle className="underline underline-offset-8 decoration-sky-500 capitalize"
		>How to Use Go’s Built-In Profiling Tools to Monitor and Debug Your Services</PageSubtitle
	>

	<img src="{base}/blog/10/statsviz.png" alt="cert" />

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

	<Code code={serve} lang="go"></Code>

	<PageParagraph>
		Heap free: is that is free memory that could be returned to the OS, but has not been. Heap
		released: is memory that is free memory that has been returned to the OS.
	</PageParagraph>
	<PageParagraph>Before burst graph:</PageParagraph>

	<img src="{base}/blog/10/heap-graphs.png" alt="heap graphs" />
	<img src="{base}/blog/10/heap-details.png" alt="heap details" />
	<img src="{base}/blog/10/heap-global.png" alt="heap global" />
	<img src="{base}/blog/10/goroutines.png" alt="goroutines" />

	<p>
		<a
			target="_blank"
			class="text-sky-500"
			href="https://www.ardanlabs.com/training/individual-on-demand/ultimate-go-bundle/">Courses</a
		>
	</p>
</PageLayout>
