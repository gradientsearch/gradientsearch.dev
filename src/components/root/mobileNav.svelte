<script lang="ts">
	import { AlignJustify } from 'lucide-svelte';
	import { navItems } from './navItems';
	import { Popover } from '@skeletonlabs/skeleton-svelte';
	import { base } from '$app/paths';

	let isOpen = $state(false);

	function toggleDropdown() {
		isOpen = !isOpen;
	}
</script>

<div class="flex items-center justify-center lg:hidden">
	<Popover
		zIndex="100"
		open={isOpen}
		onOpenChange={(e) => (isOpen = e.open)}
		positioning={{ placement: 'top' }}
		triggerBase="btn preset-tonal"
		contentBase="card bg-surface-200-800 p-4 space-y-4 max-w-[320px]"
		arrow
		arrowBackground="!bg-surface-200 dark:!bg-surface-800"
	>
		{#snippet trigger()}<AlignJustify size={32} />{/snippet}
		{#snippet content()}
			<div
				class="absolute right-0 z-100 mt-2 w-56 origin-top-right rounded-md bg-surface-900 shadow-lg ring-1 ring-black/5 focus:outline-none"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabindex="-1"
			>
				<ul class="list">
					{#each navItems as i}
						<li>
							<a
								onclick={toggleDropdown}
								class="relative flex gap-1 rounded px-4 py-1 text-zinc-800 transition-colors focusable hover:text-black dark:text-zinc-200 dark:hover:text-white after:absolute after:bottom-0.5 after:left-1/2 after:h-0.5 after:w-0 after:rounded-sm after:bg-indigo-500 after:transition-all aria-current:after:left-3.5 aria-current:after:right-3 aria-current:after:w-[calc(100%-32px)] w-full dark:after:bg-indigo-400"
								href={i.href}><span class="z-10">{i.label}</span></a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/snippet}
	</Popover>
	<!-- 
	<button
		class="m-0 pe-3 pb-0"
		type="button"
		aria-expanded="true"
		aria-haspopup="true"
		onclick={toggleDropdown}
	>
	</button> -->
</div>
