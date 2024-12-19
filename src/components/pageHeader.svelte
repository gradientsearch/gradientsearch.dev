<script lang="ts">
	let { className, children } = $props();
</script>

<h2 class="{className} text-base font-semibold tracking-tight">
	{@render children?.()}
</h2>
