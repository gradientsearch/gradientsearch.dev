<script lang="ts">
	import { posts, type post } from '../posts';
	import PageSubtitle from '../../../../components/pageSubtitle.svelte';
	import PageLayout from '../../../../components/layout/pageLayout.svelte';
	import PageParagraph from '../../../../components/pageParagraph.svelte';

	let p: post = posts[5];
	let title = p.title;
	let date = p.date;
	let backText = 'blog';
	let backHref = '/blog';
</script>

<PageLayout {backHref} {backText} {title} {date}>
	<PageSubtitle className="underline underline-offset-8 decoration-sky-500">Demo</PageSubtitle>
	<PageParagraph>
		In this demo, I will showcase new features, including creating a new bundle and sharing bundles
		with other users.
	</PageParagraph>
	<div class="pt-10">
		<iframe
			class="md:min-h-[315px] min-h-[250px] w-full"
			src="https://www.youtube.com/embed/6eTl_xgoaoc?si=zL53TtsNcgxAKjrO"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
</PageLayout>
