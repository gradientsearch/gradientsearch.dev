<script lang="ts">
	import PageTitle from '../../../../components/pageTitle.svelte';
	import { posts, type post } from '../posts';
	import Date from '../../../../components/date.svelte';
	import HelloWorld from './code/helloWorld.svelte';
	import PageSubtitle from '../../../../components/pageSubtitle.svelte';
	import Prose from '../../../../components/prose.svelte';
	import PageLayout from '../../../../components/layout/pageLayout.svelte';
	import PageHeader from '../../../../components/pageHeader.svelte';
	import PageParagraph from '../../../../components/pageParagraph.svelte';

	let p: post = posts[0];
	let title = p.title;
	let date = p.date;
	let backText = 'blog';
	let backHref = '/blog';
</script>

<!-- POST 1 -->

<PageLayout {backHref} {backText} {title} {date}>
	<PageSubtitle>
		{p.description}
	</PageSubtitle>

	<PageHeader className="">1. A Personal Website is Essential When Applying for Jobs</PageHeader>

	<PageParagraph>
		When applying for new jobs, especially in fields like software engineering or web development,
		recruiters often expect candidates to have a personal website. It serves as a professional
		portfolio, allowing you to showcase your projects, skills, and achievements in a way that
		resumes and LinkedIn profiles cannot. By presenting your work on a website, you demonstrate not
		only your technical expertise but also your ability to build and maintain your own online
		presence—a skill that's highly valued in today's job market.
	</PageParagraph>

	<PageHeader className="">2. More Creative Control Than Social Media Platforms</PageHeader>

	<PageParagraph>
		While platforms like LinkedIn, Medium, or GitHub provide great outlets to write blogs and market
		your skills, they come with limitations. You're confined by their templates, design
		restrictions, and the overall structure of the platform. A personal website, however, gives you
		full creative control. You can design your site to reflect your unique style and tailor the
		layout, content, and user experience to best showcase your skills. Whether it's a portfolio of
		coding projects, blog posts, or a resume, the possibilities are limitless.
	</PageParagraph>

	<PageHeader className="">3. Improves and Sharpens Your Web Development Skills</PageHeader>

	<PageParagraph>
		Building and maintaining a personal website is an ongoing learning process. Whether you're using
		it to practice front-end development, explore back-end technologies, or experiment with
		different frameworks and design patterns, your website becomes a living project that keeps your
		web development skills sharp. It's also a great way to test new tools and technologies, such as
		CSS frameworks like Tailwind, JavaScript libraries, or even deployment pipelines. As you iterate
		and improve your site, you gain hands-on experience and stay up-to-date with industry trends.
	</PageParagraph>

	<PageHeader className="">4. Showcase Your Personal Website on GitHub</PageHeader>

	<PageParagraph>
		GitHub is a key platform for any developer, and showcasing your personal website there adds
		value to your profile. It provides an opportunity to demonstrate not only the code behind your
		site but also your ability to use version control, collaborate with others, and deploy your
		projects. By hosting your website's code on GitHub, you can make it public for potential
		employers or collaborators to review, which can help set you apart from others who may not have
		a well-maintained public portfolio.
	</PageParagraph>

	<PageHeader className="">Conclusion</PageHeader>

	<PageParagraph>
		A personal website is much more than a digital business card—it's an essential tool that allows
		you to express your professional identity, enhance your skill set, and demonstrate your
		abilities to potential employers or collaborators. Whether you're looking to improve your web
		development skills, create a space to showcase your projects, or simply have more control over
		how your work is presented, building a personal website is a valuable investment in your career.
	</PageParagraph>
</PageLayout>
