<script lang="ts">
	import { posts, type post } from '../posts';
	import PageSubtitle from '../../../../components/pageSubtitle.svelte';
	import PageLayout from '../../../../components/layout/pageLayout.svelte';
	import PageParagraph from '../../../../components/pageParagraph.svelte';

	let p: post = posts[4];
	let title = p.title;
	let date = p.date;
	let backText = 'blog';
	let backHref = '/blog';
</script>

<!-- POST 2 -->

<PageLayout {backHref} {backText} {title} {date}>
	<PageSubtitle className="underline underline-offset-8 decoration-sky-500">Demo</PageSubtitle>
	<PageParagraph>
		In this demo, we go over how to update, add, and delete entries in a password manager. You’ll
		see how to modify existing passwords, add extra details like text or date, and remove items or
		entries as needed. We also demonstrate how to work with different types of data such as text,
		passwords, and dates. This session builds on the first demo, showing the new functionality added
		to manage password entries more effectively.
	</PageParagraph>
	<div class="pt-10">
		<iframe
			class="md:min-h-[315px] min-h-[250px] w-full"
			src="https://www.youtube.com/embed/IN9dkl5nD6M?si=CLMztd9T6IOMFAsw"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
</PageLayout>
