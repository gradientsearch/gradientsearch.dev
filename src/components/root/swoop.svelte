<script lang="ts">
	let { children } = $props();
</script>

<div
	style="background-image: url(images/wave.svg); background-size:100% 100%; height: 350px; width: 100%"
>
	{@render children?.()}
</div>
