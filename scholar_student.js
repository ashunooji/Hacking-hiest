async function register(e){
    e.preventDefault()
    const email  = document.querySelector('#signupEmail')
    const password  = document.querySelector('#signupPassword')
   try{
    const result= await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    await result.user.updateProfile({
        displayName:"User"
    })
    await result.user.sendEmailVerification()
    console.log(result)
    alert("you are registered")
    M.toast({html:`welcome ${result.user.email}`,classes:'rounded'})
   }
   catch(err){
    console.log(err)
    alert("try again")
    M.toast({html:err.message,classes:'rounded'})
   }
   email.value=""
   email.password=""   
   
}


async function signup(e){
    e.preventDefault()
    const email  = document.querySelector('#MAIL')
    const password  = document.querySelector('#PASSWORD')
   try{
    const result= await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    await result.user.updateProfile({
        displayName:"User"
    })
    await result.user.sendEmailVerification()
    console.log(result)
    alert("you are registered")
    M.toast({html:`welcome ${result.user.email}`,classes:'rounded'})
   }
   catch(err){
    console.log(err)
    alert("try again")
    M.toast({html:err.message,classes:'rounded'})
   }
   
}

async function login(e){
    e.preventDefault()
    const email  = document.querySelector('#loginEmail')
    const password  = document.querySelector('#loginPassword')
   try{
    const result= await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    console.log(result)
    alert("login success")
   }
   catch(err){
    console.log(err)
    alert("try again")
    }
    email.value=""
    email.password=""   
}