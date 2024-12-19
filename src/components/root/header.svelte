<script>
	import Container from '../container/container.svelte';
	import Swoop from './swoop.svelte';
	import Navbar from './navbar.svelte';

	let { variant = $bindable() } = $props();
</script>

{#if variant === 'home'}
	<header class="sticky z-50 flex flex-col" style="height: 350px; overflow: hidden;">
		<div class="w-full">
			<Swoop>
				<Container>
					<Navbar></Navbar>
				</Container>
			</Swoop>
		</div>
	</header>
{/if}

{#if variant === 'main'}
	<header
		class="sticky top-0 w-full bg-slate-900 bg-opacity-50 text-white z-50 flex flex-col"
		style="min-height: 48px;"
	>
		<div class="w-full">
			<Container>
				<Navbar></Navbar>
			</Container>
		</div>
	</header>
{/if}
