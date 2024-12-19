<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import go from 'highlight.js/lib/languages/go';
	import javascript from 'highlight.js/lib/languages/javascript';
	import bash from 'highlight.js/lib/languages/bash';
	import xml from 'highlight.js/lib/languages/xml';
	import plaintext from 'highlight.js/lib/languages/plaintext';
	import yaml from 'highlight.js/lib/languages/yaml';
	let { lang, code } = $props();

	switch (lang) {
		case 'go':
			hljs.registerLanguage('go', go);
		case 'javascript':
			hljs.registerLanguage('javascript', javascript);
		case 'bash':
			hljs.registerLanguage('bash', bash);
		case 'xml':
			hljs.registerLanguage('xml', xml);
		case 'plaintext':
			hljs.registerLanguage('plaintext', plaintext);
		case 'yaml':
			hljs.registerLanguage('yaml', yaml);
	}

	let hc = hljs.highlight(code, { language: lang }).value;
</script>

<pre class="hljs hljs-line-numbers">
  <code class="text-left language-go">
{@html hc}
  </code>
</pre>
