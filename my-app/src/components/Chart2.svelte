<script>
    import { onMount } from "svelte";
    export let data 
    export let name
    export let text

    async function createChart(name, data) {
        const module = await import('chart.js');
        const Chart = module.default;
        var ctx = document.getElementById(name).getContext("2d");
        
        var myChart = new Chart(ctx, {
            type: "line",
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }
    const test = ()=> {
        createChart(name , data)
        
    }
    onMount(
        test
    );
</script>

<!-- <script>
    import { onMount } from "svelte";

var ctx= document.getElementById('mychart').getContext('2d');
    async function createChart(){
        const module = await import('chart.js');
        const Chart = module.default;
        
        var mychart = new Chart(ctx,{ labels: ["1", " 2", "3", "4", "5", "6", "7", "8"],
        datasets: [
            {
                type:"bar",
                data:{
                label: "Line chart area",
                backgroundColor: "#1E90FF",
                borderCapStyle: "butt",
                borderColor: "#0000FF",
                fill: true,
                lineTension: 0.4,
                borderDashOffset: 1,
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 15,
                pointRadius: 1,
                pointHitRadius: 15,
                data: [5, 9, 7, 8, 5, 3, 5, 4, 0],
        
                }
               }]
    })
    createChart()
    }
    let Chart 
        onMount(()=> {
            const createChart = async ()=> {
        const module = await import('chart.js');
    const chart = module.default
    Chart = chart
    }
    createChart()
        })
    let dataLine = {
        labels: ["1", " 2", "3", "4", "5", "6", "7", "8"],
        datasets: [
            {
                label: "Line chart area",
                backgroundColor: "#1E90FF",
                borderCapStyle: "butt",
                borderColor: "#0000FF",
                fill: true,
                lineTension: 0.4,
                borderDashOffset: 1,
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 15,
                pointRadius: 1,
                pointHitRadius: 15,
                data: [5, 9, 7, 8, 5, 3, 5, 4, 0],
            },
        ],
    };
    
  
</script> -->

<!-- <canvas id="mychart"  width='400' height='400'></canvas>
 <Chart></Chart> -->
<!-- {#if isClinet}
<Line data={dataLine} options={{ responsive: true }} />
{/if}   -->




<div class="chart">
    <canvas id={name} width="300" height="200" />
    <p class="text-gray-900 text-center my-2 font-bold">{text}</p>
</div>

<style>
    .chart{
        width: 100%;
        height: auto;
        display: inline-block;
        margin-top: 3rem;
        margin-bottom: 5rem;
        border: 1px solid white;
        background-color: white;
    }
</style>