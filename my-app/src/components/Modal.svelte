<script>
import { scale } from "svelte/transition";
import {isModalOpen} from "../store"
let modal = false
isModalOpen.subscribe(data => {
  modal = data
})
</script>

<style>

.sidebar{
		
		position: fixed;
		top: 0;
		z-index: 20;
	}
	.sidebar-container{
		position: relative;
		width:100vw;
		height:100vh;

	}
	.sidebar-fade{
		background-color: rgba(0, 0, 0, 0.39);
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
	}
	.sidebiar-menu{
		position: absolute;
		top: 50%;
    right: 50%;
    border-radius: 10px;
    transform: translate(50%,-50%);
		width: 400px;
		height: 400px;
		background-color: #fff;
		z-index: 22;
	}
</style>

{#if modal}
<div class="section ">
  <div class="sidebar"  >
    <div class="sidebar-container">
      <div class="sidebiar-menu" transition:scale={{start: 0 , duration: 700}}>
        <slot></slot>
      </div>
      <div class="sidebar-fade"  on:click={()=> isModalOpen.set(false)}></div>
    </div>
  </div>
</div>
{/if}
