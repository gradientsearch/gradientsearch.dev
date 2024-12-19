<script lang="ts">
	import { onMount } from 'svelte';
	import Container from '../../../components/container/container.svelte';
	import PageTitle from '../../../components/pageTitle.svelte';
	import Prose from '../../../components/prose.svelte';
	import { base } from '$app/paths';
	import roles from '../../work.json';

	class overview {
		summary: string;
		contributions: Map<string, string[]>;
		skills: string;
	}

	class role {
		name: string;
		title: string;
		start: string;
		end: string;
		iconPath: string;
		href: string;
		summary: string;
		overview: overview;
	}

	let rls: role[] = $state([]);
	onMount(() => {
		roles.forEach((data: any) => {
			let r = JSON.parse(JSON.stringify(data)) as role;
			r.overview.contributions = new Map(Object.entries(r.overview.contributions));
			rls.push(r);
		});
	});
</script>

<svelte:head>
	<title>Stephen O'Dwyer | Resume</title>
</svelte:head>

<Container className="mx-auto mt-16 max-w-6xl md:mt-20">
	<div class="grid-cols-[auto,1fr] gap-x-8 lg:grid">
		<img
			class="rounded-lg h-32 row-span-2 hidden aspect-square size-32 rounded-md bg-zinc-100 object-cover lg:block dark:bg-zinc-800"
			src="{base}/images/avatar.jpeg"
			alt=""
		/>
		<PageTitle className="mb-6 lg:mb-0">Hi, I’m Stephen 👋</PageTitle>
		<p class="text-gray-300 lg:[text-wrap:balance]">
			I leverage my education, work experience, and leadership roles, combined with strong critical
			and analytical skills, to drive development efforts in cybersecurity, data science, site
			reliability engineering, and software development. My goal is to create dependable, scalable,
			and secure solutions that exceed expectations and deliver impactful results. I am dedicated to
			writing extensible, testable code that supports long-term success and innovation.
		</p>
	</div>

	<div class="flex w-full items-center justify-center">
		<Prose className="">
			<div></div>
			<div class="m-0">
				{#each rls as role}
					<div>
						<h2>
							{role.title} at <a target="_blank" href={role.href}>{role.name}</a>
						</h2>
						<p class="-mt-3 text-sm text-zinc-500">
							{role.start} - {role.end}
						</p>

						<p>
							{role.overview.summary}
						</p>

						{#each role.overview.contributions.entries() as [key, value]}
							<p class="text-lg">{key}</p>
							{#each value as v}
								<p>{v}</p>
							{/each}
						{/each}

						<p class="text-lg">🧰 Skills:</p>
						<p>{role.overview.skills}</p>
					</div>
				{/each}
			</div>
		</Prose>
	</div>
</Container>
