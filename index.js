const loginId = document.querySelector("#email");
const loginPasswrod = document.querySelector("#password");
const loginBtn = document.querySelector(".loginBtn");

let idValue;
let passwordValue;

const checkValue = (e) =>{
    if(e.target.id == "email"){
        idValue = e.target.value
    }else if(e.target.id == "password"){
        passwordValue = e.target.value;
    }
    if(idValue.includes("@") && passwordValue.length > 7){
        loginBtn.style.opacity = 1;
    }else{
        loginBtn.style.opacity = 0.3;
    }
}

loginId.addEventListener("input", checkValue);
loginPasswrod.addEventListener("input",checkValue)
