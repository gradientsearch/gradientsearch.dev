<script lang="ts">
	let { orientation = 'horizontal' } = $props();
</script>

{#if orientation == 'horizontal'}
	<div class="mt-6 flex gap-6">
		<a
			class="group -m-1 rounded-full p-1 focusable"
			aria-label="Follow on GitHub"
			href="https://github.com/gradientsearch"
			target="_blank"
			><svg
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 24 24"
				class="size-6 text-zinc-500 transition group-hover:text-sky-500 dark:text-zinc-300 dark:group-hover:text-sky-400"
				><path
					d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
				></path></svg
			></a
		><a
			class="group -m-1 rounded-full p-1 focusable"
			aria-label="Follow on X"
			href="https://x.com/gradientsearch"
			target="_blank"
			><svg
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 24 24"
				class="size-6 text-zinc-500 transition group-hover:text-sky-500 dark:text-zinc-300 dark:group-hover:text-sky-400"
				><path
					d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
				></path></svg
			></a
		><a
			class="group -m-1 rounded-full p-1 focusable"
			aria-label="Follow on LinkedIn"
			href="https://www.linkedin.com/in/stephenodwyer/"
			target="_blank"
			><svg
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 24 24"
				class="size-6 text-zinc-500 transition group-hover:text-sky-500 dark:text-zinc-300 dark:group-hover:text-sky-400"
				><path
					d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
				></path></svg
			></a
		>
		<a
			class="group -m-1 rounded-full p-1 focusable"
			aria-label="Follow on LinkedIn"
			href="https://www.youtube.com/@gradientsearch"
			target="_blank"
		>
			<svg
				viewBox="0 0 50 50"
				aria-hidden="true"
				fill="currentColor"
				class="size-6 text-zinc-500 transition group-hover:text-sky-500 dark:text-zinc-300 dark:group-hover:text-sky-400"
				><path
					d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"
				/></svg
			></a
		>
	</div>
{/if}

{#if orientation == 'vertical'}
	<div class="mt-6 flex flex-col gap-6">
		<a
			class="group flex flex-row -m-1 rounded-full p-1 focusable"
			aria-label="Follow on GitHub"
			href="https://github.com/gradientsearch"
			target="_blank"
			><svg
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 24 24"
				class="size-6 text-zinc-500 transition group-hover:text-sky-500 dark:text-zinc-300 dark:group-hover:text-sky-400"
				><path
					d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
				></path></svg
			>&nbsp;&nbsp;Follow me on Github</a
		><a
			class="group -m-1 rounded-full p-1 focusable flex flex-row"
			aria-label="Follow on X"
			href="https://x.com/gradientsearch"
			target="_blank"
			><svg
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 24 24"
				class="size-6 text-zinc-500 transition group-hover:text-sky-500 dark:text-zinc-300 dark:group-hover:text-sky-400"
				><path
					d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
				></path></svg
			>&nbsp;&nbsp; Follow me on X</a
		><a
			class="group -m-1 rounded-full p-1 focusable flex flex-row"
			aria-label="Follow on LinkedIn"
			href="https://www.linkedin.com/in/stephenodwyer/"
			target="_blank"
			><svg
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 24 24"
				class="size-6 text-zinc-500 transition group-hover:text-sky-500 dark:text-zinc-300 dark:group-hover:text-sky-400"
				><path
					d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
				></path></svg
			>&nbsp;&nbsp; Connect with me on LinkedIn</a
		>

		<a
			class="group -m-1 rounded-full p-1 focusable flex flex-row"
			aria-label="Watch on YouTube"
			href="https://www.youtube.com/@gradientsearch"
			target="_blank"
			><svg
				viewBox="0 0 50 50"
				aria-hidden="true"
				fill="currentColor"
				class="size-6 text-zinc-500 transition group-hover:text-sky-500 dark:text-zinc-300 dark:group-hover:text-sky-400"
				><path
					d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"
				/></svg
			>&nbsp;&nbsp; Watch on YouTube</a
		>
	</div>
{/if}
