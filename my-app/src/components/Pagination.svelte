<script>
    export let addres=[];
    export let path=addres[-1];
    
</script>


<div class="w-full xl:w-full 2xl:w-full absolute top-0 z-30" style="margin-bottom:30px;">
    <div class="page-title-box xl:w-full 2xl:w-full">
        <h3 class="h3-top">{path}</h3>
        <div>
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                {#each addres as ad , i}
                    {#if ad[i] ===ad[-1]}
                    <a href="/panel/{ad}" aria-current="page" class="z-10 relative text-gray-500 inline-flex items-center px-4 py-2  text-sm font-medium">
                        {ad}
                    </a>
                    {:else}
                    <a href="/panel/{ad}" aria-current="page" class="z-10  text-gray-600 relative inline-flex items-center px-4 py-2  text-sm font-medium">
                        {ad}
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    {/if}
                {/each}
            </nav>
        </div>
    </div>
</div>



<style>

.page-title-box{
        background-color: #fff;
        align-items: center;
        justify-content: space-between;
        display: flex;
        padding: 15px 27px;
        box-shadow: 0 1px 1px rgba(50,58,70,.1);
    }


    .h3-top{
        font-size: 1.1rem;
        margin: 0;
        color: #323a46;
    }

</style>