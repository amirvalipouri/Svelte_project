<script>
    import Carddesk from '../../../components/Carddesk.svelte'
    import Shirt1 from '../../../node_modules/images/shirt1.png'
    import Shirt2 from '../../../node_modules/images/shirt2.png'
</script>


<div class="flex flex-wrap lg:justify-around justify-center item-center lg:flex-nowrap p-2">
    <div class="lg:inline-block block"><Carddesk src={Shirt2} price=52 star={3}></Carddesk></div>
    <div class="lg:inline-block block"><Carddesk src={Shirt2} price=62 star={2}></Carddesk></div>
    <div class="lg:inline-block block"><Carddesk p src={Shirt2} price=72 star={0}></Carddesk></div>
</div>

