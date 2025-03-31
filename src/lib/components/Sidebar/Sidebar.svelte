<script>
	import Icon from '@iconify/svelte';
	let isOpen = false;

	function toggleSidebar() {
		isOpen = !isOpen;
	}
	let menuItems = [
		{
			name: 'Dashboard',
			link: '/dashboard',
			icon: 'fa-solid:chart-line'
		},
		{
			name: 'Projects',
			link: '/projects',
			icon: 'fa-solid:tasks'
		},
		{
			name: 'Settings',
			link: '/settings',
			icon: 'fa-solid:cog'
		}
	];
</script>

<div
	class="sidebar transition-width flex h-screen flex-col items-center bg-gray-700 text-white duration-300 {isOpen
		? 'w-64'
		: 'w-16'}"
>
	<!-- Button Container -->
	<div class="flex w-full justify-center py-4">
		<button on:click={toggleSidebar} class="rounded-full p-2 transition-colors hover:bg-gray-600">
			<span class="flex items-center">
				<Icon
					icon={isOpen ? 'fa-bars' : 'fa6-solid:align-left'}
					class="h-6 w-6 transform transition-transform duration-300"
				/>
			</span>
		</button>
	</div>

	<!-- Simplified Menu List -->
	<ul class="flex w-full flex-col space-y-4 px-2">
		{#each menuItems as item}
			<li class="group rounded-lg transition-colors hover:bg-gray-600">
				<a href={item.link} class="flex items-center gap-2 p-2">
					<Icon icon={item.icon} width="24" height="24" />
					{#if isOpen}
						<span class="text-sm transition-all group-hover:text-xl">{item.name}</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</div>
