<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    export let type = 'bar'; // Default chart type
    export let series = []; // Default empty series
    export let categories = []; // Default empty categories

    onMount(async () => {
        if (browser) {
            const ApexCharts = (await import('apexcharts')).default;

            const options = {
                chart: {
                    type
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

<div id="chart">
    <h1>Chart</h1>
</div>