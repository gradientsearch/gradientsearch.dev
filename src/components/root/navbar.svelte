<script lang="ts">
	import DesktopNav from './desktopNav.svelte';
	import MobileNav from './mobileNav.svelte';
	import { base } from '$app/paths';
</script>

<div class="flex justify-center items-center">
	<a class="" href="{base}/">
		<img src="{base}/images/name.svg" alt="name" class="w-60 max-h-[64px]" />
	</a>
	<DesktopNav></DesktopNav>
	<div class="flex flex-1 items-center justify-end gap-2 sm:gap-3">
		<a
			class="group rounded-full p-2 focusable"
			aria-label="Open source code on GitHub"
			href="https://github.com/gradientsearch/gradientsearch.dev"
			target="_blank"
			><img class="h-[24px]" src="{base}/images/github-mark-white.svg" alt="github icon" /></a
		>
		<MobileNav></MobileNav>
	</div>
</div>
