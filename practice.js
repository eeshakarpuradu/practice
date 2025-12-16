let name = "Eesha";
let greeting = "Hi there";

let greetingToUser = greeting + ", " + name + "!";


function greetme() {
    console.log(greetingToUser);
}

greetme();

let firstName = "Eesha";
let latName = "K";

let fullNmae = latName + " " + firstName;
console.log(fullNmae);


let points = 3;

function addPoints() {
    points = points + 3;
}

function removePoints() {
    points = points - 1;
}

addPoints();
addPoints();
addPoints();
removePoints();
removePoints();

console.log(points);

let age = 100;

if(age < 100) {
    console.log("You can't get the card");
}
else if(age === 100){
    console.log("card!!");
}
else {
    console.log("not eligible")
}

let isDiscountCode = true

function processDiscount() {
    if(isDiscountCode)
    {
        console.log("You've got discount");
        isDiscountCode = false
    }
    else {
        console.log("You've got no discount!");
    }
}

processDiscount()
processDiscount()