<script>
	export let src;
	export let alt;
	export let user;
	export let email;
	import Sidebar from '../components/Sidebar.svelte'
	import Logo from "images/logo.png"
	import { onMount } from 'svelte';
	
	</script>


<nav class="flex z-40 justify-between items-center fixed top-0 w-full" style="height: 4.5rem;background-color: #3bafda;">
    <div class="flex lg:justify-around md:justify-around justify-between item-center lg:w-3/12 md:w-6/12 sm:w-6/12 mx-2" >
        <img src={Logo} alt="logo" width="120px" height="22px" class="mb-1">
    </div>
	
	<div class="lg:w-6/12 md:w-1/12 sm:w-1/12"></div>

    <div class="flex justify-around lg:w-3/12 md:w-5/12 sm:w-5/12 items-center mx-2">
		<img {src} alt={alt} width="35px" height="35px"  class="mr-2 inline-block "  style="border-radius: 50%; float:left" >
		<div class="mr-5 px-2">
			
			<div class=" flex flex-col justify-center inline-block sm:py-12">
				<div class="flex items-center justify-center p-12">
				  <div class=" relative inline-block text-left dropdown">
					<span class=""
					  ><button class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out  rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" 
					   type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
						<span class="text-white">{user}</span>
						<svg class="w-5 h-5 ml-2 -mr-1 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</button
					></span>
					<div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
					  <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
						<div class="px-4 py-3">         
						  <p class="text-sm leading-5">Signed in as</p>
						  <p class="text-sm font-medium leading-5 text-gray-900 truncate">{email}</p>
						</div>
						<div class="py-1">
						  <a href="a"  class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Account settings</a>
						  <a href="a"  class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Support</a>
						  <span role="menuitem" tabindex="-1" class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50" aria-disabled="true">New feature (soon)</span>
						  <a href="a"  class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >License</a></div>
						<div class="py-1">
						  <a href="/authentication"  class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Sign out</a></div>
					  </div>
					</div>
				  </div>
				</div>              
				</div>




		</div>
		<span class="cursor-pointer text-white ">
			<a href="/panel/resetpassword">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
				</svg>
			</a>
		</span>
	</div>
</nav>



<style>
	/* #myDropdown{
		background-color: white;
	} */


	.dropdown:focus-within .dropdown-menu {
  opacity:1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>


