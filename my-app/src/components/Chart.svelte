<script>
import { onMount } from "svelte";

    import Line from "svelte-chartjs/src/Line.svelte"
    onMount(async ()=> {
		const x = await import("")
        var mychart = document.getElementById('mychart').getContext('2d');
    var chart1 = new Chart(mychart, {
        type: 'line',
        data: {
            labels: ['1', ' 2', '3', '4', '5', '6', '7', '8'],
            fill: true,
            datasets: [{
                label: 'Line chart area',
                backgroundColor: '#1E90FF',
                borderCapStyle: 'butt',
                borderColor: '#0000FF',
                fill: true,
                lineTension: 0.4,
                borderDashOffset:1,
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 15,
                pointRadius: 1,
                pointHitRadius: 15,
                data: [5, 9, 7, 8, 5, 3, 5, 4,0],

            }]
        },
    });
    })
</script>



<style>
    .chart {
        width: 500px;
        height: 700px;
        margin: auto;
    }
</style>




<div class="container">
    
    <div class="chart">
        <canvas id="mychart">
        </canvas>
    </div>
</div>

