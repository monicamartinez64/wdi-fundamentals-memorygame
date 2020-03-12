console.log("Up and running!")
let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];

let cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    }
    if (cardsInPlay[0] !== cardsInPlay[1]) {
        console.log("Sorry, try again.")
    }
};

function flipCard(){
    flipCard(0);
    flipCard(2);
    
    let cardId = this.getAttribute('data-id');
    let cardOne = cards[0];
    cardsInPlay.push('cardOne');
    console.log("User flipped " + cards[cardId].rank);

    let cardTwo = cards[2];
    cardsInPlay.push('cardTwo'); 
    console.log("User flipped " + cards[cardId].rank);
    
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    console.log("User flipped" + cards[cardId].rank);
    if (cardsInPlay.length == 2) {
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    checkForMatch();
    };
};

console.log(cardsInPlay);

function createBoard() {
    const cardTable = document.getElementById('game-board');
    for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener('click', flipCard);
      // cardTable.appendChild(cardElement);
  
    }
  };

createBoard();