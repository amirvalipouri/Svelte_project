<script>
	export let columns = [
		"Customer",
		"Phone",
		"Balance",
		"Order",
		"LastOrder",
		"Status",
		"Action",
	];
	

	export let human = [];
	export let maxCustomer;
	import Fa from "svelte-fa/src/fa.svelte";
	import { faTrash } from "@fortawesome/free-solid-svg-icons";
	import { faPen } from "@fortawesome/free-solid-svg-icons";
	import { faEye } from "@fortawesome/free-solid-svg-icons";
	import { faSort } from "@fortawesome/free-solid-svg-icons";

	export function sortlist(args) {
		human.sort((a, b) => (a.args < b.args ? 1 : -1));
		human=human;
	}




	

</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css"
	/>
</svelte:head>

<div class="top">
	<p class="paragraph-top">
		Display
		<input type="number" min="0" max={maxCustomer} style="width:50px;" /> Customers
	</p>
	<div class="search">
		<form>
			Search :
			<input
				type="text"
				placeholder="Search.."
				name="search"
				class="SearchInput"
			/>
		</form>
	</div>
</div>

<div class="div-table">
	<table id="myTable">
		<thead>
			<tr>
				{#each columns as th}
					<th>
						<div class="th-icon" on:click={() => sortlist(th)}>
							<Fa icon={faSort} size="1x" />
						</div>
						{th}
					</th>
				{/each}

				
			</tr>
		</thead>
		<tbody>
			{#each human as i}
				<tr>
					<td style="width:20%;">
						<div class="td-1">
							<div class="td-1-top">
								<input type="checkbox" class="inputCustomer" />
							</div>
							<div class="td-1-bottom">
								<p id="p-name">{i.name}</p>
								<p>{i.id}</p>
							</div>
						</div>
					</td>
					<td style="width: 9%; min-width: 100px;">{i.phone}</td>
					<td style="width: 9%; min-width: 60px;">{i.balance}</td>
					<td style="width: 7%; min-width: 50px;">{i.orders}</td>
					<td style="width: 11%; min-width: 120px;">{i.lastOrder}</td>
					<td style="width: 9%; min-width: 80px;">
						{#if i.status === "active" || i.status === "Active"}
							<p
								style="color:green; padding:5px; background-color:#90EE90;margin:auto; width:50%;border-radius:8px;min-width:50px;"
							>
								{i.status}
							</p>
						{:else}
							<p
								style="color:red;padding:5px; background-color: #FA8072;margin:auto; width:50%;border-radius:8px;min-width:60px;"
							>
								{i.status}
							</p>
						{/if}
					</td>
					<td style="width: 9%; min-width: 80px;">
						<div class="icon"><Fa icon={faEye} size="1x" /></div>
						<div class="icon"><Fa icon={faPen} size="1x" /></div>
						<div class="icon"><Fa icon={faTrash} size="1x" /></div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	* {
		padding: 0px;
		margin: 0px;
		box-sizing: border-box;
	}

	table {
		border-collapse: collapse;

		width: 90%;
		margin: auto;
		min-width: 100%;
		margin-bottom: 20px;
	}
	.div-table {
		overflow-x: auto;
		/* margin: 10px; */
		width: 100%;
	}
	thead {
		background-color: #f0ebebce;
		height: 50px;
	}
	td {
		text-align: center;
		height: 50px;
		border-bottom: 1px solid #ddd;
	}
	tr {
		margin-bottom: 10px;
		height: 85px;
	}
	tr:hover {
		background-color: #f5f5f5;
	}

	.inputCustomer {
		padding: 5px;
		float: left;
	}
	.paragraph-top {
		margin-left: 2%;
		font-size: 14px;
		font-weight: bold;
		margin-top: 15px;
		margin-bottom: 15px;
	}
	#p-name {
		margin-top: 20px;
	}
	.top {
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}
	.search {
		margin-top: 15px;
		margin-bottom: 15px;
		margin-right: 3%;
	}
	.SearchInput {
		width: 30%;
		min-width: 90px;
		height: 25px;
		padding: 5px;
	}
	.SearchInput:hover {
		border-color: rgb(73, 166, 228);
	}
	.td-1 {
		display: flex;
		justify-content: space-between;
		min-width: 150px;
		align-items: center;
	}
	.td-1-top {
		margin-left: 20px;
	}
	.td-1-bottom {
		margin: auto;
		text-align: center;
	}
	.icon {
		display: inline-block;
		margin-left: 5px;
		cursor: pointer;
	}

	.th-icon {
		display: inline-block;
		margin-right: 8px;
		cursor: pointer;
	}
</style>
