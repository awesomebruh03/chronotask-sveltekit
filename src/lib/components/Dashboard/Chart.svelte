<script lang="ts">
	import { Chart, Card } from 'flowbite-svelte';
	import { ChevronRightOutline } from 'flowbite-svelte-icons';

	let options = {
		chart: {
			height: '100%', // Changed to percentage
			type: 'area' as const,
			fontFamily: 'Inter, sans-serif',
			dropShadow: { enabled: false },
			toolbar: { show: false },
			sparkline: { enabled: false },
			animations: { enabled: true }
		},
		tooltip: {
			enabled: true,
			x: { show: false }
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 0.55,
				opacityTo: 0,
				shade: '#1C64F2',
				gradientToColors: ['#1C64F2']
			}
		},
		dataLabels: { enabled: false },
		stroke: { width: 3 }, // Thinner stroke for small chart
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: { left: 2, right: 2, top: 0 }
		},
		series: [
			{
				name: 'New users',
				data: [6500, 6418, 6456, 6526, 6356, 6456],
				color: '#1A56DB'
			}
		],
		xaxis: {
			categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
			labels: { show: false },
			axisBorder: { show: false },
			axisTicks: { show: false }
		},
		yaxis: { show: false },
		responsive: [
			{
				breakpoint: 768,
				options: {
					chart: { height: 200 },
					stroke: { width: 2 }
				}
			},
			{
				breakpoint: 480,
				options: {
					chart: { height: 150 },
					xaxis: { categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'] }
				}
			}
		]
	};
</script>

<Card
	class="w-full max-w-[225px] rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800"
>
	<div class="flex h-full flex-col">
		<!-- Header -->
		<div class="mb-2 flex justify-between">
			<div>
				<h5 class="text-xl font-bold text-gray-900 dark:text-white">32.4k</h5>
				<p class="text-sm text-gray-500 dark:text-gray-400">Users this week</p>
			</div>
			<div class="flex items-center text-green-500 dark:text-green-500">
				12% <ChevronRightOutline class="ml-1 h-4 w-4" />
			</div>
		</div>

		<!-- Chart Container -->
		<div class="min-h-0 flex-1">
			<Chart {options} class="h-full w-full" />
		</div>
	</div>
</Card>
