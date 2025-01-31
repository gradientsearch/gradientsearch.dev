<script lang="ts">
	import { posts, type post } from '../posts';
	import PageSubtitle from '../../../../components/pageSubtitle.svelte';
	import PageLayout from '../../../../components/layout/pageLayout.svelte';
	import PageParagraph from '../../../../components/pageParagraph.svelte';

	let p: post = posts[3];
	let title = p.title;
	let date = p.date;
	let backText = 'blog';
	let backHref = '/blog';
</script>

<!-- POST 2 -->

<PageLayout {backHref} {backText} {title} {date}>
	<PageSubtitle className="underline underline-offset-8 decoration-sky-500">Tutorial</PageSubtitle>
	<PageParagraph>
		In this tutorial, we’ll walk through setting up the development environment for PwManager and
		registering a user. We’ll cover the steps to configure the environment, start the client-side
		app, log into Vault, and create a user account. You’ll also learn how to store the secret key,
		unlock the password manager, and add your first password entry.
	</PageParagraph>
	<div class="pt-10">
		<iframe
			class="md:min-h-[315px] min-h-[250px] w-full"
			src="https://www.youtube.com/embed/bdtOFmLfTd8?si=u8FsL1UWs2AxWZvq"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
</PageLayout>
