<script>
	export let onSubmit = (project) => {};
	export let onCancel = () => {};
	export let isOpen = false;

	let projectName = '';
	let projectDescription = '';
	let projectTimeLimit = '';

	function handleSubmit() {
		onSubmit({
			name: projectName,
			description: projectDescription,
			timeLimit: projectTimeLimit
		});
		projectName = '';
		projectDescription = '';
		projectTimeLimit = '';
	}
</script>

{#if isOpen}
	<div class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
		<div class="form-container rounded bg-white p-4 shadow-md">
			<h2 class="mb-4 text-lg font-bold">Project Details</h2>
			<form on:submit|preventDefault={handleSubmit}>
				<div class="mb-4">
					<label class="mb-1 block text-sm font-medium">Project Name</label>
					<input
						type="text"
						bind:value={projectName}
						class="w-full rounded border px-3 py-2"
						placeholder="Enter project name"
						required
					/>
				</div>
				<div class="mb-4">
					<label class="mb-1 block text-sm font-medium">Description</label>
					<textarea
						bind:value={projectDescription}
						class="w-full rounded border px-3 py-2"
						placeholder="Enter project description"
					></textarea>
				</div>
				<div class="mb-4">
					<label class="mb-1 block text-sm font-medium">Time Limit (in hours)</label>
					<input
						type="number"
						bind:value={projectTimeLimit}
						class="w-full rounded border px-3 py-2"
						placeholder="Enter time limit"
						min="1"
					/>
				</div>
				<div class="flex justify-end space-x-2">
					<button type="button" on:click={onCancel} class="rounded bg-gray-300 px-4 py-2 text-sm">
						Cancel
					</button>
					<button type="submit" class="rounded bg-blue-500 px-4 py-2 text-sm text-white">
						Submit
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}

<style>
	.form-container {
		max-width: 400px;
	}
</style>
