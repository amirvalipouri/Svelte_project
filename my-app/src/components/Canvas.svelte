<script>
    export let color;
    export let number;
    export let text;
</script>


<div class="container">
    <div class="card">
        <div class="card-svg">
            <svg width="50%" height="100" viewbox="0 0 400 300">
                <path
                    style="stroke:{color};stroke-width : 7px;fill:none;"
                    id="path"
                    d="M 31 115 L 63 93 L 94 122 Q 119 129 131 93 L 164 81 L 186 48 
                 L 219 70 L 245 116 L 286 129"
                />
            </svg>
        </div>
        <div class="card-body">
            <h1 class="text-center">{number}</h1>
            <h3 class="text-center text-gray-800 font-bold">{text}</h3>
        </div>
    </div>

</div>

<style>
    
    .container{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 7rem;
        justify-content: space-around;
    }
    .card {
        background-color: white;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        margin: 2%;
        max-width: 100%;
        min-width: 200px;
        
    }

    .card-svg {
        float: left;
        width: 50%;
        margin-top: 5%;
    }
    svg {
        min-width: 250px;
    }
    .card-body {
        
        width: 100%;
        margin-right: 5%;
        margin-left: 35%;
        margin-top: 5%;
        float: right;
    }

    h3 {
        margin-right: 10%;
        color: #dcdcdc;
    }
    h1{
        margin-right: 10%;

    }
</style>
