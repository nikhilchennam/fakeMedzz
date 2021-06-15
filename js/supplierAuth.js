const signupForm = document.querySelector('#sign-up-form');
signupForm.addEventListener('submit',(e) => {
    e.preventDefault();
    
    //get user info 
    const email = signupForm['signup-email'].value; 
    const password = signupForm['signup-password'].value;
    
    //sign up the user
    auth.createUserWithEmailAndPassword(email,password)
    .then(cred =>{
        console.log(cred.user); 
        window.alert("Account Created Sucessfully!!");
        const modal = document.querySelector('#sign-up'); 
        window.location.href="supplierReg.html";

    }) 
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Email id Already Exist"); 
        signupForm.reset();
    
    })
});


const signinForm = document.querySelector('#signin-form');
signinForm.addEventListener('submit',(e) => {
    e.preventDefault();

    //get user info 
    const email = signinForm['signin-email'].value;
    const password = signinForm['signin-password'].value;

    //sign up the user 
    auth.signInWithEmailAndPassword(email,password)
    .then(cred =>{
        console.log(cred.user); 
        window.alert("Logged In successfully!!");
        const modal = document.querySelector('#sign-in');  
        window.location.href="qrcodeupload.html";
    })
    .catch((error) => {
        var errorCode = error.code; 
        var errorMessage = error.message; 
        window.alert("Invalid Email id");
        signinForm.reset();
    })
});