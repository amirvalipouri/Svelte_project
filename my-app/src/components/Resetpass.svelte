<script>
    export let pass;
    let repeatpass;
    let show;

    function check(){
        if(pass === repeatpass){
            show=true;
        }else{
            show=false;
        }
    }
</script>

<div class="container absolute w-full xl:w-full 2xl:w-full">
    <div class="card">
        <h4 style="color: #343A40; font-size: 16px; margin:10px;" >Reset Password</h4>

        <div class="pass lg:flex lg:flex-nowrap lg:item-center lg:justify-between block  p-2 my-2">
            <p class="mb-2 block lg:i nline-block" style="font-size: inherit;line-height: 1.5;color:#6c757d;">Password</p>
            <input class="inputForm  focus:outline-none" type="password" bind:value={pass}>
        </div>
        <div class="repetpass lg:flex lg:flex-nowrap lg:item-center lg:justify-between block p-2 my-2">
            <p class="mb-2 block lg:inline-block" style="font-size: inherit;line-height: 1.5;color:#6c757d;">Repeat password</p>
            <input class="inputForm focus:ring-blue-600 focus:outline-none" type="password" bind:value={repeatpass}>
        </div>
        {#if show===false}
            <p class="text-red-800 text-sm ml-4">Please enter your password correctly !</p>
        {/if}

    
        <div class="flex justify-start item-center lg:justify-end">
            <button class="savebutton " type="submit" on:click={check} >Save</button>
        </div>
    </div>
</div>


<style>
    .container{
        width:100%;
        
        padding:12px;
    }

    .inputForm{
        width:80%;
        border:1px solid #ced4da;
        padding:5px;
        border-radius: 0.2rem;
        padding: .45rem .9rem;
            }

    .card{
        background-color: white;
        margin-bottom: 15px;
        padding:10px;
    }
    .savebutton{
        width:4rem;
        height:2rem;
        color: #fff;
        background-color: #37cde6;
        margin: 5px;
    }
</style>