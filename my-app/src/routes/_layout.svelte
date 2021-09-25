<script>
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Nav from '../components/Nav.svelte';
	import Sidebar from "../components/Sidebar.svelte"
	import SidebarAdmin from '../components/SidebarAdmin.svelte';
	

	export let isPanel 
	export let isPanelAdmin
	// export let isPanelAdmin 
	console.log(isPanel);
</script>
<script context="module">
			export async function preload(page, session) {
				// if(session.split("=")[1] =="true")
				// 	console.log(page.path = "/authentication");
				if(page.path.startsWith("/panel"))
					{
		
						return {isPanel: true}
					}
				if(page.path.startsWith("/admin")){
					return {isPanelAdmin:true}
				}
				
		
	}
</script>
<style>
	main{
		margin-top: 4.6rem;
	}
</style>

<Tailwindcss />



{#if isPanel}
<Nav></Nav>
<main>
	<Sidebar>
		<slot></slot>	
	</Sidebar>
</main>
{:else if isPanelAdmin}
<Nav></Nav>
<main>
	<SidebarAdmin>
		<slot></slot>
	</SidebarAdmin>
</main>
{:else}
	<slot></slot>
{/if}

