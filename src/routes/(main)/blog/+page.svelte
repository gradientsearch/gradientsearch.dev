<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
	import Simple from '../../../components/layout/simple.svelte';
	import { posts } from './posts';
	import { formatDate } from '../../../lib/date';
	import Post from '../../../components/post.svelte';
	let title = 'Learning, Building, and Growing';
	let subtitle = 'Insights on Software Craftsmanship, Problem-Solving, and Teamwork';
</script>

<svelte:head>
	<title>Stephen O'Dwyer | Blog</title>
	<meta name="description" content="Stephen O'Dwyer Blog" />
</svelte:head>

<Simple {title} {subtitle}>
	<div
		class="transition-colors md:border-l-2 md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
	>
		<div class="flex max-w-3xl flex-col space-y-16">
			{#each posts.reverse() as p}
				<Post variant={'main'} id={p.id} title={p.title} description={p.description} date={p.date}
				></Post>
			{/each}
		</div>
	</div>
</Simple>

<style>
</style>
