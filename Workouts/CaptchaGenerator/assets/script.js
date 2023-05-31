const ALL_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let bg = document.querySelector("#bg-color");
let font = document.querySelector("#font-color");
let captchaValue = document.querySelector(".captcha")

let randomString  = () => {
    let captcha = "";
    for(let i = 0; i<5; ++i){
        captcha += ALL_CHARACTERS.charAt(Math.floor(Math.random() * ALL_CHARACTERS.length));
    }
    return captcha;
}


let refresh = () => {
    captchaValue.value = randomString();
}

let initial = () => {
    captchaValue.value = randomString();
}

let verify = () => {
    let userInput = document.querySelector(".captcha-verify").value;
    if(userInput === captchaValue.value){
        alert("You are permitted");
        initial();
    }else{
        alert("Wrong Captcha Entered try with some different value");
    }
}


let changeBgColor = () => {
    captchaValue.style.backgroundColor = bg.value;
    console.log(bg.value);
}

let changeFontColor = () => {
    captchaValue.style.color = font.value;
    console.log(font.value);

}