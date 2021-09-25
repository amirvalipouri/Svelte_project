<script>
import Button from "./Button.svelte";
import {createEventDispatcher} from "svelte"
let dispatch  = createEventDispatcher()
	export let menu=[];
</script>

<form>
	
	<!-- svelte-ignore a11y-no-onchange -->
	<select on:change={(e)=> dispatch("onChange" , {value : e.target.value})} >
		{#each menu as i}
			<option value={i.value} >
				{i.text}
			</option>
		{/each}
	</select>
</form>


<style>
	select{
		padding: 0.7rem ;
		width: 200px
	}
</style>