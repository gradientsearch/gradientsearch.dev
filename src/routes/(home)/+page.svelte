<script lang="ts">
	import PageSubtitle from '../../components/pageSubtitle.svelte';
	import PageTitle from '../../components/pageTitle.svelte';
	import Socials from '../../components/socials.svelte';
	import Container from '../../components/container/container.svelte';
	import workData from '../work.json';
	import { posts } from '../(main)/blog/posts';
	import Post from '../../components/post.svelte';
	import { base } from '$app/paths';

	interface Job {
		name: string;
		title: string;
		start: string;
		end: string;
		iconPath: string;
		href: string;
	}

	let jobs: Job[] = workData;

	let ps = [...posts].reverse().slice(0, 3);
</script>

<svelte:head>
	<title>Stephen O'Dwyer - Data Driven Security Software Engineer | Software, Cyber, ML, SRE | {base}</title>
	<meta name="description" content="Stephen O'Dwyer Introduction" />
</svelte:head>

<Container className={'pt-6 sm:pt-12 lg:pt-20'}>
	<PageTitle>Data Driven</PageTitle>
	<PageTitle>Security Software</PageTitle>
	<PageTitle>Engineer</PageTitle>

	<h2 class="py-3 underline underline-offset-8">Software, Cyber, ML, SRE</h2>

	<PageSubtitle>
		<div>
			Hi I'm Stephen <div class="inline-block animate-bounce">👋</div>
			, a full-stack software engineer with a deep passion for learning accompanied with a curious mindset.
			My interests span software development, cybersecurity, machine learning, and site reliability engineering.
			I'm always exploring new technologies and honing my skills. I thrive in collaborative environments,
			working alongside other talented engineers to solve challenging problems while having fun in the
			process.
		</div>
	</PageSubtitle>

	<Socials></Socials>
</Container>

<Container className={'mt-24 md:mt-28 pb-16'}>
	<div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
		<div class="flex flex-col gap-16">
			{#each ps as p}
				<Post variant={'home'} id={p.id} title={p.title} description={p.description} date={p.date}>
					<span></span>
				</Post>
			{/each}
		</div>
		<div class="space-y-10 lg:pl-16 xl:pl-24">
			<div
				class="rounded-2xl border border-zinc-100 p-6 transition-colors @container dark:border-zinc-700/40"
			>
				<h2 class="flex text-sm font-semibold text-zinc-900 transition-colors dark:text-zinc-100">
					<svg
						aria-hidden="true"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						class="size-6 flex-none"
						><path
							class="fill-zinc-100 stroke-zinc-400 transition-colors dark:fill-zinc-100/10 dark:stroke-zinc-500"
							d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
						></path><path
							class="stroke-zinc-400 transition-colors dark:stroke-zinc-500"
							d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
						></path></svg
					><span class="ml-3">Work</span>
				</h2>
				<ol class="mt-6 space-y-4">
					{#each jobs as j}
						<li class="flex gap-4">
							<div
								class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition-colors dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
							>
								<img src={j.iconPath} alt="company logo" />
							</div>
							<dl class="flex w-full flex-col flex-wrap gap-x-2 @[400px]:flex-row">
								<dt class="sr-only">Company</dt>
								<dd class="w-full flex-none">
									<a
										class="-mx-1 rounded px-1 text-sm font-medium text-zinc-900 transition-colors focusable hover:text-sky-500 dark:text-zinc-100 dark:hover:text-sky-400"
										href={j.href}
										rel="noreferrer"
										target="_blank">{j.name}</a
									>
								</dd>
								<dt class="sr-only">Role</dt>
								<dd class="text-xs text-zinc-500 transition-colors dark:text-zinc-300">
									{j.title}
								</dd>
								<dt class="sr-only">Date</dt>
								<dd
									aria-label="2023 until 2024"
									class="text-xs text-zinc-400 transition-colors @[400px]:ml-auto dark:text-zinc-500"
								>
									<time datetime={j.start}>{j.start}</time> <span aria-hidden="true">—</span>
									<time datetime={j.end}>{j.end}</time>
								</dd>
							</dl>
						</li>
					{/each}
				</ol>
				<a
					class="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm outline-offset-2 transition-all focusable active:transition-none bg-zinc-100 hover:text-sky-600 font-medium text-zinc-900 hover:bg-zinc-200 active:bg-zinc-200/80 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700/60 dark:hover:text-sky-400 dark:active:bg-zinc-800/80 cursor-pointer group mt-6 w-full"
					href="{base}/resume"
					>View Resume<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						class="size-5"
						><path
							fill-rule="evenodd"
							d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
							clip-rule="evenodd"
						></path></svg
					></a
				>
			</div>
		</div>
	</div>
</Container>
