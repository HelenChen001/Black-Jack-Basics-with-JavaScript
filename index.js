let player = {
    name: "Per",
    chips: 100,
}

let cardArray = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;


function startGame(){
    isAlive = true;
    hasBlackjack = false;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardArray = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function getRandomCard(){

    let ranNum = Math.floor(Math.random() * 13) + 1;
    if(ranNum === 1){
        return 11;
    }
    else if(ranNum >= 11 && ranNum <=13){
        return 10;
    }
    else{
        return ranNum;
    }
}

function renderGame(){

    cardsEl.textContent = "Cards: ";

    for(let i = 0; i < cardArray.length; i++){
        cardsEl.textContent += cardArray[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21){
        message = "You've got Blackjack!";
        hasBlackjack = true;
    }
    else{
        message = "you are out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){

    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard();
        sum += card;
        cardArray.push(card);
        renderGame();
    }
}

/* recap
1. Arrays
2. objects
3. booleans
4. if else statements
5. comparison operators
6. logical operators
7. for loops
8. the Math object
9. return statements
*/