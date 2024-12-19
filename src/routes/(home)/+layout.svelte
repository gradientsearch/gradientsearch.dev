<script lang="ts">
	import Header from '../../components/root/header.svelte';
	let { children } = $props();

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Container from '../../components/container/container.svelte';
	import Footer from '../../components/root/footer.svelte';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<Header variant="home"></Header>

{@render children?.()}

<Footer variant="home"></Footer>
