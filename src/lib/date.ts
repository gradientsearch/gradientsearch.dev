export function formatDate(date: string) {
	let d = new Date(date);

	return d.toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		timeZone: 'UTC',
		year: 'numeric'
	});
}
