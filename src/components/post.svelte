<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';

	import { formatDate } from '../lib/date';

	let { variant, date, id, title, description, children } = $props();
</script>

{#if variant === 'home'}
	<article class="md:grid md:grid-cols-4 md:items-baseline">
		<time
			class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 transition-colors dark:text-zinc-400 col-span-4"
		>
			<span aria-hidden="true" class="inset-y-0 left-0 flex items-center">
				<span class="h-4 w-0.5 rounded-full bg-zinc-200 transition-colors dark:bg-zinc-500">
					<p
						class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 transition-colors dark:text-zinc-400"
					></p>
				</span>
			</span>
			<span class="pl-4">{formatDate(date)}</span>
		</time>

		<a class="card card-hover col-span-4" href="/blog/{id}">
			<header class="card-header">
				<h2 class="text-base font-semibold tracking-tight">{title}</h2>
			</header>
			<section class="p-4">{description}</section>
			<footer class="card-footer">
				<div
					aria-hidden="true"
					class="relative z-10 mt-4 flex items-center text-sm font-medium text-sky-500 transition-colors dark:text-sky-400"
				>
					Read post<ChevronRight class="ml-1 size-5 transition-[margin] group-hover:ml-1.5" />
				</div>
			</footer>
		</a>
	</article>
{/if}

{#if variant === 'main'}
	<article class="md:grid md:grid-cols-4 md:items-baseline">
		<time
			class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 transition-colors dark:text-zinc-400 md:hidden"
		>
			<span aria-hidden="true" class="inset-y-0 left-0 flex items-center">
				<span class="h-4 w-0.5 rounded-full bg-zinc-200 transition-colors dark:bg-zinc-500">
					<p
						class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 transition-colors dark:text-zinc-400"
					></p>
				</span>
			</span>
			<span class="pl-4">{formatDate(date)}</span>
		</time>

		<a class="card card-hover md:col-span-3" href="/blog/{id}">
			<header class="card-header">
				<h2 class="text-base font-semibold tracking-tight">{title}</h2>
			</header>
			<section class="p-4">{description}</section>
			<footer class="card-footer">
				<div
					aria-hidden="true"
					class="relative z-10 mt-4 flex items-center text-sm font-medium text-sky-500 transition-colors dark:text-sky-400"
				>
					Read post<ChevronRight class="ml-1 size-5 transition-[margin] group-hover:ml-1.5" />
				</div>
			</footer>
		</a>

		<time
			class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 transition-colors dark:text-zinc-400 mt-1 hidden transition-colors after:absolute after:left-[-33px] after:top-[4px] after:hidden after:h-4 after:w-4 after:rounded-full after:border-4 after:border-zinc-300 after:bg-zinc-100 after:transition-colors md:block md:after:block dark:after:border-zinc-600 dark:after:bg-zinc-800"
		>
			{formatDate(date)}
		</time>
	</article>
{/if}
