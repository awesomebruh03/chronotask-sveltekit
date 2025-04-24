<script>
	import RangeDatepicker from "./RangeDatepicker.svelte";
	import { createEventDispatcher } from 'svelte';

	let startDate = "";
	let endDate = "";

	const dispatch = createEventDispatcher();

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());
		data.startDate = startDate; // Include start date
		data.endDate = endDate;     // Include end date
		console.log("Form submitted", JSON.stringify(data, null, 2));

		// Dispatch custom event with project name
		dispatch('submit', { projectName: data.projectName });
	}

	function handleInput(event) {
		const textarea = event.target;
		const words = textarea.value.split(/\s+/).filter(Boolean);

		// Enforce 50-word limit
		if (words.length > 50) {
			textarea.value = words.slice(0, 50).join(" ");
		}

		// Update word count display inside the textarea
		textarea.setAttribute("data-word-count", `${words.length}/50 words`);
	}
</script>

<form on:submit={handleSubmit} class="flex flex-col gap-6 p-6 bg-gray-100 shadow-sm rounded-lg">
	<div class="flex items-center justify-center">
		<input name="projectName" type="text" placeholder="Project Name" class="w-full max-w-md p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400" />
	</div>
	<div class="flex items-center justify-center">
		<textarea
			name="projectDescription"
			placeholder="Project Description"
			class="w-full max-w-md p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-y overflow-auto"
			on:input={handleInput}
		></textarea>
	</div>
	<div class="flex items-center justify-center">
		<RangeDatepicker bind:startDate={startDate} bind:endDate={endDate} />
	</div>
	<div class="flex items-center justify-center">
		<input type="submit" value="Create Project" class="btn btn-primary w-full max-w-md p-3 border border-gray-300 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400" />
	</div>
	<div id="wordCount" class="text-gray-600 text-sm"></div>
</form>