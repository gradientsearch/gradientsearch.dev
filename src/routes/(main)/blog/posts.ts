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
	},
	{
		id: '3',
		title: 'Developing an Open-Source Password Manager with HashiCorp Vault Plugin',
		description: `In this demo, I showcase an open-source password manager I’m currently developing, which integrates with HashiCorp Vault via a Vault plugin. I walk through the process of registering a user, unlocking the password manager, and creating and viewing passwords. Additionally, I explain how password entries are stored in Vault using the KV-v2 secret engine, including the encryption and decryption processes, and how Vault policies control access to these entries.`,
		date: '2025-01-17'
	},
	{
		id: '4',
		title: 'Setting Up PwManager Development Environment and Registering a User',
		description: `In this tutorial, we’ll walk through setting up the development environment for PwManager and registering a user. We’ll cover the steps to configure the environment, start the client-side app, log into Vault, and create a user account. You’ll also learn how to store the secret key, unlock the password manager, and add your first password entry.`,
		date: '2025-01-24'
	},
	{
		id: '5',
		title: 'Managing Password Entries: Edit, Add, and Delete Features',
		description: `In this demo, we go over how to update, add, and delete entries in a password manager. You’ll see how to modify existing passwords, add extra details like text or date, and remove items or entries as needed. We also demonstrate how to work with different types of data such as text, passwords, and dates. This session builds on the first demo, showing the new functionality added to manage password entries more effectively.`,
		date: '2025-01-31'
	},
	{
		id: '6',
		title: 'Sharing Password Bundles',
		description: `In this demo, I will showcase new features, including creating a new bundle and sharing bundles with other users.`,
		date: '2025-03-13'
	},
	{
		id: '7',
		title: 'Synchronizing PwManager: Preventing Race Conditions When Sharing Password Bundles',
		description: `This blog post explores how PwManager handles synchronization when sharing password bundles to prevent race conditions. It explains the concept of password bundles and the potential issues when multiple admins try to modify the same bundle simultaneously. The post details how mutexes are used to synchronize updates across goroutines and prevent conflicts. Additionally, it discusses the benefits of a dynamic map of mutexes and how it efficiently manages lock acquisition and garbage collection. Finally, the post touches on a practical example sourced from Stack Overflow, provided by Brad Peabody.`,
		date: '2025-03-15'
	},
	{
		id: '8',
		title: 'Effortless Dependency Management: A Step-by-Step Guide to Renovate Bot',
		description: `This blog post demonstrates how to automate dependency management using Renovate Bot, an open-source tool that helps keep your project's dependencies up to date by automatically creating pull requests for version updates. I’ll walk you through the process of setting up Renovate Bot for this website, saving time and ensuring your dependencies are always current and secure.`,
		date: '2025-04-01'
	},
	{
		id: '9',
		title: 'Completed Ultimate Go Language Guide Course',
		description: `After completing the course, I deepened my understanding of writing efficient, idiomatic Go code. I explored Go internals, learned to balance readability and performance, and focused on package-oriented design for better maintainability and long-term success.`,
		date: '2025-04-07'
	},
	{
		id: '10',
		title: 'Exposing Go Internals: Setting Up Debug Endpoints',
		description: `In this post, we’ll walk through setting up debug endpoints to profile your Go application in real time. We'll also integrate Statsviz to provide a user-friendly GUI for visualizing metrics like heap usage and goroutine activity. To make things more interesting, we’ll simulate load by sending a burst of requests to a liveness endpoint, allowing us to see how the heap and goroutine count respond under pressure.`,
		date: '2025-04-15'
	},
	{
		id: '11',
		title: '🚀 New Chapter Unlocked!',
		description: `I’m excited to share that I’ve started a new role as a Platform Engineer!`,
		date: '2025-05-15'
	}
];
