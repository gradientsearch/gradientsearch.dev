<script lang="ts">
	let { children } = $props();
</script>

<div class="relative px-4 sm:px-8 lg:px-12">
	<div class="mx-auto max-w-2xl lg:max-w-5xl">
		{@render children?.()}
	</div>
</div>
