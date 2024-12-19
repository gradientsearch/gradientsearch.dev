<script>
	let { children } = $props();
</script>

<span class="bg-slate-900/90 rounded-lg p-1 text-sky-500">
	{@render children?.()}
</span>
