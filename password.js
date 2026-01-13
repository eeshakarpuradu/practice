generatEl = document.getElementById("generate");
passel = document.getElementById("password");

password = ""
chars = "ABCEDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()<>?/,.;:|"
n = chars.length
console.log(n)


function genpass(){
    
    for(let i = 0; i <= 15; i++){
        let ran = Math.floor(Math.random() * n);
        password += chars[ran]
        console.log(chars[ran])
    }
    console.log(password)
    generatEl.textContent = password;
    password = ""
}