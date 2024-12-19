<script lang="ts">
	let { className = '', children } = $props();
</script>

<p class="{className} mt-6 text-base text-zinc-700 transition-colors dark:text-zinc-300">
	{@render children?.()}
</p>
