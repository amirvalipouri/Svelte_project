<script>

    import Pagination from '../components/Pagination.svelte'
    let date=new Date();
    let n = date.toString();
    export let usernameProfile;
    export let fullnameProfile;
    export let fileinputProfile;
    export let emailProfile;
    export let cardid;
    export let referrel;
    let editref=false;
    let editcard=false;

    let add=['dashboard','profile'];

    const onFileSelected =(e)=>{
    let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                 avatar = e.target.result
            };
        }

        function editreferral(){
            if(referrel.trim().length==0){
                editref=false;
            }else{
                editref=true;
            }
        }

        function savereferral(){
            editref=false;
        }

       function editcardid(){
        if(cardid.trim().length==0){
                editcard=false;
            }else{
                editcard=true;
            }
       }

       function savecardid(){
            editcard=false;
        }
</script>



<Pagination addres={add}></Pagination>
<div class="container w-full absolute xl:w-full 2xl:w-full top-8">
    <div class="card w-full xl:w-full 2xl:w-full">
    <div class="inputType">
       <div class="header">
            <h4 class="header-title">Edit profile</h4>
       </div>
    </div>
    <div class="divForm p-3">
        <form action="#">
            <div class="my-3 p-2 mx-auto lg:flex lg:flex-nowrap lg:item-center lg:justify-between block">
                <p class="inline-block" style="font-size: inherit; line-height: 1.5; color:#6c757d;">Registerdate : </p>
                <p class="" style="font-size: inherit; line-height: 1.5; color:#6c757d;">{n}</p>
            </div>
            <div class="my-3 p-2  lg:flex lg:flex-nowrap lg:item-center lg:justify-between block ">
                <label class="mb-2 block lg:inline-block " for="username">Username  </label>
                <input class="inputForm block  sm:block md:block lg:inline-block focus:outline-none" type="text" id="username" bind:value={usernameProfile} placeholder="Username" disabled>
            </div>
            <div class="my-3 p-2  lg:flex lg:flex-nowrap lg:item-center lg:justify-between block ">
                <label class="mb-2 block lg:inline-block" for="fullname">Fullname  </label>
                <input class="inputForm  block  sm:block md:block lg:inline-block focus:outline-none" type="text" id="fullname" bind:value={fullnameProfile} placeholder="Fullname">
            </div>
            <div class="my-3 p-2  lg:flex lg:flex-nowrap lg:item-center lg:justify-between block ">
                <label class="mb-2 block lg:inline-block " for="image">Image  </label>
                <input class="inputForm block  sm:block md:block lg:inline-block focus:border-blue-500  focus:outline-none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinputProfile}>
            </div>
            <div class="my-3 p-2  lg:flex lg:flex-nowrap lg:item-center lg:justify-between block">
                <label class="mb-2 block lg:inline-block" for="email">Email  </label>
                <input class="inputForm block  sm:block md:block lg:inline-block focus:border-blue-500  focus:outline-none" type="email" id="email" bind:value={emailProfile} placeholder="Email">
            </div>
            <div class="flex justify-start item-center">
                <button class="savebutton " type="submit" >Save</button>  
            </div>
        </form>
       </div>
    </div>

    <div class=" mr-1  flex justify-between item-center flex-wrap lg:flex-nowrap w-full">
        <div class="referrel p-2 mb-2 lg:mr-2 w-1/2">
            <div class="my-2 mx-2">
                <p class="block mb-2 m-2">Referral</p>
                {#if editref===false}
                    <input type="text" class="inputForm mx-auto focus:border-blue-500  focus:outline-none" bind:value={referrel} placeholder="Gemicoin@gmail.com">
                    <button class="text-center btnAdd mt-2" on:click={editreferral}>Add</button>
                {:else}
                    <div class="cardid-p w-2/3"><p>{referrel}</p></div>
                    <button class="text-center btnAdd mt-2" on:click={savereferral}>Save</button>
                {/if}
            </div>
            
        </div>

        <div class="cardid  lg:ml-1 mb-2  p-2 w-1/2">
            <div class="my-2">
                <p class="block m-2 mb-2">Card Id</p>
                {#if editcard===false}
                    <input type="text" class="inputForm mx-auto focus:border-blue-500  focus:outline-none" bind:value={cardid} placeholder="CardId">
                    <button class="text-center btnAdd mt-2" on:click={editcardid}>Add</button>
                {:else}
                    <div class="cardid-p w-2/3"><p>{cardid}</p></div>
                    <button class="text-center btnAdd mt-2 w-1/3" on:click={savecardid}>Save</button>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    .container{
        width:100%;
        padding: 1.5rem;   
        margin-top:10px; 
    }
    .inputType{
        width:100%;
        margin: auto;
        background-color: white;
        padding:10px;
        margin-bottom: 10px;
    }

    .header{
        margin: 10px;
    }

    .divForm{
        padding: 12px;
        margin:auto;
        width:100%;

    }
    .card{
        background-color: white;
        margin-bottom: 15px;
        margin-top:1rem;
        width:100%;
    }

    .inputForm{
        width:80%;
        min-width: 200px;
        border:1px solid #ced4da;
        padding:5px;
        border-radius: 0.2rem;
        padding: .45rem .9rem;
        }

    label{
        font-size: inherit;
        line-height: 1.5;
        color:#6c757d;
    }
    .savebutton{
        width:5rem;
        height:2rem;
        border-radius: 2px;
        color: #fff;
        background-color: #37cde6;
        margin: 5px;
    }
    .cardid{
        background-color: white;
        height: auto;
        width: 100%;
        min-width:250px;
        border:1px solid white;
    }
    .referrel{
        background-color: white;
        height: auto;
        width: 100%;
        min-width:250px;
        border:1px solid white;
    }

    .btnAdd{
        height:2.3rem;
        width:5rem;
        border-radius: 2px;
        background-color: #37cde6;
        color:white;
        font-size: bold;
    }

    /* .h3-top{
        font-size: 1.1rem;
        margin: 0;
        color: #323a46;
    } */


    .header-title{
        font-family: "Roboto",sans-serif;
        color: #343a40;
        font-size: 1rem;
        margin: 0 0 7px;
    }

    /* .page-title-box{
        background-color: #fff;
        align-items: center;
        justify-content: space-between;
        display: flex;
        padding: 15px 27px;
        box-shadow: 0 1px 1px rgba(50,58,70,.1);
    } */

    .cardid-p{
        border-bottom: 2px solid black;
        display: inline-block;
        border-radius: 0.2rem;
        padding: .45rem .9rem;
        min-width: 200px;
    }
</style>