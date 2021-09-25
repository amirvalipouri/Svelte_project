<script>
    import { fly } from "svelte/transition";
    import Cookie from "js-cookie"
    import Table from "./Table.svelte"
    import Nav from '../components/Nav.svelte'
    import Chart from "../components/Chart.svelte"
    import Dashboard from '../components/Dashboard.svelte'
import { onMount } from "svelte";
    export let show = true;
    export let link;
    export let dropdownTrigger;
    export let dropdownTrigger2;
    export let dropdownTrigger3;
    let y=[{name:'amir' , phone:"0910141536" , status:"a" , lastorder:"kfh" , status:"aks" , balance:"ahadk" }]

    function closesidebar() {
        if (show === false) {
            console.log(window.innerWidth);
            if(window.innerWidth < 768)
            {
                  document.getElementById("sidebar").style.width = "15rem";
            document.getElementById("content").style.width ="calc(100% )";
            document.getElementById("sidebar").style.transition = "all 0.4s";
            document.getElementById("content").style.transition = "all 0.4s";
            document.getElementById("content").style.left = "15rem";
            document.getElementById('sidebarBtn').style.transform="rotate(360deg)";
            document.getElementById("sidebarBtn").style.transition = "all 0.4s";
            show = !show;
            }
            else 
            {
                document.getElementById("sidebar").style.width = "15rem";
            document.getElementById("content").style.width ="calc(100% - 15rem)";
            document.getElementById("sidebar").style.transition = "all 0.4s";
            document.getElementById("content").style.transition = "all 0.4s";
            document.getElementById("content").style.left = "15rem";
            document.getElementById('sidebarBtn').style.transform="rotate(360deg)";
            document.getElementById("sidebarBtn").style.transition = "all 0.4s";
            
            
            
            show = !show;
            }
        } else {
            
            document.getElementById("sidebar").style.width = "4rem";
            document.getElementById("content").style.width ="calc(100% - 4rem)";
            document.getElementById("sidebar").style.transition = "all 0.4s";
            document.getElementById("content").style.transition = "all 0.4s";
            document.getElementById("content").style.left = "4rem";
            document.getElementById('sidebarBtn').style.transform="rotate(180deg)";
            document.getElementById("sidebarBtn").style.transition = "all 0.4s";
            document.querySelectorAll(".dropdown-menu")
            .forEach(item => item.style.display="none")
            show = !show;
        }
    }
    
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css"
    />
</svelte:head>

