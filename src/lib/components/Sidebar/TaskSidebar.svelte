<script>
	import Icon from '@iconify/svelte';
	import ProjectsModal from '../../modals/projects.svelte';

	let isOpen = false;
	let showProjectsModal = false;
	let selectedProjectIndex = null;
	let newMilestone = '';

	let projects = [
		{
			name: 'Project Alpha',
			link: '/projects/alpha',
			icon: 'fa-solid:folder',
			milestones: [],
			showMilestones: false
		},
		{
			name: 'Project Beta',
			link: '/projects/beta',
			icon: 'fa-solid:folder',
			milestones: [],
			showMilestones: false
		}
	];

	function toggleSidebar() {
		isOpen = !isOpen;
	}

	function openProjectsModal() {
		showProjectsModal = true;
	}

	function closeProjectsModal() {
		showProjectsModal = false;
	}

	function addProject(projectName) {
		const newProject = {
			name: projectName,
			link: `/projects/${projectName.toLowerCase().replace(/\s+/g, '-')}`,
			icon: 'fa-solid:folder',
			milestones: [],
			showMilestones: false
		};
		projects = [...projects, newProject];
	}

	function deleteProject(index) {
		projects = projects.filter((_, i) => i !== index);
	}

	function openMilestoneInput(index) {
		selectedProjectIndex = index;
		newMilestone = '';
	}

	function addNewMilestone(event) {
		if (event.key === 'Enter' && newMilestone.trim() && selectedProjectIndex !== null) {
			projects[selectedProjectIndex].milestones = projects[selectedProjectIndex].milestones || [];
			projects[selectedProjectIndex].milestones.push(newMilestone.trim());
			newMilestone = '';
			selectedProjectIndex = null;
		}
	}

	function toggleMilestoneVisibility(index) {
		projects[index].showMilestones = !projects[index].showMilestones;
	}
</script>

<div
	class="sidebar flex flex-col items-center bg-gray-700 text-white transition-all duration-300"
	class:is-collapsed={!isOpen}
>
	<!-- Button Container -->
	<div class="flex justify-center py-4">
		<button
			on:click={toggleSidebar}
			class="rounded-full p-2 transition-transform hover:bg-gray-600"
		>
			<span class="flex items-center">
				<Icon
					icon={isOpen ? 'tabler:arrow-bar-left' : 'tabler:arrow-bar-right'}
					class="h-6 w-6 transform transition-transform duration-300"
				/>
			</span>
		</button>
	</div>

	<!-- Add Project Button -->
	{#if isOpen}
		<div class="flex w-full justify-center py-2">
			<button
				on:click={openProjectsModal}
				class="rounded-lg bg-gray-500 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-900"
			>
				Add Project
			</button>
		</div>
	{/if}

	<!-- Scrollable Project List -->
	{#if isOpen}
		<div class="w-full flex-1 overflow-y-auto px-2">
			<ul class="flex w-full flex-col space-y-4">
				{#each projects as project, index}
					<li class="group rounded-lg transition-colors hover:bg-gray-600 flex flex-col">
						<div class="flex justify-between items-center">
							<a href={project.link} class="flex items-center gap-2 p-2">
								<Icon icon={project.icon} width="24" height="24" />
								<span class="text-sm transition-all group-hover:text-xl">{project.name}</span>
							</a>
							<button
								on:click={() => deleteProject(index)}
								class="text-red-500 hover:text-red-700"
							>
								<Icon icon="mdi:delete" width="20" height="20" />
							</button>
							<button
								on:click={() => toggleMilestoneVisibility(index)}
								class="text-gray-400 hover:text-white"
							>
								<Icon icon="tabler:chevron-down" width="20" height="20" />
							</button>
						</div>
						<!-- Milestones Tree -->
						{#if project.showMilestones}
							<ul class="ml-6 mt-2 space-y-2 border-l-2 border-gray-500 pl-4">
								{#each project.milestones as milestone}
									<li class="text-sm text-gray-300">- {milestone}</li>
								{/each}
								<!-- Add Milestone Input -->
								<div class="mt-2">
									{#if selectedProjectIndex === index}
										<input
											bind:value={newMilestone}
											placeholder="Add a milestone..."
											class="w-full rounded-lg p-2 text-sm text-gray-700 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
											on:keydown={addNewMilestone}
										/>
									{:else}
										<button
											on:click={() => openMilestoneInput(index)}
											class="rounded-lg bg-transparent px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-600"
										>
											Add Milestone
										</button>
									{/if}
								</div>
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<!-- Projects Modal -->
{#if showProjectsModal}
	<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
		<div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
			<ProjectsModal
				on:submit={(event) => {
					addProject(event.detail.projectName);
					closeProjectsModal();
				}}
			/>
			<div class="flex justify-end mt-4">
				<button
					on:click={closeProjectsModal}
					class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
				>
					Close
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.sidebar {
		width: 16rem; /* Default expanded width */
		height: 85vh;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
	}

	.sidebar.is-collapsed {
		width: 3rem; /* Collapsed width matching the button */
		height: 3rem; /* Collapsed height matching the button */
		border-radius: 50%; /* Make it circular */
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
