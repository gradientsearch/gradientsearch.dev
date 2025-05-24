<script lang="ts">
	import Header from '../../components/root/header.svelte';
	let { children } = $props();

	//highlight.js
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';

	import Footer from '../../components/root/footer.svelte';
</script>

<svelte:head>
	<meta property="description" content="hello world" />
</svelte:head>

<Header variant="main"></Header>

<main class="flex-1">
	{@render children?.()}
</main>

<Footer variant="main"></Footer>