<div class="relative " style="overflow-x: clip">
    <div
        id="sidebar"
        class="fixed px-3 py-4 transition bg-gray-100 h-full overflow-x-hidden overflow-y-scroll z-50 mx-auto"
        style="width:15rem; background-color:white;"
        
    >
        <div class="relative mx-auto">
            <div class="absolute mx-auto " style="bottom: 0;  top:0;width: 18rem; trainsition: all 0.2s; border-right: 1px solid grey;">

              <button class="text-gray-400  btn block focus:outline-none hover:text-blue-500" type="button" id="sidebarBtn" on:click={closesidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                  
              </button>
                <div class="mx-auto">
                    <p
                        class="text-gray-400 mt-2 ml-3 mb-3 text-lg	 hover:text-blue-500 cursor-pointer"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                        File Manager
                    </p>
                </div>
                {#if show===true}
                <p id="custom" class="text-gray-600 mt-2 ml-3 mb-2 text-xs">CUSTOM</p>
                {:else}
                <p id="custom" class="text-white-500 mt-2 ml-3 mb-2 text-xs"></p>
                {/if}
                <div bind:this={dropdownTrigger2} class="dropdown block relative">
                    <button 
                        class="dropbtn text-gray-400 mt-2 ml-3 mb-2  hover:text-blue-500 	
                         cursor-pointer font-semibold rounded inline-flex items-center"
                         on:click={(e)=> {
                            let y = dropdownTrigger2.lastChild.style.display
                            if (show === false) {
                document.getElementById("sidebar").style.width = "15rem";
                document.getElementById("content").style.width ="calc(100% - 15rem)";
                document.getElementById("sidebar").style.transition = "all 0.4s";
                document.getElementById("content").style.transition = "all 0.4s";
                document.getElementById("content").style.left = "15rem";
                
                show = !show;
            }
                            if(y != "block")
                            {
                                console.log(show);
                                
                                dropdownTrigger2.lastChild.style.display = "block"
                            }
                            else 
                            dropdownTrigger2.lastChild.style.display = ""
                        }}
                    >
                        <span class="mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>Payment</span>
                        <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            ><path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                        </svg>
                    </button>
                    <ul 
                        class="dropdown-menu  bg-white-500  transition-all hidden text-gray-700 pt-1 w-full"
                        
                    >
                        <li class="bg-white-500" transition:fly={{y:-100,duration:500}}>
                            <a
                                class="ml-4 w-full rounded-t  hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href="/panel/visa">Visa</a
                            >
                        </li>
                        <li class="bg-white-500">
                            <a
                                class=" ml-4 hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href="/panel/paypal">Paypal</a
                            >
                        </li>
                        <li class="bg-white-500">
                            <a
                                class="ml-4 rounded-b hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href='/panel/tether'
                                >Tether
                            </a>
                        </li>
                        <li class="bg-white-500">
                            <a
                                class="ml-4 rounded-b hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href='/panel/gift'
                                >Gift
                            </a>
                        </li>
                    </ul>
                </div>

                

                <div class="dropdown block relative"  bind:this={dropdownTrigger} >
                    <button on:click={(e)=> {
                        let x = dropdownTrigger.lastChild.style.display
                        if (show === false) {
            document.getElementById("sidebar").style.width = "15rem";
            document.getElementById("content").style.width ="calc(100% - 15rem)";
            document.getElementById("sidebar").style.transition = "all 0.4s";
            document.getElementById("content").style.transition = "all 0.4s";
            document.getElementById("content").style.left = "15rem";
            
            show = !show;
        }
                        if(x != "block")
                        {
                            console.log(show);
                            
                            dropdownTrigger.lastChild.style.display = "block"
                        }
                        else 
                        dropdownTrigger.lastChild.style.display = ""
                    }}
                        class=" text-gray-400 mt-2 ml-3 mb-2 text-lg hover:text-blue-500  cursor-pointer font-semiboldrounded inline-flex items-center"
                    >
                        <span class="mr-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>Extra Pages</span>
                        <svg
                            id="svgSidebar"
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            ><path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                        </svg>
                    </button>
                    <ul id="myDropdown" transition:fly={{y:-100, duration:500, delay:100}}
                        class="dropdown-menu font-semibold hidden text-white-200 pt-1 w-full"
                    >
                        <li class="">
                            <a
                                class="ml-4 w-full rounded-t  hover:text-blue-400 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href={link}>Starter</a
                            >
                        </li>
                        <li class="">
                            <a
                                class=" ml-4 hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href={link}>Timeline</a
                            >
                        </li>
                        <li class="">
                            <a
                                class="ml-4 rounded-b hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href={link}
                                >Sitemap
                            </a>
                        </li>
                        <li class="">
                            <a
                                class="ml-4 w-full rounded-t  hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href={link}>Invoice</a
                            >
                        </li>
                        <li class="">
                            <a
                                class=" ml-4 hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href={link}>FAQs</a
                            >
                        </li>
                        <li class="">
                            <a
                                class="ml-4 rounded-b hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href={link}>Search Results</a
                            >
                        </li>
                        <li class="">
                            <a
                                class="ml-4 w-full rounded-t  hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href={link}>Pricing</a
                            >
                        </li>
                        <li class="">
                            <a
                                class=" ml-4 hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href={link}>Maintenance</a
                            >
                        </li>
                        <li class="">
                            <a
                                class="ml-4 rounded-b hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href={link}
                                >Coming Soon
                            </a>
                        </li>
                        <li class="">
                            <a
                                class="ml-4 w-full rounded-t  hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href={link}>Lightbox</a
                            >
                        </li>
                        <li class="">
                            <a
                                class=" ml-4 hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href={link}>Error404</a
                            >
                        </li>
                        <li class="">
                            <a
                                class="ml-4 rounded-b hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href={link}>Error 404-alt</a
                            >
                        </li>
                        <li class="">
                            <a
                                class="ml-4 rounded-b hover:text-blue-500 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href={link}>Error 500</a
                            >
                        </li>
                    </ul>
                </div>
                {#if show===true}
                <p id="custom" class="text-gray-600 mt-2 ml-3 mb-2 text-xs">COMPONENT</p>
                {:else}
                <p id="custom" class="text-gray-600 mt-2 ml-3 mb-2 text-xs"></p>
                {/if}
                <div>
                    
                    <p class="text-gray-400 mt-2 ml-3 mb-3 text-lg inline-block hover:text-blue-500 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        <a href="/panel/tree">Tree</a>
                    </p>
                </div>
                <div>
                    
                    <p class="text-gray-400 mt-2 ml-3 mb-3 text-lg inline-block hover:text-blue-500 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        <a href="/panel/shop">Shop</a>
                    </p>
                </div>

                <div class="dropdown block relative"  bind:this={dropdownTrigger3} >
                    <button on:click={(e)=> {
                        let x = dropdownTrigger3.lastChild.style.display
                        if (show === false) {
            document.getElementById("sidebar").style.width = "15rem";
            document.getElementById("content").style.width ="calc(100% - 15rem)";
            document.getElementById("sidebar").style.transition = "all 0.4s";
            document.getElementById("content").style.transition = "all 0.4s";
            document.getElementById("content").style.left = "15rem";
            
            show = !show;
        }
                        if(x != "block")
                        {
                            console.log(show);
                            
                            dropdownTrigger3.lastChild.style.display = "block"
                        }
                        else 
                        dropdownTrigger3.lastChild.style.display = ""
                    }}
                        class=" text-gray-400 mt-2 ml-3 mb-2 text-lg hover:text-blue-500  cursor-pointer font-semiboldrounded inline-flex items-center"
                    >
                        <span class="mr-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>Base UI</span>
                        <svg
                            id="svgSidebar"
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            ><path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                        </svg>
                    </button>
                    <ul id="myDropdown" transition:fly={{y:-100, duration:500, delay:100}}
                        class="dropdown-menu font-semibold hidden text-white-200 pt-1 w-full"
                    >
                        <li class="">
                            <a
                                class="ml-4 w-full rounded-t  hover:text-blue-400 cursor-pointer py-2 px-4 block whitespace-no-wrap"
                                href='/panel/card'>Card</a
                            >
                        </li>
                    </ul>
                </div>

            

            </div>
        </div>
        
    </div>

    <div
        id="content"
        class="absolute widthclass"
        style="height:220vh; "
    >
    
      <slot></slot>
    </div>
</div>

<style>
    #sidebar::-webkit-scrollbar {
        width: 0.3em;
        
    }
    #sidebar::-webkit-scrollbar-thumb {
        background-color: rgb(189, 186, 186);
        outline: 1px solid black;
        
    }
    .widthclass{
        width:calc(100% - 15rem);
        left:18rem;
        
    }
    
    @media screen and (max-width: 768px){
        .widthclass{
        width:100%;
        left:15rem
    }
    }

    .btn{
        margin:2px;
        padding:4px;
        
    }
</style>
