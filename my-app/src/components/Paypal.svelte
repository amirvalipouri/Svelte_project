<script>
    export let gift=[
        {cardid:"asdf", name:"ali" , amount:456789 , phone:"0910141", email:"am@yahoo.com" ,active:"pay"},
        {cardid:"asghfghtyujghdf", name:"ali" , amount:456789 , phone:"0910141", email:"am@yahoo.com",active:"notpay"},
        {cardid:"asdf", name:"ali" , amount:456789 , phone:"0910141", email:"am@yahoo.com",active:"nothing"},
        {cardid:"asdf", name:"ali" , amount:456789 , phone:"0910141", email:"am@yahoo.com",active:"nothing"}
    ];
</script>

<div class="lg:inline-block w-full m-auto overflow-x-auto p-2">
    <table class="mt-3 w-full lg:w-full">
        <tr>
            <th >Card Id</th>
            <th >Full Name</th>
            <th >Amount</th>
        </tr>
        {#each gift as g}
            {#if  g.active==="pay"}
            <tr style="background-color: green;">
                <td>{g.cardid}</td>
                <td>{g.name}</td>
                <td>{g.amount}</td>
                <td>{g.phone}</td>
                <td>{g.email}</td>
                <td><button style="background-color: #32CD32; height:2rem; width:7rem" class="p-2 text-xs font-bold text-center text-white" >Payment done</button></td>
                <td><button style="height:2rem; width:6rem" class="p-2  text-xs font-bold text-center text-black  border" >Add to list</button></td>
            </tr>
            {:else if g.active==="notpay"}
            <tr style="background-color: red;">
                <td>{g.cardid}</td>
                <td>{g.name}</td>
                <td>{g.amount}</td>
                <td>{g.phone}</td>
                <td>{g.email}</td>
                <td><button style="background-color: #32CD32; height:2rem; width:7rem" class="p-2 text-xs font-bold text-center text-white" >Payment done</button></td>
                <td><button style="height:2rem; width:6rem" class="p-2  text-xs font-bold text-center text-black  border" >Add to list</button></td>
            </tr>
            {:else}
            <tr style="background-color: white;">
                <td>{g.cardid}</td>
                <td>{g.name}</td>
                <td>{g.amount}</td>
                <td>{g.phone}</td>
                <td>{g.email}</td>
                <td><button style="background-color: #32CD32; height:2rem; width:7rem" class="p-2 text-xs font-bold text-center text-white" >Payment done</button></td>
                <td><button style="height:2rem; width:6rem" class="p-2  text-xs font-bold text-center text-black  border" >Add to list</button></td>
            </tr>
            {/if}
        {/each}
    </table>
</div>


<style>

    td {
        padding: 20px;
        text-align: center;
    }
    th{
        margin-right: 20px;
    }

    tr {
        border-bottom: 1px solid rgb(184, 181, 181);
    }
</style>