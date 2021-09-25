<script>
	export let location;
	export let textHead;
	export let revennue;
	export let NumberOfEmployee;
	export let src;
	export let alt;
</script>



<div class="card">
	<div class="card-top">
		<img {src} {alt} />

		<h2>{textHead}</h2>
		<h4>{location}</h4>
	</div>
	<div class="line" />
	<div class="card-bottom">
		<div class="card-bottom-left">
			<h3>Revennue (USD)</h3>
			<h2>{revennue}</h2>
		</div>
		<div class="card-bottom-right">
			<h3>Number of Employees</h3>
			<h2>{NumberOfEmployee}</h2>
		</div>
	</div>
</div>

<!-- این ها باید در فایل app قرار گیرد -->

<!-- 
const pkg = {
	location: 'San Francisco, California',
	textHead: "Airbnb",
	revennue: '260 rc',
	NumberOfEmployee: '3.1k',
	src : '',
	alt : ''
}; -->

<style>
	.card {
		width: 100%;
		margin: auto;
		margin-bottom: 10px;
	}
	.card-top {
		margin: 2%;
	}
	.card-bottom{
		display:flex;
		flex-wrap: nowrap;
		/* justify-content: space-between; */
	}
	img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		float: left;
		margin-right: 3%;
	}
	.line {
		width: 95%;
		border-top: 1px solid rgb(212, 212, 212);
		margin: auto;
	}
	h4 , h3 {
		color: rgb(182, 178, 178);
	}

	.card-bottom-right{
		margin-left: 40%;
	}
	.card-bottom-left{
		margin-left: 2%;
	}
</style>
