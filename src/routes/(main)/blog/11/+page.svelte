<script lang="ts">
	import { posts, type post } from '../posts';
	import PageSubtitle from '../../../../components/pageSubtitle.svelte';
	import PageLayout from '../../../../components/layout/pageLayout.svelte';
	import PageHeader from '../../../../components/pageHeader.svelte';
	import PageParagraph from '../../../../components/pageParagraph.svelte';

	let p: post = posts[10];
	let title = p.title;
	let date = p.date;
	let backText = 'blog';
	let backHref = '/blog';
</script>

<!-- POST 11 -->

<PageLayout {backHref} {backText} {title} {date}>

	<PageParagraph>
		I’m excited to share that I’ve started a new role as a Platform Engineer! Right now, I’m focused
		on setting up the core CI/CD platform using ArgoCD, building out GitOps workflows to support a
		growing set of microservices. The pace is fast, and there are plenty of tight deadlines—but the
		work is incredibly rewarding. Best of all, I’m surrounded by a talented and collaborative team
		that makes even the toughest challenges enjoyable. Looking forward to what we build together!
		💻🛠️
	</PageParagraph>

</PageLayout>
