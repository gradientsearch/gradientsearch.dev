<script lang="ts">
	import Outer from './outer.svelte';
	import Inner from './inner.svelte';
	let { className, children } = $props();
</script>

<Outer {className}>
	<Inner>
		{@render children?.()}
	</Inner>
</Outer>
