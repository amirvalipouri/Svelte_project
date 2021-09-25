<script>
    let page = 0;
    let show = false;


    function selects() {
        var ele = document.getElementsByName("foo");
        for (var i = 0; i < ele.length; i++) {
            if (ele[i].type == "checkbox") ele[i].checked = true;
        }
    }
    function deSelect() {
        var ele = document.getElementsByName("foo");
        for (var i = 0; i < ele.length; i++) {
            if (ele[i].type == "checkbox") ele[i].checked = false;
        }
    }

    function payment() {
        
        show = !show;

        if (show === true) {
            page = 1;
        } else if (show === false) {
            page = 0;
        }
    }

    function giftcards() {
        show = !show;

        if (show === true) {
            page = 2;
        } else if (show === false) {
            page = 0;
        }
    }

    function mascard() {
        page = 3;
    }
    function other() {
        page = 4;
    }

    export let userPayment = [
        { email: "amir@yahoo.com", money: 5698, id: "hjibgtgfdretgbhj" },
        { email: "bah@yahoo.com", money: 3638, id: "hjppppptgbhj" },
        { email: "sin@yahoo.com", money: 1235, id: "maqwsghjtfdretgbhj" },
    ];

    export let gift=[
        {cardid:"asdf", name:"ali" , amount:456789 , phone:"0910141", email:"am@yahoo.com"},
        {cardid:"asghfghtyujghdf", name:"ali" , amount:456789 , phone:"0910141", email:"am@yahoo.com"},
        {cardid:"asdf", name:"ali" , amount:456789 , phone:"0910141", email:"am@yahoo.com"},
        {cardid:"asdf", name:"ali" , amount:456789 , phone:"0910141", email:"am@yahoo.com"}
    ];
</script>

<div class="w-full h-full flex overflow-x-hidden">
    <div class="left flex justify-center absolute bottom-0 lg:inline-block lg:p-4 lg:mt-4 lg:relative">
        <button
            type="button"
            id="btnPayment"
            on:click={payment}
            class="btn font-bold mb-2 p-1 lg:p-2 border text-red-50  rounded text-center block bg-gray-700 focus:bg-white focus:text-black"
            >Payment</button
        >
        <button
            type="button"
            on:click={giftcards}
            class="btn font-bold mb-2 p-1 lg:p-2 border text-red-50  rounded text-center block bg-gray-700 focus:bg-white focus:text-black"
            >GiftCards</button
        >
        <button
            type="button"
            on:click={mascard}
            class="btn font-bold mb-2 p-1 lg:p-2 border text-red-50  rounded text-center block bg-gray-700 focus:bg-white focus:text-black"
            >Mas Card</button
        >
        <button
            type="button"
            on:click={other}
            class="btn font-bold mb-2 p-1 lg:p-2 border text-red-50  rounded text-center block bg-gray-700 focus:bg-white focus:text-black"
            >Other</button
        >
    </div>
    <div class="right inline-block w-full p-4">
        {#if page === 0}
            <div></div>
        {:else if page === 1}
            <div class="lg:inline-block w-5/6 m-auto overflow-x-auto">
                <div class="m-3 inline-block">
                    <input type="checkbox" on:click={selects} />   Select all
                </div>
                <div class="m-3 inline-block">
                    <input type="checkbox" on:click={deSelect} />   Delete all
                </div>
                <table class="w-full ">
                    <tr></tr>
                    {#each userPayment as u, i}
                        <tr class="p-2 mb-5">
                            <td class="mx-auto text-center"
                                ><input
                                    type="checkbox"
                                    name="foo"
                                    value={i}
                                /></td
                            >
                            <td class="text-center">{u.email}</td>
                            <td class="text-center">{u.money}</td>
                            <td class="text-center">
                                <button style="height:2rem; width:6rem"
                                    class="p-2 font-bold text-center border rounded bg-green-400 text-white text-xs"
                                    >Paid out</button
                                >
                            </td>
                            <td class="text-center">Theter</td>
                            <td class="text-center">{u.id}</td>
                        </tr>
                    {/each}
                </table>
            </div>





        {:else if page === 2}
            <div class="lg:inline-block w-5/6 m-auto overflow-x-auto">
                <table class="mt-3 w-full lg:w-full">
                    <tr>
                        <th >Card Id</th>
                        <th >Full Name</th>
                        <th >Amount</th>
                    </tr>
                    {#each gift as g}
                        <tr>
                            <td>{g.cardid}</td>
                            <td>{g.name}</td>
                            <td>{g.amount}</td>
                            <td>{g.phone}</td>
                            <td>{g.email}</td>
                            <td><button style="background-color: #32CD32; height:2rem; width:7rem" class="p-2 text-xs font-bold text-center text-white" >Payment done</button></td>
                            <td><button style="height:2rem; width:6rem" class="p-2  text-xs font-bold text-center text-black  border" >Add to list</button></td>
                        </tr>
                    {/each}
                </table>
            </div>
        {/if}
    </div>
</div>

<style>
    .btn {
        width: 6rem;
    }

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
