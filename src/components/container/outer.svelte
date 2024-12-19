<script lang="ts">
	let { className, children } = $props();
</script>

<div class="{className} sm:px-8">
	<div class="mx-auto max-w-7xl lg:px-8">
		{@render children?.()}
	</div>
</div>
