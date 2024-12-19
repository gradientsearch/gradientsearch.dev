import { base } from '$app/paths';

interface NavItem {
	href: string;
	label: string;
}

export const navItems: NavItem[] = [
	{ href: base + '/blog', label: 'Blog' },
	{ href: base + '/about', label: 'About' },
	{ href: base + '/resume', label: 'Resume' },
	{ href: base + '/toolkit', label: 'Toolkit' },
	{ href: base + '/quotes', label: 'Quotes' }
];
