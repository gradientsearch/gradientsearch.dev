<script lang="ts">
	import Container from '../container/container.svelte';
	import PageSubtitle from '../pageSubtitle.svelte';
	import PageTitle from '../pageTitle.svelte';

	let { title, subtitle, noMargin = false, children } = $props();
	let className = 'mt-16 sm:mt-20';
</script>

<Container {className}>
	<header class="max-w-2xl">
		<PageTitle>{title}</PageTitle>

		<PageSubtitle>{subtitle}</PageSubtitle>
	</header>
	<div class={noMargin ? '' : 'mt-16 sm:mt-20'}>{@render children?.()}</div>
</Container>
