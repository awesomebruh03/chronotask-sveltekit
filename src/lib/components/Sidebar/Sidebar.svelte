<script>
	import Icon from '@iconify/svelte';
	let isOpen = false;

	function toggleSidebar() {
		isOpen = !isOpen;
	}
</script>

<div class="flex">
	<div
		class="sidebar transition-width h-screen bg-gray-700 p-4 text-white duration-300 {isOpen
			? 'w-64'
			: 'w-16'}"
	>
		<button on:click={toggleSidebar} class="mb-4">
			{#if isOpen}
				<Icon icon="fa-bars" class="transform transition-transform duration-300" />
			{:else}
				<Icon icon="fa6-solid:align-left" />
			{/if}
		</button>
		{#if isOpen}
			<ul>
				<li class="mb-2 hover:bg-gray-300 hover:text-2xl hover:text-black">
					<a href="#dashboard">Dashboard</a>
				</li>
				<li class="mb-2 hover:bg-gray-300 hover:text-2xl hover:text-black">
					<a href="#projects">Projects</a>
				</li>
				<li class="mb-2 hover:bg-gray-300 hover:text-2xl hover:text-black">
					<a href="#settings">Settings</a>
				</li>
			</ul>
		{/if}
	</div>
	<div class="flex-1 p-4"></div>
</div>
