<script lang="ts">
	import { posts, type post } from '../posts';
	import PageSubtitle from '../../../../components/pageSubtitle.svelte';
	import PageLayout from '../../../../components/layout/pageLayout.svelte';
	import PageHeader from '../../../../components/pageHeader.svelte';
	import PageParagraph from '../../../../components/pageParagraph.svelte';
	import Code from '../../../../components/code.svelte';
	import Emphasis from '../../../../components/emphasis.svelte';
	import { base } from '$app/paths';

	let p: post = posts[7];
	let title = p.title;
	let date = p.date;
	let backText = 'blog';
	let backHref = '/blog';

	let json = `{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "config:recommended"
  ]
}
`;
</script>

<!-- POST 8-->

<PageLayout {backHref} {backText} {title} {date}>
	<PageSubtitle className="underline underline-offset-8 decoration-sky-500"
		>Cross-platform Dependency Automation</PageSubtitle
	>
	<PageParagraph>
		Keeping your project dependencies up to date is essential to prevent your project from falling
		behind, making it difficult to update to newer versions in the future. Additionally, package
		updates often include critical security patches, which is why maintaining an up-to-date
		dependency list is crucial. However, manually managing and updating dependencies can be a
		tedious and error-prone task. This is where automation can make a significant difference.
	</PageParagraph>

	<PageParagraph>
		One of the easiest ways to automate this process is by using an open-source tool called Renovate
		Bot. Renovate is an automated dependency update tool that helps ensure your project's
		dependencies are always current. When Renovate runs on your repository, it scans for references
		to dependencies—whether they are public or private—and checks for newer versions. If it finds
		any, Renovate automatically creates pull requests to update those dependencies, saving you time
		and effort.
	</PageParagraph>

	<PageParagraph>
		In this post, I will walk you through how I set up Renovate Bot for this website, demonstrating
		how easy it is to integrate and automate dependency management.
	</PageParagraph>

	<PageParagraph
		>First configure renovate in <a class="text-sky-500" href="https://github.com/apps/renovate">
			Github</a
		>.
	</PageParagraph>

	<img src="{base}/blog/8/1_renovate-app.png" alt="renovate app" />

	<PageParagraph>
		Once you configure the app for your GitHub organization, either for all repos or specific repos,
		Renovate Bot will start onboarding your repos. As you can see from the image below, <a
			class="text-sky-500"
			href="https://github.com/gradientsearch/gradientsearch.dev">gradientsearch.dev</a
		>
		repo status is <Emphasis>onboarding</Emphasis>.
	</PageParagraph>
	<img src="{base}/blog/8/2_renovate-page.png" alt="renovate app" />

	<PageParagraph>
		After a few minutes you will see a PR opened in your repository to <Emphasis
			>Configure Renovate</Emphasis
		>. Go ahead and merge this PR.
	</PageParagraph>
	<img src="{base}/blog/8/3_pr.png" alt="renovate app" />

	<PageParagraph>
		This will merge in a <a
			class="text-sky-500"
			href="https://github.com/gradientsearch/gradientsearch.dev/blob/main/renovate.json"
			>renovate.json</a
		>
		file. There are several configuration
		<a class="text-sky-500" href="https://docs.renovatebot.com/configuration-options/">options</a>.
		The base configuration is below.
	</PageParagraph>

	<Code code={json} lang="json"></Code>

	<PageParagraph>
		Renovate Bot will be working behind the scenes to review the project dependencies. After waiting
		a few more minutes, you will see PRs opened in your repository to upgrade dependencies. Before
		blindly merging the updates, ensure the updates makes sense. Projects with robust testing and a
		CI/CD pipeline that run tests before merging to the main are more comfortable upgrading
		dependencies in this automated way.
	</PageParagraph>
	<img src="{base}/blog/8/4_prs.png" alt="renovate app" />

	<PageParagraph>
		In conclusion, Renovate Bot is a powerful tool that can significantly streamline the process of
		keeping your project dependencies up to date. By automating dependency updates and integrating
		them directly into your workflow, you can save time, reduce manual errors, and ensure your
		project remains secure and maintainable. Setting it up is straightforward, and once configured,
		Renovate Bot works seamlessly in the background, allowing you to focus on more critical tasks
		while keeping your project dependencies in check.
	</PageParagraph>
</PageLayout>
