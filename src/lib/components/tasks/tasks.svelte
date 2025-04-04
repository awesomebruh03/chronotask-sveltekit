<script>
	import { dndzone } from 'svelte-dnd-action';

	export let barColor = 'bg-gray-700'; // Tailwind class for dark gray
	export let barMargin = 'my-1'; // Tailwind class for margin (top and bottom)

	let tasks = [
		{
			name: 'Task 1',
			description: 'Description for Task 1',
			startDate: '2023-10-01T10:00',
			endDate: '2023-10-01T12:00',
			status: 'in-progress'
		},
		{
			name: 'Task 2',
			description: 'Description for Task 2',
			startDate: '2023-10-02T14:00',
			endDate: '2023-10-02T16:00',
			status: 'completed'
		},
		{
			name: 'Task 3',
			description: 'Description for Task 3',
			startDate: '2023-10-03T09:00',
			endDate: '2023-10-03T11:00',
			status: 'pending'
		}
	];

	function handleDnd({ items, from, to }) {
		// Update task statuses when moved between groups
		if (from.group !== to.group) {
			items.forEach((item) => {
				item.status = to.group;
			});
		}
		tasks = items;
	}
</script>

<div class="ml-5 flex max-w-2xl flex-col gap-5 bg-gray-200 p-5">
	<div class="flex flex-col">
		<div class="mb-1 font-bold">In progress</div>
		<div
			use:dndzone={{
				items: tasks.filter((task) => task.status === 'in-progress'),
				flipDurationMs: 200,
				group: 'in-progress'
			}}
			on:consider={handleDnd}
			on:finalize={handleDnd}
		>
			{#each tasks.filter((task) => task.status === 'in-progress') as task}
				<div
					class={`rounded-lg ${barColor} ${barMargin} bg-white p-4 shadow-md`}
					data-id={task.name}
				>
					<div class="flex items-center justify-between">
						<h3 class="text-lg font-semibold text-gray-700">{task.name}</h3>
						<p class="text-gray-600">{task.description}</p>
						<div class="text-sm text-gray-500">
							<p>Start: {task.startDate}</p>
							<p>End: {task.endDate}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex flex-col">
		<div class="mb-1 font-bold">Completed</div>
		<div
			use:dndzone={{
				items: tasks.filter((task) => task.status === 'completed'),
				flipDurationMs: 200,
				group: 'completed'
			}}
			on:consider={handleDnd}
			on:finalize={handleDnd}
		>
			{#each tasks.filter((task) => task.status === 'completed') as task}
				<div
					class={`rounded-lg ${barColor} ${barMargin} bg-white p-4 shadow-md`}
					data-id={task.name}
				>
					<div class="flex items-center justify-between">
						<h3 class="text-lg font-semibold text-gray-700">{task.name}</h3>
						<p class="text-gray-600">{task.description}</p>
						<div class="text-sm text-gray-500">
							<p>Start: {task.startDate}</p>
							<p>End: {task.endDate}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex flex-col">
		<div class="mb-1 font-bold">Pending</div>
		<div
			use:dndzone={{
				items: tasks.filter((task) => task.status === 'pending'),
				flipDurationMs: 200,
				group: 'pending'
			}}
			on:consider={handleDnd}
			on:finalize={handleDnd}
		>
			{#each tasks.filter((task) => task.status === 'pending') as task}
				<div
					class={`rounded-lg ${barColor} ${barMargin} bg-white p-4 shadow-md`}
					data-id={task.name}
				>
					<div class="flex items-center justify-between">
						<h3 class="text-lg font-semibold text-gray-700">{task.name}</h3>
						<p class="text-gray-600">{task.description}</p>
						<div class="text-sm text-gray-500">
							<p>Start: {task.startDate}</p>
							<p>End: {task.endDate}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
