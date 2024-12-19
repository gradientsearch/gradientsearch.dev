<script lang="ts">
	let { date = $bindable() } = $props();

	let d = new Date(date);

	let formattedDate = d.toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		timeZone: 'UTC',
		year: 'numeric'
	});
</script>

<p class="font-bold text-base text-zinc-700 transition-colors dark:text-zinc-300">
	{formattedDate}
</p>
