<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	export let type = 'bar'; // Default chart type
	/** @type {Array<{ name: string, data: number[] }>} */
	export let series = []; // Default empty series

	/** @type {string[]} */
	export let categories = []; // Default empty categories

	onMount(async () => {
		if (browser) {
			const ApexCharts = (await import('apexcharts')).default;

			const options = {
				chart: {
					type,
					width: '100%', // Make the chart width responsive
					height: '100%' // Make the chart height responsive
				},
				series,
				xaxis: {
					categories
				}
			};

			const chart = new ApexCharts(document.querySelector('#chart'), options);
			chart.render();
		}
	});
</script>

<div id="chart" class="bg-black-200 h-72 w-72 rounded-lg p-4 shadow-md">
	<!-- The chart will render here -->
</div>
