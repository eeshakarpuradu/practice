/*let name = "Eesha";
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

let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out
function totalTime() {
    return player1Time + player2Time
}

let totalt = totalTime()
console.log(totalt)*/

//let ran = Math.random() * 6
//console.log(ran)

/*
let person = {
    name: "Eesha",
    age: 20,
    country: "India"
}

function logdate(){
    let data = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(data)
}

logdate();
*/

let largecount = ["Goa", "India", "USA", "Indonasia", "Central park"]

console.log(largecount.pop());
console.log(largecount);
console.log(largecount.push("Paksitan"));
console.log(largecount);
console.log(largecount.shift());
console.log(largecount);
console.log(largecount.unshift("China"));
console.log(largecount);
