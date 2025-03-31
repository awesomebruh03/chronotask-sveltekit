<script>
	import Icon from '@iconify/svelte';
	let isOpen = false;

	function toggleSidebar() {
		isOpen = !isOpen;
	}

	let projects = [
		{
			name: 'Project Alpha',
			link: '/projects/alpha',
			icon: 'fa-solid:folder'
		},
		{
			name: 'Project Beta',
			link: '/projects/beta',
			icon: 'fa-solid:folder'
		}
	];

	function addProject() {
		const newProject = {
			name: `Project ${String.fromCharCode(65 + projects.length)}`,
			link: `/projects/${String.fromCharCode(97 + projects.length)}`,
			icon: 'fa-solid:folder'
		};
		projects = [...projects, newProject];
	}
</script>

<div
	class="sidebar transition-width flex h-[85vh] flex-col items-center bg-red-700 text-white duration-300 {isOpen
		? 'w-64'
		: 'w-16'}"
>
	<!-- Button Container -->
	<div class="flex w-full justify-center py-4">
		<button on:click={toggleSidebar} class="rounded-full p-2 transition-colors hover:bg-gray-600">
			<span class="flex items-center">
				<Icon
					icon={isOpen ? 'tabler:arrow-bar-left' : 'tabler:arrow-bar-right'}
					class="h-6 w-6 transform transition-transform duration-300"
				/>
			</span>
		</button>
	</div>

	<!-- Add Project Button -->
	<div class="flex w-full justify-center py-2">
		{#if isOpen}
			<button
				on:click={addProject}
				class="rounded-lg bg-gray-500 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-900"
			>
				Add Project
			</button>
		{:else}
			<button on:click={addProject} class="rounded-full p-2 transition-colors hover:bg-gray-600">
				<Icon icon="basil:add-outline" width="24" height="24" />
			</button>
		{/if}
	</div>

	<!-- Scrollable Project List -->
	<div class="w-full flex-1 overflow-y-auto px-2">
		<ul class="flex w-full flex-col space-y-4">
			{#each projects as project}
				<li class="group rounded-lg transition-colors hover:bg-gray-600">
					<a href={project.link} class="flex items-center gap-2 p-2">
						<Icon icon={project.icon} width="24" height="24" />
						{#if isOpen}
							<span class="text-sm transition-all group-hover:text-xl">{project.name}</span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
