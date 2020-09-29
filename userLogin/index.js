//CREATING VALID USER
let userOne= 'fabian@gmail.com';
let passOne= '123456';
//GETTING EMAIL ELEMENT
let email = document.getElementById('email');
console.log(email);
//GETTING PASSWORD ELEMENT
let password = document.getElementById('password');
console.log(password);
//GETTING CHECK ELEMENT
let check = document.getElementById('rememberMe');
console.log(check.checked);
//GETTING BUTTON VALUE
let button = document.getElementById('logIn');
console.log(button);

window.onload = userStoraged ();

function userStoraged () {
    if (!localStorage.getItem('E-mail')){
        console.error('E-mail there is not in the storage')
        return;
    }
    email.value = localStorage.getItem('E-mail');
    check.checked = true;
}

button.addEventListener('click', function()
{
    let emailVal =email.value;
    let passVal = password.value;
    if (emailVal==userOne && passVal==passOne ){
        alert('You are login');
        location.href = 'form.html';
    }
    else{
        alert('Your e-mail or password is wrong');
    }
    if (check.checked){
        localStorage.setItem('E-mail', emailVal );
    }
    else{
        localStorage.removeItem('E-mail');
    }    
})