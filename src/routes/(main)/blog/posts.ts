export interface post {
	id: string;
	title: string;
	description: string;
	date: string;
}
export const posts: post[] = [
	{
		id: '1',
		title: 'Why I Created a Personal Website',
		description: `In today's digital age, having a personal website is not just a luxury; it's becoming an essential tool, especially for those of us in tech. While social media platforms like LinkedIn, Twitter, or Medium are great for networking and showcasing your skills, a personal website offers a unique and flexible space to represent your work, passions, and expertise. Here are a few reasons why I decided to create my own personal website.`,
		date: '2024-12-14'
	},
	{
		id: '2',
		title: 'How to Host a Svelte Static Site on GitHub Pages',
		description: `In today’s web development world, building fast and lightweight static sites is easier than ever. One such powerful framework for creating modern, high-performance static sites is Svelte. Known for its simplicity and speed, Svelte compiles down to optimized JavaScript, offering an excellent user experience with minimal overhead.`,
		date: '2024-12-17'
	}
];
