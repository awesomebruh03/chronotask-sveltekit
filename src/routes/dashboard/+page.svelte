<script>
	import Chart from '$lib/components/Dashboard/Chart.svelte';
	import StatCard from '$lib/components/Dashboard/StatCard.svelte';
	import TaskCard from '$lib/components/Dashboard/TaskCard.svelte';
</script>

<div class="mt-28">
	<Chart
		className="h-8 w-full"
		type="area"
		series={[{ name: 'revenue', data: [10, 20, 30, 40] }]}
		categories={['Q1', 'Q2', 'Q3', 'Q4']}
	/>
	<StatCard />
	<TaskCard />
</div>
