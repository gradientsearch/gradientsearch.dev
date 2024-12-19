<script lang="ts">
	import { AlignJustify } from 'lucide-svelte';
	import { navItems } from './navItems';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { base } from '$app/paths';

	let isOpen = $state(false);

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};
</script>

<div class="flex items-center justify-center lg:hidden">
	<button
		class="m-0 pe-3 pb-0"
		type="button"
		aria-expanded="true"
		aria-haspopup="true"
		onclick={toggleDropdown}
		use:popup={popupFeatured}
	>
		<AlignJustify size={32} />
	</button>

	<div
		data-popup="popupFeatured"
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
</div>
