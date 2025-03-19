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
					<a href="#dashboard"> <Icon icon="carbon:home" width="32" height="32" />Dashboard</a>
				</li>
				<li class="mb-2 hover:bg-gray-300 hover:text-2xl hover:text-black">
					<a href="#projects"><Icon icon="carbon:list-dropdown" width="32" height="32" />Projects</a
					>
				</li>
				<li class="mb-2 hover:bg-gray-300 hover:text-2xl hover:text-black">
					<a href="#settings"
						><Icon icon="solar:settings-bold-duotone" width="24" height="24" />Settings</a
					>
				</li>
			</ul>
		{/if}
	</div>
	<div class="flex-1 p-4"></div>
</div>
