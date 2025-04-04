<script>
	export let barMargin = 'my-1'; // Tailwind class for margin (top and bottom)

	let tasks = [
		{
			name: 'Task 1',
			description:
				'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			startDate: '2023-10-01T10:00',
			endDate: '2023-10-01T12:00',
			status: 'in-progress',
			priority: 0
		},
		{
			name: 'Task 2',
			description: 'Description for Task 2',
			startDate: '2023-10-02T14:00',
			endDate: '2023-10-02T16:00',
			status: 'completed',
			priority: 1
		},
		{
			name: 'Task 3',
			description: 'Description for Task 3',
			startDate: '2023-10-03T09:00',
			endDate: '2023-10-03T11:00',
			status: 'pending',
			priority: 2
		}
	];

	function truncate(text, maxLength = 45) {
		return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
	}
	function handleTaskClick() {
		// Handle task click event
		alert(`Task clicked!`);
	}
</script>

<div class="ml-5 flex max-w-2xl flex-col gap-5 bg-gray-200 p-5">
	<div class="flex flex-col">
		<div class="mb-1 font-bold">In progress</div>
		{#each tasks.filter((task) => task.status === 'in-progress') as task}
			<div
				class={`rounded-lg ${barMargin} bg-amber-800 p-4 shadow-md ${
					task.priority === 0
						? 'bg-red-500'
						: task.priority === 1
							? 'bg-yellow-500'
							: 'bg-green-500'
				}`}
				role="button"
				tabindex="0"
				on:dblclick={handleTaskClick}
				draggable="true"
			>
				<div class="flex items-center justify-between">
					<h3 class="text-lg font-semibold text-black">{task.name}</h3>
					<p class="text-black">{truncate(task.description)}</p>
					<div class="text-sm text-black">
						<p>Start: {task.startDate}</p>
						<p>End: {task.endDate}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="flex flex-col">
		<div class="mb-1 font-bold">Completed</div>
		{#each tasks.filter((task) => task.status === 'completed') as task}
			<div
				class={`rounded-lg ${barMargin} p-4 shadow-md ${
					task.priority === 0
						? 'bg-red-600'
						: task.priority === 1
							? 'bg-yellow-500'
							: 'bg-green-500'
				}`}
			>
				<div class="flex items-center justify-between">
					<h3 class="text-lg font-semibold text-black">{task.name}</h3>
					<p class="text-black">{truncate(task.description)}</p>
					<div class="text-sm text-black">
						<p>Start: {task.startDate}</p>
						<p>End: {task.endDate}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="flex flex-col">
		<div class="mb-1 font-bold">Pending</div>
		{#each tasks.filter((task) => task.status === 'pending') as task}
			<div
				class={`rounded-lg ${barMargin} p-4 shadow-md ${
					task.priority === 0
						? 'bg-red-500'
						: task.priority === 1
							? 'bg-yellow-500'
							: 'bg-green-500'
				}`}
			>
				<div class="flex items-center justify-between">
					<h3 class="text-lg font-semibold text-black">{task.name}</h3>
					<p class="text-black">{truncate(task.description)}</p>
					<div class="text-sm text-black">
						<p>Start: {task.startDate}</p>
						<p>End: {task.endDate}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
