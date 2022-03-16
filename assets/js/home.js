var signInButton = document.getElementById('sign-in-button');
var signUpButton = document.getElementById('sign-up-button');

signInButton.onclick = ()=>{
    window.location.href = '/users/signin';
}

signUpButton.onclick = ()=>{
    window.location.href = '/users/signup';
}