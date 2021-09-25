<script>
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
    export let userPayment = [
        {
            email: "amir@yahoo.com",
            money: 1,
            id: "hjibgtgfdretgbhj",
            active: "pay",
        },
        {
            email: "bah@yahoo.com",
            money: 2,
            id: "hjppppptgbhj",
            active: "nothing",
        },
        {
            email: "sin@yahoo.com",
            money: 3,
            id: "maqwsghjtfdretgbhj",
            active: "notpay",
        },
    ];

    function summ(ar){
       var total = 0;
       for (var i = 0; i < ar.length; i++) {
              total = total + ar[i].money;
              ar[i].money=0;
            }
       console.log(total);
        userPayment=[...userPayment];
    }
</script>

<div class="lg:inline-block w-full m-auto overflow-x-auto">
    <div style="margin: 5px;">
        <div class="m-3 inline-block">
            <input type="checkbox" on:click={selects} /> Select all
        </div>
        <div class="m-3 inline-block">
            <input type="checkbox" on:click={deSelect} /> Delete all
        </div>
        <button
        on:click={()=>summ(userPayment)}
            style="height:2rem; width:6rem"
            class="p-2 font-bold text-center border rounded bg-green-400 text-white text-xs"
            >Paid all out</button
        >
    </div>
    <table class="w-full ">
        <tr />
        {#each userPayment as u, i}
            {#if u.active === "pay"}
                <tr class="p-2 mb-5" style="background-color: green;">
                    <td class="mx-auto text-center"
                        ><input type="checkbox" name="foo" value={i} /></td
                    >
                    <td class="text-center">{u.email}</td>
                    <td class="text-center">{u.money}</td>
                    <td class="text-center">
                        <button
                            style="height:2rem; width:6rem"
                            class="p-2 font-bold text-center border rounded bg-green-400 text-white text-xs"
                            >Paid out</button
                        >
                    </td>
                    <td class="text-center">Theter</td>
                    <td class="text-center">{u.id}</td>
                </tr>
            {:else if u.active === "notpay"}
                <tr class="p-2 mb-5" style="background-color: red;">
                    <td class="mx-auto text-center"
                        ><input type="checkbox" name="foo" value={i} /></td
                    >
                    <td class="text-center">{u.email}</td>
                    <td class="text-center">{u.money}</td>
                    <td class="text-center">
                        <button
                            style="height:2rem; width:6rem"
                            class="p-2 font-bold text-center border rounded bg-green-400 text-white text-xs"
                            >Paid out</button
                        >
                    </td>
                    <td class="text-center">Theter</td>
                    <td class="text-center">{u.id}</td>
                </tr>
            {:else}
                <tr class="p-2 mb-5" style="background-color: whitesmoke;">
                    <td class="mx-auto text-center"
                        ><input type="checkbox" name="foo" value={i} /></td
                    >
                    <td class="text-center">{u.email}</td>
                    <td class="text-center">{u.money}</td>
                    <td class="text-center">
                        <button
                            style="height:2rem; width:6rem"
                            class="p-2 font-bold text-center border rounded bg-green-400 text-white text-xs"
                            >Paid out</button
                        >
                    </td>
                    <td class="text-center">Theter</td>
                    <td class="text-center">{u.id}</td>
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
    tr {
        border-bottom: 1px solid rgb(184, 181, 181);
    }
</style>
