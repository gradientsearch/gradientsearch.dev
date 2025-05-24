<script lang="ts">
	import { posts, type post } from '../posts';
	import PageSubtitle from '../../../../components/pageSubtitle.svelte';
	import PageLayout from '../../../../components/layout/pageLayout.svelte';
	import PageHeader from '../../../../components/pageHeader.svelte';
	import PageParagraph from '../../../../components/pageParagraph.svelte';
	import { base } from '$app/paths';

	let p: post = posts[8]; // 0 based post 9
	let title = p.title;
	let date = p.date;
	let backText = 'blog';
	let backHref = '/blog';
</script>

<PageLayout {backHref} {backText} {title} {date}>
	<PageSubtitle className="underline underline-offset-8 decoration-sky-500 capitalize"
		>type is life! type is life! 😆</PageSubtitle
	>
	<img src="{base}/blog/9/cert.jpg" alt="cert" />

	<PageParagraph>
		I’ve been really impressed with the learning content from ArdanLabs. I first came across it
		through my Learning O'Reilly subscription, and it’s been such a great resource.
	</PageParagraph>

	<PageParagraph>
		After going through the course, I gained a much deeper understanding of how to write Go code
		that’s both more efficient and more in line with Go’s best practices. The class gave me a solid
		foundation in Go’s internals, helping me understand the important trade-offs between
		readability, simplicity, and performance. Now, I have a better grasp of data semantics and how
		to design code that balances both mechanical sympathy and data-oriented design principles.
	</PageParagraph>

	<PageParagraph>
		I also picked up a lot about the importance of package-oriented design, which has really helped
		me organize my Go projects in a way that makes them more maintainable in the long run. All in
		all, the course gave me the tools I need to make smarter, more thoughtful engineering decisions
		that significantly improve the quality and performance of my Go code.
	</PageParagraph>

	<p>
		<a
			target="_blank"
			class="text-sky-500"
			href="https://www.ardanlabs.com/training/individual-on-demand/ultimate-go-bundle/">Courses</a
		>
	</p>
</PageLayout>
