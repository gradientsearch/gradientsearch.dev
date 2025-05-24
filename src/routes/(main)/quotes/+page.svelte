<script lang="ts">
	import { ArrowUp, Link } from 'lucide-svelte';

	import { quotes } from './quotes';
	import { onMount } from 'svelte';
	import PageSubtitle from '../../../components/pageSubtitle.svelte';
	import Container from '../../../components/container/container.svelte';
	import PageTitle from '../../../components/pageTitle.svelte';

	let title = 'Curated Software Engineering Quotes Worth Repeating';
	let subtitle = 'Reformatted from the Go Training Repo';

	let scrollToTopButton: any;
	onMount(() => {
		scrollToTopButton = document.getElementById('scroll-to-top');

		// Show button when user scrolls down
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100 && scrollToTopButton) {
				scrollToTopButton.style.display = 'block';
			} else {
				if (scrollToTopButton.style) {
					scrollToTopButton.style.display = 'none';
				}
			}
		});
	});

	// Smooth scroll to top
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={subtitle} />
</svelte:head>

<Container className="mt-16 sm:mt-20">
	<header class="max-w-2xl">
		<PageTitle>{title}</PageTitle>

		<PageSubtitle className="items-center">
			{subtitle}
			<span class="flex flex-row items-center hover:text-secondary-500">
				<Link size={36} class="pr-3" />
				<a target="_blank" href="https://github.com/ardanlabs/gotraining/tree/master/topics/go"
					>go training</a
				>
			</span>
		</PageSubtitle>
	</header>

	<button
		id="scroll-to-top"
		onclick={scrollToTop}
		class="scroll-to-top fixed bottom-4 right-4
                   bg-slate-900 text-white rounded-full ring ring-2 ring-white
                   transition duration-300 hover:bg-gray-700
                   hover:text-gray-200"
	>
		<ArrowUp size={64}></ArrowUp>
	</button>


<nav class="p-4 my-16">
	<!-- Table of Contents -->
	<div class="text-sm space-y-2">
	  <!-- Label -->
	  <div class="font-bold">On This Page</div>
	  <!-- Links -->
	  <ul class="space-y-2">
		{#each quotes as [k, v]}
		<li>
			<a href={'#'+k.toLocaleLowerCase().replaceAll(' ', '-')} class="anchor block">
			  {k }
			</a>
		  </li>

		{/each}

	  </ul>
	</div>
  </nav>


	<div >
		{#each quotes as [k, v]}
			<article>
				<header class="flex flex-row items-center">
					<h2
						id={k.toLocaleLowerCase().replaceAll(' ', '-')}
						class="lg:text-4xl md:text-2xl text-lg"
					>
						# {k}
					</h2>
				</header>

				<section class="ps-4 pe-4 my-16">
					{#each v.quotes as q}
						<div class="my-16">
							<span class="flex border-t-2 border-dashed border-slate-500"></span>

							<p class="mt-6 mb-16 lg:text-3xl md:text-xl text-center">
								{q.quote}
							</p>

							<p class="text-center lg:text-2xl mb-6">- {q.name} -</p>
							<span class="flex border-t-2 border-dashed border-slate-500"></span>
						</div>
					{/each}
				</section>
			</article>
		{/each}
	</div>
</Container>
