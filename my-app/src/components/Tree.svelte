<script>

	export let user=[{name:"hamid",img:"kk",another:false},{name:"asad",img:"kk",another:true},{name:"akram",img:"kk",another:false},{name:"babak",img:"kk",another:true},
	];

	// let user2=[{name:"ali",img:"sd"},{name:"mohsen",img:"sd"},{},{name:"mania",img:"sd"},{},{name:"asal",img:"sd"}];
	let show=true;
	let show1=true;
	let show2=true;
	export let src;
	function edit(){
		show=!show;
		if(show===false){
			document.getElementById('row-1').style.display="flex";
		}else{
				document.getElementById('row-1').style.display="none";
				document.getElementById('first1-1').style.display="none";
				document.getElementById('first1-2').style.display="none";
		}
		
	}
	

</script>


<div class="container">


<div class="flex justify-center item-center">
	<div class='ziro flex flex-col  item-center flex-nowrap' on:click={edit}>
		<img src={src} alt="" width="50px" height="50px" style="border-radius: 50%;margin:auto;">
		<p class="text-center font-bold text-sm">
			Amirvali
		</p>
	</div>
</div>



<div class="row-1 flex item-center justify-center " id="row-1" style="display: none;">
	{#each user as u ,i}
	<div class="first px-2 m-2">
		<div><img  alt="" width="50px" height="50px" ></div>
		<div><p class="font-bold text-sm">{u.name}</p></div>
		<!-- {#if u.another===true}
		<div class="second flex justify-between item-center flex-nowrap p-4 m-2" style="transition:translate(-{i+1*10}, 100px);;">
			<div><img src={user2[i].img} alt="" width="50px" height="50px" ></div>
			<div><p class="">{user2[i].name}</p></div>
		</div>
		{/if} -->
	</div>
	{/each}
</div>

</div>




<style>
	
	.ziro{
		border:1px solid black;
		padding: 5px;
		margin: 10px;
		width: 7rem;
		height: 7rem;
		border:1px solid black;
		background-color: white;
		border-radius:2px;
		
	}


	.first{
		border-radius:10px;
  		display:flex;
  		justify-content:space-around;
  		align-items:center;
  		width:13rem;
  		height:4rem;
  		border:2px solid black;
		background-color: white;
		min-width:200px;
	}

	/* .second{
		border-radius: 20px;
		height: 5rem;
		width: 10rem;
		border: 1px solid black;
		background-color: rgb(85, 139, 255);
		
	} */
	

	img{
		width:40px;
		height:40px;
		border-radius: 50%;
	}
	

	.container{
		overflow: auto;
		width:auto;
		height:100%;
	}
</style>