<script>
    export let head;
    export let text;
</script>

<!-- <div class="box p-2 rounded flex justify-center item-center">
    <p class=" text-center text-white">{head}</p>
    <p class="text-center text-white">{text}</p>
</div> -->

<div class="container">
    <div class="box flex flex-col item-center justify-center my-2 p-2">
        <div>
            <p class="text-center text-white text-2xl">{head}</p>
        </div>
    </div>
    <p class="text-center text-gray-900 font-bold mt-2">{text}</p>
</div>

<style>

    .container{
        margin:5px;
        width:100%;
    }


    .box {
        width: 6rem;
        height: 6rem;
        background-color: black;
        margin: auto;   
        border-radius: 10px;     
    }
</style>
