<script>
	export let text="";
	export let width="";
	export let backgroundcolor;
	export let link;
</script>

<a on:click|preventDefault href={link}  style="min-width:{width}; ;
 background-color:{backgroundcolor}; padding:0.7rem 1.5rem;"> {text}</a>

<style>
	a{
	text-decoration : none;
		color:white;
		border-radius: 2px;
		display: inline-block;
		margin: 5px;
		min-width: 100%;
		text-align: center;
		cursor: pointer;
		
}
/* a:hover{
	box-shadow: -1px 0px 0 0 black;
	transform: translate(-1px,1px);

} */
</style>