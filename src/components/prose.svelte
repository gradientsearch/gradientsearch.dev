<script lang="ts">
	let { className, children } = $props();
</script>

<div class="{className} prose dark:prose-invert">
	{@render children?.()}
</div>
