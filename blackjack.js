
let sum = 0;
let isBlackJack = false;
let isAlive = false;

let msg = "";
let messageEl = document.getElementById("message-el");
let sumel = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el"); 
let cardsArr = []
let player = {
    name: "Eesha",
    chips: 195
}

let playerel = document.getElementById("player-el");
playerel.textContent = player.name+ ":" + " " + "$" + player.chips

function getRandomCard() {
    let ran = Math.floor(Math.random()*13) + 1
    if (ran === 1) {
        return 1;
    }
    else if (ran > 10) {
        return 10;
    }else {
        return ran;
    }
    
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cardsArr = [firstCard, secondCard]
    renderGame();
}

function renderGame() {
    
    cardEl.textContent = "Cards: " 
    //cardEl.textContent = "Cards: " + cardsArr[0] + " " + cardsArr[1]
    //cardEl.textContent = "Cards: " + cardsArr
    for (let i = 0; i < cardsArr.length; i++)
    {
        cardEl.textContent += cardsArr[i] + " "
    }
    sumel.textContent = "Sum: " + sum
    if (sum <= 20) {
    //console.log("You've got more to go");
    msg = "You've got more to go";
    }
    else if(sum === 21) {
        //console.log("You've got Blackjack!!");
        isBlackJack = true;
        msg = "You've got Blackjack!!";
    }
    else {
        //console.log("You're out gurll!!");
        isAlive = false;
        msg = "You're out gurll!!";
    }
    messageEl.textContent = msg
    console.log(msg)
}


//CASH OUT
console.log(isAlive)
console.log(msg)

function newGame() {
    if (isAlive === true && isBlackJack === false) {
        let newCard = getRandomCard()
        sum = sum + newCard
        cardsArr.push(newCard)
        renderGame();
    }
    
}