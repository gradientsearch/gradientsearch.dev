<script lang="ts">
	import Container from '../../../components/container/container.svelte';
	import PageSubtitle from '../../../components/pageSubtitle.svelte';
	import PageTitle from '../../../components/pageTitle.svelte';
	import Prose from '../../../components/prose.svelte';
	import Socials from '../../../components/socials.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Stephen O'Dwyer | About</title>
	<meta name="description" content="Stephen O'Dwyer Software, Cyber, ML, SRE" />
</svelte:head>

<Container className="mt-16 sm:mt-20">
	<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
		<div class="lg:order-first lg:row-span-2">
			<PageTitle className="mb-12">Hi, I’m Stephen 👋</PageTitle>

			<div class="space-y-7 text-base text-zinc-700 transition-colors dark:text-zinc-300">
				<Prose className="">
					<PageSubtitle>
						Throughout my career, I have developed a strong skill set in software development,
						cybersecurity, site reliability engineering, and machine learning, having successfully
						addressed business challenges across various stages of the product development
						lifecycle. As an avid learner, I stay adaptable to the ever-evolving technology
						landscape, and I am passionate about the innovation and opportunities the tech industry
						offers. I have had the privilege of working for such companies as Equinix, Global
						Payments, and Georgia Tech Research Institute.
					</PageSubtitle>

					<PageSubtitle>
						Whether I'm writing code in Go, scripting in Python, configuring CI/CD workflows, or
						developing Kubernetes manifests, I focus on ensuring clarity, correctness, and
						efficiency to optimize product maintenance. I follow Kent Beck’s design principles,
						which emphasize: 1) Passing tests, 2) Revealing intention, 3) Avoiding duplication, and
						4) Using the fewest elements. Having worked on numerous legacy systems, I am
						particularly mindful of the importance of future-proofing solutions with an eye toward
						maintaining code quality and professional courtesy for future developers.
					</PageSubtitle>

					<PageSubtitle>
						Outside of work, I enjoy outdoor activities like hiking, biking, and recreational
						sports. Indoors, I spend my time reading, experimenting with bread baking, and exploring
						various tech interests, including Arduino microcontrollers, security-focused Android
						distributions (such as LineageOS and CalyxOS), SELinux, container security, and diving
						into the world of 3D printing.
					</PageSubtitle>
				</Prose>
			</div>
		</div>

		<div class="lg:pl-20">
			<div class="max-w-xs px-2.5 lg:max-w-none">
				<img class="h-auto max-w-full rounded-lg rotate-3" src="{base}/images/avatar.jpeg" alt="" />
			</div>

			<div>
				<Socials orientation="vertical"></Socials>
			</div>
		</div>
	</div>
</Container>
