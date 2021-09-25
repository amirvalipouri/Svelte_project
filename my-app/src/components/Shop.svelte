<script>
    let email;
    import Carddesk from '../components/Carddesk.svelte'
</script>


<div class="container w-full">
    <div class="top w-full">
        <div class="w-full  p-3 lg:flex lg:justify-between lg:justify-center lg:item-center ">
            <div class="lg:inline-block block"> <h4 class="my-1 text-hover text-2xl text-center text-gray-900  cursor-pointer font-bold">SHOP</h4> </div>
            <div class="lg:inline-block block"> <p class="my-1 text-hover text-xl text-center  text-gray-900  cursor-pointer">{email}</p> </div>
        </div>
        <div class="w-full py-2 mt-8 mb-2">
            <p class=" my-1  block text-center text-sm lg:text-xl text-gray-900">Do you want to become a three stars for a month?</p>
            <p class="my-1 text-hover block text-center text-2xl  text-gray-900 cursor-pointer">Buy premium membership</p>
        </div>
    </div>

    <div class="bottom w-full p-2">

        <div class="w-full lg:flex lg:justify-around lg:item-center my-4 lg:my-6 px-2 py-2 lg:flex-nowrap mx-auto">

            <div class="lg:inline-block block"><Carddesk  price=1400 star={3}></Carddesk></div>
            <div class="lg:inline-block block"><Carddesk  price=700 star={2}></Carddesk></div>
            <div class="lg:inline-block block"><Carddesk  price=300 star={1}></Carddesk></div>
           
             
        </div>


    </div>
</div>


<style>
    .top{
        height: 25rem;
        background-color: white;
    }

    .text-hover:hover{
        color:  #3bafda;
    }
</style>