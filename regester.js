var Namesinup = document.getElementById('name');
var Emailsinup = document.getElementById('email');
var Pawwordsinup = document.getElementById('password');
var buttonsinup = document.getElementById('button');
var suc = document.getElementsByClassName("one")[0];  
var div = document.getElementsByClassName("p1")[0];

var singlist = [];
if (localStorage.getItem('users') != null) {
    singlist = JSON.parse(localStorage.getItem('users'));
}

buttonsinup.addEventListener('click', data);

function data() {
    suc.innerHTML = '';

    if (validted() && valid() && Vname()) {
        // Check if email already exists
        if (singlist.some(user => user.email === Emailsinup.value)) {
            suc.innerHTML += `<div style="color: green;">Scuess</div>`;
            return;
        }

        var sing = {
            name: Namesinup.value,
            email: Emailsinup.value,
            password: Pawwordsinup.value
        };
        singlist.push(sing);
        localStorage.setItem('users', JSON.stringify(singlist));
        
    }
}

function validted() {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(Emailsinup.value)) {  
        return true;
    } else {
        suc.innerHTML += `<div style="color: red;">تنسيق البريد الإلكتروني غير صالح!</div>`;
        return false;
    }
}

function valid() {
    var passwordPattern = /^[a-zA-Z0-9_]+$/;
    if (passwordPattern.test(Pawwordsinup.value)) {  
        return true;
    } else {
        suc.innerHTML += `<div style="color: red;">تنسيق كلمة المرور غير صالح! يُسمح فقط بالحروف والأرقام والشرطات السفلية.</div>`;
        return false;
    }
}

function Vname() {
    var namePattern = /^[a-zA-Z]+$/;
    if (namePattern.test(Namesinup.value)) {  
        return true;
    } else {
        suc.innerHTML += `<div style="color: red;">تنسيق الاسم غير صالح! يُسمح فقط بالحروف.</div>`;
        return false;
    }
}

function cli() {
    div.classList.toggle("d-none");
    div.classList.toggle("d-block");
}
