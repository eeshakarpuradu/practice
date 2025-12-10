
let count = 0;

function increment() {
    count++;
    console.log(`Count is now: ${count}`);
    document.getElementById("count-el").textContent = count;
}

function save() {
    let countStr = count + " - ";
    let prevEnt = document.getElementById("save-el");
    prevEnt.textContent += countStr;
    count = 0;
    document.getElementById("count-el").textContent = 0;
}

function reset() {
    document.getElementById("save-el").textContent = " ";
}
/*let welcomeEl = document.getElementById("welcome-el");
let name = "Eesha";
let greeting = "Hi, my name is ";
let welcomeMsg = greeting + name + "!";
welcomeEl.innerText = welcomeMsg;
welcomeEl.innerText = welcomeMsg + " 👋";*/