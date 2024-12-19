<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import go from 'highlight.js/lib/languages/go';

	hljs.registerLanguage('go', go);

	let code = `
package main
  
import "fmt"

func main(){
    fmt.Println("Hello highlight.js")
}              
`;

	let hc = hljs.highlight(code, { language: 'go' }).value;
</script>

<pre class="hljs hljs-line-numbers">
  <code class="text-left language-go">
    {@html hc}
  </code>
</pre>
