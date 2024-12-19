<script lang="ts">
	import { formatDate } from '$lib/date';
	import { ArrowLeft } from 'lucide-svelte';
	import Container from '../container/container.svelte';
	import PageTitle from '../pageTitle.svelte';
	import Prose from '../prose.svelte';
	let { backText, backHref, title, date, children } = $props();
</script>

<svelte:head>
	<title>Stephen O'Dwyer | {title}</title>
	<meta name="description" content="Stephen O'Dwyer {title}" />
</svelte:head>

<Container className="mt-16 sm:mt-20">
	<div class="xl:relative">
		<div class="mx-auto max-w-2xl">
			<a
				aria-label={backText}
				class="mb-8 hidden h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition hover:text-zinc-700 hover:ring-zinc-200 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 lg:flex xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:text-zinc-500 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:text-zinc-400 dark:hover:ring-white/20"
				href={backHref}
				type="button"
			>
				<ArrowLeft class="size-4" />
			</a>

			<article>
				<header class="flex flex-col">
					<PageTitle className="text-3xl sm:text-4xl">{title}</PageTitle>
					<div>
						<time
							class="text-base text-zinc-500 transition-colors dark:text-zinc-300"
							dateTime={date}
						>
							{formatDate(date)}
						</time>
					</div>
				</header>

				<Prose className="mt-8">{@render children?.()}</Prose>
			</article>
		</div>
	</div>
</Container>
