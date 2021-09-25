<script>
    import Chart2 from '../components/Chart2.svelte'
    import Canvas from '../components/Canvas.svelte'
    let date = new Date(),
        year;
    var n = date.getFullYear();
    let referral;

    let data = {
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
                pointBorderWidth: 3,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 15,
                pointRadius: 1,
                pointHitRadius: 15,
                data: [5, 9, 7, 8, 5, 3, 5, 4,0],

            }]
    }
	let name = "mychart";

    let data1 = {
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
                pointBorderWidth: 3,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 15,
                pointRadius: 1,
                pointHitRadius: 15,
                data: [5, 9, 7, 8, 5, 3, 5, 4,0],

            }]
    }
	let name1 = "mychart1";
</script>

<div class="container w-full">
    <div class="dashboard w-full ">
        <h1
            class="m-5  cursor-pointer text-center lg:text-left font-bold text-2xl"
            style="color:#343434;"
        >
            DASHBOARD
        </h1>
        <p
            class="text-center mt-8 mb-2 text-2xl font-bold"
            style="color:#343434;"
        >
            STARS
        </p>
        <div class="text-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer h-9 w-9 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class=" cursor-pointer h-10 w-10 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer h-9 w-9 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
            </svg>
        </div>
        <div class="mb-4">
            <h1 class="text-center mt-8 mb-2 text-xl" style="color:#343434;">
                registeration date :
            </h1>
            <p class="text-center" style="color:#343434;">{n}</p>
        </div>
    </div>

    <div class="flex flex-wrap justify-around item-center w-full lg:flex-nowrap p-2" style="margin-top: 1.5rem; margin-bottom: 5rem;">
            <div class="mb-1 w-full inline-block lg:w-1/4 " ><Canvas text="hello" number="1" color="red"></Canvas></div>
            <div class="mb-1 w-full inline-block lg:w-1/4 " ><Canvas text="hello" number="2" color="blue"></Canvas></div>
            <div class="mb-1 w-full inline-block lg:w-1/4 " ><Canvas text="hello" number="3" color="red"></Canvas></div>
            <div class="mb-1 w-full inline-block lg:w-1/4 " ><Canvas text="hello" number="4" color="blue"></Canvas></div>
    </div>


    <div class="lg:flex lg:justify-between lg:item-center lg:p-3 mb-2 p-2 w-full">
        <div class="block lg:inline-block lg:w-1/2 w-full mx-1"><Chart2 name={name} data={data} text="Growth chart of subsets from registerdate"></Chart2></div>
        <div class="block lg:inline-block lg:w-1/2 w-full mx-1"><Chart2 name={name1} data={data1} text="Revenue growth chart from registerdate"></Chart2></div>
    </div>

    <footer class="flex justify-center item-center mt-2">
        <div>
            <p class="text-gray-500">
                © {n}
                <span
                    class="font-bold text-sm lg:text-xl text-indigo-500 hover:text-indigo-700 cursor-pointer"
                    >Gemicoins team</span
                >
            </p>
        </div>
    </footer>
</div>


<style>
    .container {
        height: 210vh;
    }

    .dashboard {
        height: auto;
        margin-bottom: 25px;
        color: #343434;
    }

    footer {
        width: 100%;
        position: absolute;
        bottom: 0;
        left:0;
        right:0;
        margin-bottom:10px;
        margin: auto;
    }
</style>
