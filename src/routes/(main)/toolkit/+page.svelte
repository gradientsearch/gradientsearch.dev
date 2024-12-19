<script lang="ts">
	import { Link } from 'lucide-svelte';
	import Simple from '../../../components/layout/simple.svelte';
	import PageSubtitle from '../../../components/pageSubtitle.svelte';
	import { tools, type tool } from './tools';
	import { base } from '$app/paths';

	let title = 'Essential Tools for Modern Software Engineering';
	let subtitle =
		' My Preferred Stack for Software Development, Cybersecurity, Machine Learning, and Site Reliability Engineering';
</script>

<svelte:head>
	<title>Stephen O'Dwyer | Toolkit</title>
</svelte:head>
<Simple {title} {subtitle}>
	<ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3" role="list">
		{#each tools as t}
			<a class="card card-hover flex flex-col justify-between" href={'https://' + t.href}>
				<header class="card-header">
					<div class="relative z-10 flex h-12 w-12 items-center justify-center">
						<img src="{base}{t.logo}" alt="company logo" />
					</div>
					<h2 class="mt-6 text-base font-semibold">
						<span class="text-zinc-800 transition-colors dark:text-zinc-100">
							{t.name}
						</span>
					</h2>
				</header>
				<section class="ps-4 pe-4">
					<PageSubtitle className="mb-6">
						{t.description}
					</PageSubtitle>
				</section>

				<footer class="card-footer">
					<span class="flex flex-row items-center"> <Link size={36} class="pr-3" /> {t.href} </span>
				</footer>
			</a>
		{/each}
	</ul>
</Simple>
