<script>
	import Sidebar from "../components/Sidebar.svelte"
    import SidebarAdmin from "../components/SidebarAdmin.svelte"
    import Profile from '../components/Profile.svelte'
    import Dashboard from '../components/Dashboard.svelte'
	import Payment from '../components/Payment.svelte'
	import Nav from "../components/Nav.svelte"
	import Login from '../components/Login.svelte'
	import User from '../components/User.svelte'
	import Chart2 from '../components/Chart2.svelte'
	let u = [{name:"ali",invite:"aa@yahoo.com",email:"ss@yahoo.com",advertise:5,direct:"6",all:"8",wallet:"56$",submit:"18nov ,2012"},
	{name:"amir",invite:"ab@yahoo.com",email:"sl@yahoo.com",advertise:2,direct:"64",all:"8",wallet:"555$",submit:"18nov ,2012"},
	{name:"mahdi",invite:"ac@yahoo.com",email:"sh@yahoo.com",advertise:3,direct:"55",all:"8",wallet:"55556$",submit:"18nov ,2012"},
	{name:"foad",invite:"ad@yahoo.com",email:"suahoo.com",advertise:59,direct:"88",all:"8",wallet:"5988$",submit:"18nov ,2012"}]
	let data = {
            labels: ['1', ' 2', '3', '4', '5', '6', '7', '8'],
            fill: true,
            datasets: [{
                label: 'Line chart area',
                backgroundColor: '#1E90FF',
                borderCapStyle: 'butt',
                borderColor: '#0000FF',
                fill: true,
                lineTension: 0.4,
                borderDashOffset:1,
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 15,
                pointRadius: 1,
                pointHitRadius: 15,
                data: [5, 9, 7, 8, 5, 3, 5, 4,0],

            }]
    }
	let name = "mychart";
</script>


<!-- <User users={u}></User> -->
<!-- <Payment></Payment> -->
<!-- <Chart2 data={data} name={name}></Chart2> -->
<!-- <Dashboard></Dashboard> -->
<!-- <Profile></Profile> -->
<SidebarAdmin></SidebarAdmin>