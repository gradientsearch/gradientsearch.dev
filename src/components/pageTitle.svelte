<script lang="ts">
	let { className, children } = $props();
</script>

<h1
	class="{className} text-4xl font-bold tracking-tight text-zinc-800 transition-colors sm:text-5xl dark:text-zinc-100"
>
	{@render children?.()}
</h1>
