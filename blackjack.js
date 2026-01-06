let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let isBlackJack = false;
let isAlive = true;

let msg = "";
let messageEl = document.getElementById("message-el");
let sumel = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el"); 
let cardsArr = [firstCard, secondCard]

function getRandomCard() {
    return 5
}

function startGame() {
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
    let newCard = getRandomCard()
    sum = sum + newCard
    cardsArr.push(newCard)
    renderGame();
}