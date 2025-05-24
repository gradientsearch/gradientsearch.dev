<script lang="ts">
	import { posts, type post } from '../posts';
	import PageSubtitle from '../../../../components/pageSubtitle.svelte';
	import PageLayout from '../../../../components/layout/pageLayout.svelte';
	import PageHeader from '../../../../components/pageHeader.svelte';
	import PageParagraph from '../../../../components/pageParagraph.svelte';
	import Code from '../../../../components/code.svelte';
	import Emphasis from '../../../../components/emphasis.svelte';
	import { base } from '$app/paths';
	let p: post = posts[1];
	let title = p.title;
	let date = p.date;
	let backText = 'blog';
	let backHref = '/blog';

	let layoutjs = `/** +layout.js */
export const ssr = false;
export const prerender = true;
export const trailingSlash = "always";`;

	let npmInstall = `npm i -D @sveltejs/adapter-static`;

	let svelteConfig = `/** static.config.js */
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};
export default config;`;

	let _base = `<script lang="ts">
	import { base } from "$app/paths";
<\/script>

<a href="{base}/blog" aria-label="blog">blog</a>

<img class="h-[24px]"
	 src="{base}/images/github-mark-white.svg" 
	 alt="github icon"/>;`;

	let nojekyll = `📦src
 ┣ 📂static
 ┗ ┣📄 .nojekyll`;

	let workflow = `name: Deploy to GitHub Pages

on:
  push:
    branches:
      - 'main'
      - 'confgiure-static-build'

jobs:
  build_site:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: build
        env:
          BASE_PATH: '/$\{{ github.event.repository.name }}'
        run: |
          npm run build

      - name: Upload Artifacts
        uses: actions/upload-pages-artifact@v3
        with:
         # this should match the pages option in your adapter-static options
          path: 'build/'

  deploy:
    needs: build_site
    runs-on: ubuntu-latest

    permissions:
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: $\{{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
 `;

	let Arecords = `# A records 
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

# AAAA records
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
 `;
</script>

<!-- POST 2 -->

<PageLayout {backHref} {backText} {title} {date}>
	<PageSubtitle className="underline underline-offset-8 decoration-sky-500"
		>A Step-by-Step Guide</PageSubtitle
	>
	<PageParagraph>
		In today’s web development world, building fast and lightweight static sites is easier than
		ever. One such powerful framework for creating modern, high-performance static sites is Svelte.
		Known for its simplicity and speed, Svelte compiles down to optimized JavaScript, offering an
		excellent user experience with minimal overhead.
	</PageParagraph>

	<PageParagraph>
		Once you've developed your Svelte site, the next challenge is deployment—specifically hosting it
		for free. Enter GitHub Pages, a reliable, cost-effective service that lets you host static
		websites directly from a GitHub repository. In this blog post, we'll walk you through the
		process of hosting your Svelte static site on GitHub Pages, from setup to deployment, so you can
		share your project with the world without any hassle.
	</PageParagraph>

	<PageParagraph>Let's dive into the steps!</PageParagraph>

	<TableOfContents />

	<div use:tocCrawler={{ mode: 'generate' }}>
		<PageHeader className="">1. Configuring Svelte to Build a Static Site</PageHeader>

		<PageParagraph>Disable SSR, enable prerendering, and remove trailing slashes.</PageParagraph>

		<Code code={layoutjs} lang="javascript"></Code>

		<PageParagraph>
			Install the <Emphasis>apter-static</Emphasis> package and update your <Emphasis
				>svelte.config.js</Emphasis
			> file. Pay special attention to the base path setting, as it defines the base URL for your app
			and is used whenever referencing routes or static files.
		</PageParagraph>

		<Code code={npmInstall} lang="bash"></Code>

		<Code code={svelteConfig} lang="javascript"></Code>

		<PageHeader className>2. Update Anchor Tags and Routes</PageHeader>

		<PageParagraph>
			If you're hosting from <Emphasis>username</Emphasis>.github.io/<Emphasis>repo-name</Emphasis>,
			you'll need to update the base path for your anchor tags and routes. For custom domains, this
			step isn't required. However, since the repository is under the MIT license, I configured the
			site with the base path and set the repo name to match my custom domain.
		</PageParagraph>

		<Code code={_base} lang="xml"></Code>

		<PageHeader className>3. .nojekyll file</PageHeader>
		<PageParagraph>
			Add <Emphasis>.nojekyll</Emphasis> file in the <Emphasis>static</Emphasis> directory.
		</PageParagraph>

		<Code code={nojekyll} lang="text"></Code>

		<PageHeader className="">4. Setting Up GitHub Workflow for Automated Deployment</PageHeader>

		<Code code={workflow} lang="yaml"></Code>

		<PageHeader className="">5. Configure DNS & Enable GitHub Pages</PageHeader>

		<PageParagraph>
			The next step is to configure your DNS if you're using a custom domain. Add the following
			records for your domain.
		</PageParagraph>

		<Code code={Arecords} lang="text"></Code>

		<PageParagraph>
			In <Emphasis>Settings > Pages</Emphasis> set Source to <Emphasis>Github Actions</Emphasis> and
			add your <Emphasis>Custom Domain</Emphasis>.
		</PageParagraph>

		<img src="{base}/blog/2/github-pages.png" alt="settings page" />

		<h2 class="text-base font-semibold tracking-tight" data-toc-ignore>
			Wrapping Up: Successfully Hosting Your Svelte Site on GitHub Pages
		</h2>

		<PageParagraph>
			Hosting a static Svelte site on GitHub Pages is a straightforward and cost-effective way to
			share your project with the world. By configuring Svelte for static site generation, setting
			up the necessary GitHub workflow, and adjusting your DNS settings for custom domains, you can
			easily deploy and maintain your site. Whether you’re using the default GitHub Pages URL or a
			custom domain, the process ensures your site is fast, reliable, and ready to go live. With
			these steps, you're all set to showcase your Svelte project, free of charge, directly from
			GitHub Pages!
		</PageParagraph>
	</div>
</PageLayout>
