<script>
    export let users=[];
    let search;
    export let advertise;
    export let all;
    export let wallet;
    export let direct;



    export function sortlist(args) {
		users.sort((a, b) =>(a.args < b.args ? 1 : -1));
		users=users;
	}

//     function myFunction() {
//     var input, filter, tab, td, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     tab = document.getElementById("myTable");
//     td = tab.getElementsByTagName("td");
//     for (i = 0; i < li.length; i++) {
//         a = td[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             td[i].style.display = "";
//         } else {
//             td[i].style.display = "none";
//         }
//         tab=tab;
//     }
// }
</script>


<div class="w-full">
    <div dir="rtl" class="m-2">
        <p class="inline-block">جستجو : </p>
        <input id='myInput' class="m-2 p-2 border border-gray-200" type="text"   placeholder="  جستجو كاربر...">
    </div>

    <div class="div-table mt-3">
        <table class="p-2" id="myTable">
            <tr class="p-4">
                <th class="mx-1">رديف</th>
                <th class="mx-1">نام و نام خانوادگي</th>
                <th class="mx-1">E-mail معرف</th>
                <th class="mx-1">E-mail</th>
                <th class="mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" on:click={()=>sortlist(advertise)} class="h-5 w-5 inline-block cursor-pointer " viewBox="0 0 20 20" fill="currentColor">
                     <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg> تعداد تبليغات
                </th>
                <th class="mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" on:click={()=>sortlist(direct)} class="h-5 w-5 inline-block cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg> تعداد دايركت
                </th>
                <th class="mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" on:click={()=>sortlist(all)} class="h-5 w-5 inline-block cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg> تعداد كل زير مجموعه
                </th>
                <th class="mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" on:click={()=>sortlist(wallet)} class="h-5 w-5 inline-block cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg> Wallet
                </th>
                <th class="mx-1">تاريخ ثبت نام</th>
                <th class="mx-1">مشاهده بيشتر</th>
            </tr>
            {#each users as user,i}
                <tr>
                    <td>{i+1}</td>
                    <td>{user.name}</td>
                    <td>{user.invite}</td>
                    <td>{user.email}</td>
                    <td>{user.advertise}</td>
                    <td>{user.direct}</td>
                    <td>{user.all}</td>
                    <td>{user.wallet}</td>
                    <td>{user.submit}</td>
                    <td>
                        <button class="border rounded text-center p-1 text-white bg-black text-xs"> مشاهده بيشتر</button>
                    </td>
                </tr>
            {/each}
        </table>
    </div>
</div>


<style>
    .div-table{
        overflow-x: auto;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        
    }
    th, td {
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #ddd;
    }

    tr:hover {background-color:#f5f5f5;}
</style>