<script>
	import Chart from '$lib/components/Dashboard/Chart.svelte';
	import StatCard from '$lib/components/Dashboard/StatCard.svelte';
	import TaskCard from '$lib/components/Dashboard/TaskCard.svelte';
</script>

<div class="mx-4 mt-4 flex h-full flex-col gap-4 rounded-2xl bg-gray-600">
	<Chart />
	<StatCard />
	<TaskCard />
</div>
