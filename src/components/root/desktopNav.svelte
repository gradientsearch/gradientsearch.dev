<script lang="ts">
	import { navItems } from './navItems';
</script>

<nav class="ml-8 hidden flex-1 lg:flex">
	<ul
		class="flex gap-1 rounded-full text-sm font-medium text-zinc-800 transition-colors dark:text-zinc-200"
	>
		{#each navItems as i}
			<li>
				<a
					class="relative flex gap-1 rounded px-4 py-1 text-zinc-800 transition-colors focusable hover:text-black dark:text-zinc-200 dark:hover:text-white after:absolute after:bottom-0.5 after:left-1/2 after:h-0.5 after:w-0 after:rounded-sm after:bg-indigo-500 after:transition-all aria-current:after:left-3.5 aria-current:after:right-3 aria-current:after:w-[calc(100%-32px)] dark:after:bg-indigo-400"
					href={i.href}><span class="z-10">{i.label}</span></a
				>
			</li>
		{/each}
	</ul>
</nav>
