export interface tool {
	logo: string;
	href: string;
	description: string;
	name: string;
}

export let tools: tool[] = [
	{
		logo: '/images/toolkit/golang.svg',
		href: 'go.dev',
		description:
			'I use Go, a statically typed, compiled programming language known for its simplicity and efficiency, to build secure, scalable systems with high performance and strong concurrency support.',
		name: 'Go'
	},
	{
		logo: '/images/toolkit/python.png',
		href: 'python.org',
		description:
			'I use Python, a versatile and readable programming language, for machine learning-related tasks such as data analysis, model development, and deployment, leveraging its extensive libraries and frameworks.',
		name: 'Python'
	},
	{
		logo: '/images/toolkit/tux.svg',
		href: 'kernel.org',
		description:
			'I use Linux, an open-source, Unix-like operating system known for its stability and flexibility, to build secure, scalable systems with efficient resource management and strong support for development and automation.',
		name: 'Linux'
	},
	{
		logo: '/images/toolkit/k8s.svg',
		href: 'kubernetes.io/',
		description:
			'I use Kubernetes, an open-source container orchestration platform, to build secure, scalable systems by automating the deployment, scaling, and management of containerized applications.',
		name: 'Kubernetes'
	},
	{
		logo: '/images/toolkit/helm.svg',
		href: 'helm.io',
		description:
			'I use Helm, a package manager for Kubernetes, to build secure, scalable systems by simplifying the deployment and management of applications through reusable, versioned charts.',
		name: 'Helm'
	},
	{
		logo: '/images/toolkit/argocd.svg',
		href: 'argoproj.github.io',
		description:
			'I use ArgoCD, a declarative, GitOps continuous delivery tool for Kubernetes, to build secure, scalable systems by automating the deployment and management of applications through Git-based workflows.',
		name: 'ArgoCD'
	},
	{
		logo: '/images/toolkit/vault.svg',
		href: 'vaultproject.io',
		description:
			'I use HashiCorp Vault, a tool for managing secrets and sensitive data, to build secure systems by centrally controlling access to secrets, ensuring encryption, and enforcing strict access policies across applications and infrastructure.',
		name: 'HashiCorp Vault'
	},
	{
		logo: '/images/toolkit/kube-bench.png',
		href: 'github.com/aquasecurity/kube-bench',
		description:
			'I use kube-bench, an open-source tool for Kubernetes security compliance, to build secure systems by assessing and ensuring Kubernetes clusters meet security best practices and compliance standards.',
		name: 'Aqua Security Kube-Bench'
	},
	{
		logo: '/images/toolkit/scikit.png',
		href: 'scikit-learn.org',
		description:
			'I use scikit-learn, a powerful machine learning library in Python, to build secure, scalable systems by developing and deploying machine learning models for tasks such as classification, regression, and clustering, with a focus on simplicity and efficiency.',
		name: 'scikit-learn'
	},
	{
		logo: '/images/toolkit/kubeflow.svg',
		href: 'kubeflow.org',
		description:
			'I use Kubeflow, an open-source platform for deploying and managing machine learning workflows, to streamline the development, orchestration, and scaling of machine learning pipelines for efficient model training, testing, and deployment.',
		name: 'kubeflow'
	},
	{
		logo: '/images/toolkit/svelte.png',
		href: 'svelte.dev',
		description:
			'I use Svelte, a modern JavaScript framework for building web applications, to create fast and highly interactive user interfaces by compiling components into efficient, minimal JavaScript at build time.',
		name: 'svelte'
	},
	{
		logo: '/images/toolkit/tailwind.png',
		href: 'tailwindcss.com',
		description:
			'I use Tailwind CSS, a utility-first CSS framework, to create responsive websites by quickly designing flexible, mobile-first layouts with customizable utility classes for consistent and adaptive user interfaces across all devices.',
		name: 'Tailwind CSS'
	}
];
