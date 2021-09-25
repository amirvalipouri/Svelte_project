<script>
	export let text="";
	export let width="6%";
	export let height="3%";
	export let backgroundcolor="white";
    export let color;
	export let padding="0.7rem";
	export let link;
</script>

<a on:click|preventDefault href={link}  style="min-width:{width}; height:{height};
 background-color:{backgroundcolor};color:{color}; padding:{padding}; border:1px solid {color};"> {text}</a>


<style>
	a{
		display: inline-block;
		text-decoration : none;
		margin: 5px;
		min-width: 100%;
		text-align: center;
		cursor: pointer;
	}
</style>