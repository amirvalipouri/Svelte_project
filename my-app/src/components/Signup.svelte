<script>
    let userlog=1;
    // export let email;
    // export let pass;
    import Logo from "images/logo.png"



    import JwtDecode from  "jwt-decode"
    import cookie from "js-cookie"
    let isLoginComponent = true
    let userToCreate = {}
    let userToLogin = {}
    let signUpButtonDisabled = false
    let loginButtonDisabled = false
    let modalContent = ""
    $: {
        if(!userToLogin.username == null || !userToLogin.password )
        loginButtonDisabled = true
        else 
        loginButtonDisabled = false
    }
    const register = async()=> {
        signUpButtonDisabled = true
        if(userToCreate.password == userToCreate.retypePassword)
        {
            
           delete userToCreate.retypePassword
           console.log(userToCreate);
            fetch("http://localhost:3001/api/users/register" , {
            method: "POST",
            body: JSON.stringify(userToCreate)
        })
        .then(async(res) => {
            
            res.json().then(_=>  {
                signUpButtonDisabled = false
                modalContent = `<div style=" height: 100%;display: flex; justify-content: center ; align-items: center">  <h1 class='mt-5'> ${_.message} </h1></div>`
                isModalOpen.set(true)
            }).catch(e=> {
                signUpButtonDisabled = false
                modalContent = `<div style=" height: 100%;display: flex; justify-content: center ; align-items: center">  <h1 class='mt-5'> ${_.message} </h1></div>`
                isModalOpen.set(true)
            })
        })
        .catch( e => {
            modalContent = `<div style=" height: 100%;display: flex; justify-content: center ; align-items: center">  <h1 class='mt-5'> ${e.message} </h1></div>`
                isModalOpen.set(true)
        })}
        else 
        {
            modalContent = `<div style=" height: 100%;display: flex; justify-content: center ; align-items: center">  <h1 class='mt-5'> مقادیر ورودی را بررسی کنید</h1></div>`
                isModalOpen.set(true)
        }
    }
    const login = async()=> {
      console.log("loginnnnnn");
        loginButtonDisabled = true
        console.log(userToLogin);
        if(userToLogin.username && userToLogin.password)
            {
                fetch("https://gemicoins.com/api/gemicoin/login" ,  {
                    method: "POST",
                    headers: {"content-type" :"application/json"},
                    body: JSON.stringify(userToLogin)
                })
                .then(async(res) => {
                    loginButtonDisabled = false
                    res = await res.json()
                    console.log(res);
                    if(res.token)
                    {

                        const now = Date.now() + 24 * 60 * 60 * 1000
                        user.set(res.user)
                        token.set(res.token)
                        cookie.set("expiresIn", now)
                        cookie.set("token" , res.token.toString() ) 
                        document.location="/panel/dashboard"
                    }
                    else 
                    {
                        loginButtonDisabled = false
                        console.log(res);
                    }
                })
                .catch(e => {
                    loginButtonDisabled = false
                    console.log(e)
                })
            }
    }
    const forgotPass = async ()=> {}

    function myFunction(){
      console.log("hello");
    }
</script>


<div class="main w-full h-screen  relative flex justify-center  lg:flex lg:flex-wrap lg:justify-end">
    <div class="left inline-block lg:w-2/3 " >
    </div>
   
    <div class="right bg-white  inline-block w-full sm:w-full lg:w-1/3   px-2" >
    
        <div class="px-4 py-5 mt-2 space-y-6 w-full sm:p-6">
            <img src={Logo} alt="logo" width="120px" height="22px" class="mb-1">
            <h3 class="">Sign In</h3>
            <p class="text-gray-300 text-md mt-2">Don't have an account? Create your own account, it takes less than a minute</p>
        </div>
        <form action="#" method="POST" class="w-full min-w-full" on:submit|preventDefault={login}>
            <div class="sm:overflow-hidden w-full min-w-full">
              <div class="w-full min-w-full px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="">
                    <div class="col-span-3 sm:col-span-2 w-full min-w-full mt-2 mb-5">
                        <label for="company_website" class="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm w-full min-w-full" >
                          <input bind:value={userToCreate.fullname}  type="text" name="company_website" id="company_website" class="p-3 flex-1 block min-w-full w-full rounded  sm:text-sm border border-gray-300" placeholder="Enter your name">
                        </div>
                      </div>
                  <div class="col-span-3 sm:col-span-2 w-full min-w-full mt-2 mb-5">
                    <label for="company_website" class="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm w-full min-w-full" >
                      <input bind:value={userToCreate.username} type="email" name="company_website" id="company_website" class="p-3 flex-1 block min-w-full w-full rounded  sm:text-sm border border-gray-300" placeholder="Enter your email">
                    </div>
                  </div>
                  <div class="col-span-3 sm:col-span-2 mt-4 w-full  min-w-full" >
                    <div class="w-full flex justify-between min-w-full">
                        <label for="pass" class="w-full block text-sm font-medium text-gray-700">
                            Password
                          </label>
                          
                    </div>
                    <div class="mt-1 flex rounded-md shadow-sm w-full min-w-full">
                      <input bind:value={userToCreate.password}  type="password" name="company_website" id="pass" class="p-3 flex-1 block w-full rounded rounded-r-0  sm:text-sm border border-gray-300" placeholder="Enter your password">
                      <span class=" inline-flex items-center px-3 cursor-pointer  border border-gray-300 bg-gray-50 text-gray-500 text-sm" on:click={myFunction}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <input type="checkbox" class="inline-block">
                <span class="ml-2">I accept <strong>Terms and Conditions</strong></span>

                <button type="submit" class="w-full my-3 text-center text-white p-2" style="background-color: #3bafda;">Sign Up</button>
                <p class="text-center text-gray-400 text-md">Already have account? <span on:click={login} class="text-md cursor-pointer hover:text-gray-700" style="color: #3bafda;"><a href="/authentication">Sign In</a></span></p>
              </div>
              
            </div>
            
        </form>
    
 
    </div>

   
</div>
