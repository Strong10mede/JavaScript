let blackjackGame = {
  you: {
    scoreSpan: "#your-blackjack-result",
    div: "#your-Box",
    score: 0,
  },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-Box",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
    A: [1, 11],
  },
  win: 0,
  lose: 0,
  draw: 0,
  isState: false,
  isTurnOver: false,
};

const YOU = blackjackGame.you;
const DEALER = blackjackGame.dealer;
const CARDS = blackjackGame.cards;
const HITSOUND = new Audio("./sounds/swish.m4a");
const WINSOUND = new Audio("./sounds/cash.mp3");
const LOSESOUND = new Audio("./sounds/aww.mp3");

document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit);
document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackjackDeal);
document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", dealerLogic);
//es6 notation doesn't work with eventlistener
function blackjackHit() {
  if (blackjackGame.isState === false) {
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    console.log(YOU.score);
    showScore(YOU);
  }
}

function randomCard() {
  var index = Math.floor(Math.random() * 13);
  return CARDS[index];
}

function showCard(card, activePlayer) {
  if (activePlayer.score < 21) {
    let cardImage = document.createElement("img");
    //${} is string template
    cardImage.src = `./images/${card}.png`;
    console.log(card);
    console.log(cardImage);
    document.querySelector(activePlayer.div).appendChild(cardImage);
    HITSOUND.play();
  }
}

function blackjackDeal() {
  // let winner = computeWinner();
  // showResult(winner);
  if (blackjackGame.isTurnOver === true) {
    let yourImage = document.querySelector("#your-Box").querySelectorAll("img");
    let dealerImage = document
      .querySelector("#dealer-Box")
      .querySelectorAll("img");
    console.log(yourImage);
    yourImage.forEach((element) => {
      element.remove();
    });
    dealerImage.forEach((element) => {
      element.remove();
    });

    YOU.score = 0;
    DEALER.score = 0;

    document.querySelector(YOU.scoreSpan).textContent = 0;
    document.querySelector(YOU.scoreSpan).style.color = "#fff";
    document.querySelector(DEALER.scoreSpan).textContent = 0;
    document.querySelector(DEALER.scoreSpan).style.color = "#fff";
    document.querySelector("#blackjack-result").textContent = "Let's Play! ";
    document.querySelector("#blackjack-result").style.color = "black";
    blackjackGame.isState = false;
    blackjackGame.isTurnOver = false;
  }
}

//use object[key] instead of object.key where key is set dynamically or key is a number
function updateScore(card, activePlayer) {
  // If adding 11 keeps me below 21, add 11. Otherwise, add 1.
  if (card === "A") {
    if (activePlayer.score + blackjackGame.cardsMap[card][1] <= 21) {
      activePlayer.score += blackjackGame.cardsMap[card][1];
    } else {
      activePlayer.score += blackjackGame.cardsMap[card][0];
    }
  } else {
    activePlayer.score += blackjackGame.cardsMap[card];
  }
}

function showScore(activePlayer) {
  if (activePlayer.score > 21) {
    document.querySelector(activePlayer.scoreSpan).textContent = "BURST";
    document.querySelector(activePlayer.scoreSpan).style.color = "red";
  } else {
    document.querySelector(activePlayer.scoreSpan).innerHTML =
      activePlayer.score;
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function dealerLogic() {
  blackjackGame.isState = true;
  while (DEALER.score < 16) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    console.log(blackjackGame.isState);
    await sleep(1000);
  }

  let winner = computeWinner();
  showResult(winner);
  blackjackGame.isTurnOver = true;
}

//compute winner and return who is winner
// updates the win, lose and drawn
function computeWinner() {
  let winner;
  if (YOU.score <= 21) {
    //condition higher score than dealer or when dealer busts but you're under or equal 21
    if (YOU.score > DEALER.score || DEALER.score > 21) {
      winner = YOU;
      blackjackGame.win++;
    } else if (YOU.score === DEALER.score) {
      blackjackGame.draw++;
    } else if (YOU.score < DEALER.score && DEALER.score <= 21) {
      winner = DEALER;
      blackjackGame.lose++;
    }
  } else if (YOU.score > 21 && DEALER.score <= 21) {
    winner = DEALER;
    blackjackGame.lose++;
  } else if (YOU.score > 21 && DEALER.score > 21) {
    blackjackGame.draw++;
  }
  return winner;
}

function showResult(winner) {
  let message, messageColor;

  if (winner === YOU) {
    console.log(blackjackGame.win);
    document.querySelector("#wins").textContent = blackjackGame.win;
    message = "You Won";
    messageColor = "green";
    WINSOUND.play();
  } else if (winner === DEALER) {
    console.log(blackjackGame.lose);
    document.querySelector("#losses").textContent = blackjackGame.lose;
    message = "Dealer Won";
    messageColor = "red";
    LOSESOUND.play();
  } else {
    console.log(blackjackGame.draw);
    document.querySelector("#draws").textContent = blackjackGame.draw;
    message = "drawn";
    messageColor = "white";
  }
  document.querySelector("#blackjack-result").textContent = message;
  document.querySelector("#blackjack-result").style.color = messageColor;
}
