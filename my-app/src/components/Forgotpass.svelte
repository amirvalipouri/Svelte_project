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
    
        <div class="px-4 py-5 mt-4 space-y-6 w-full sm:p-6">
            <img src={Logo} alt="logo" width="120px" height="22px" class="mb-1">
        </div>
        <div class="px-4 py-5 mt-4 space-y-6 w-full sm:p-6">
            <h1>Recover Password</h1>
            <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
        </div>
        <form action="#" method="POST" class="w-full min-w-full">
            <div class="sm:overflow-hidden w-full min-w-full">
              <div class="w-full min-w-full px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="">
                  <div class="col-span-3 sm:col-span-2 w-full min-w-full mt-2 mb-5">
                    <label for="company_website" class="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm w-full min-w-full" >
                      <input type="email" name="company_website" id="company_website" class="p-3 flex-1 block min-w-full w-full rounded  sm:text-sm border border-gray-300" placeholder="Enter your email">
                    </div>
                  </div>
                </div>
                <button type="button" class="w-full mt-3 mb-5 text-center text-white p-2" style="background-color: #3bafda;">Reset password</button>
                <p class="absulote bottom-0 text-center text-gray-400 text-md">Back to <span on:click={login} class="text-md cursor-pointer hover:text-gray-700" style="color: #3bafda;"><a href="/authentication"> Log in</a></span></p>
              </div>
              
            </div>
            
        </form>
    
    </div>

   
</div>
