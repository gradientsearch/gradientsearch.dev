<script lang="ts">
	import { posts, type post } from '../posts';
	import PageSubtitle from '../../../../components/pageSubtitle.svelte';
	import PageLayout from '../../../../components/layout/pageLayout.svelte';
	import PageParagraph from '../../../../components/pageParagraph.svelte';

	let p: post = posts[2];
	let title = p.title;
	let date = p.date;
	let backText = 'blog';
	let backHref = '/blog';
</script>

<!-- POST 2 -->

<PageLayout {backHref} {backText} {title} {date}>
	<PageSubtitle className="underline underline-offset-8 decoration-sky-500">Demo</PageSubtitle>
	<PageParagraph>
		In this demo, I showcase an open-source password manager I’m currently developing, which
		integrates with HashiCorp Vault via a Vault plugin. I walk through the process of registering a
		user, unlocking the password manager, and creating and viewing passwords. Additionally, I
		explain how password entries are stored in Vault using the KV-v2 secret engine, including the
		encryption and decryption processes, and how Vault policies control access to these entries.
	</PageParagraph>
	<div class="pt-10">
		<iframe
		class="md:min-h-[315px] min-h-[250px] w-full"
			src="https://www.youtube.com/embed/T7pL32kxAhQ?si=Ef4lowBpqeODZPUE"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
</PageLayout>
