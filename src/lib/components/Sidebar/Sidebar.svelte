<style>
	.tooltip {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.75);
		color: white;
		padding: 4px 8px;
		border-radius: 4px;
		font-size: 12px;
		white-space: nowrap;
		z-index: 10;
		opacity: 0;
		transition: opacity 0.2s;
		pointer-events: none;
	}

	.tooltip-visible {
		opacity: 1;
	}
</style>

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

	function getTooltipText(item) {
		return isOpen ? '' : item.name;
	}

	let tooltipText = '';
	let tooltipVisible = false;
	let tooltipX = 0;
	let tooltipY = 0;

	function showTooltip(event, text) {
		tooltipText = text;
		tooltipVisible = true;
		const rect = event.currentTarget.getBoundingClientRect();
		tooltipX = rect.right + 10; // Position tooltip consistently to the right of the element
		tooltipY = rect.top + rect.height / 2; // Center tooltip vertically relative to the element
	}

	function hideTooltip() {
		tooltipVisible = false;
	}
</script>

<div
	class="sidebar transition-width flex h-screen flex-col items-center bg-gray-700 text-white duration-300 {isOpen
		? 'w-64'
		: 'w-16'}"
>
	<!-- Tooltip -->
	{#if tooltipVisible}
		<div
			class="tooltip tooltip-visible"
			style="top: {tooltipY}px; left: {tooltipX}px"
		>
			{tooltipText}
		</div>
	{/if}

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
				<li
				class="group relative rounded-lg transition-colors hover:bg-gray-600"
				on:mouseenter={(e) => showTooltip(e, item.name)}
				on:mouseleave={hideTooltip}
			>
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