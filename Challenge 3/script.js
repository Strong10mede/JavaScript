function rps(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberTochoice(randomBotchoice());
  console.log(humanChoice);
  console.log(botChoice);
  var result = decideWinner(humanChoice, botChoice);
  console.log(result);
  rpsfrontend(humanChoice, botChoice, finalmessage(result));
}

function randomBotchoice() {
  return Math.floor(Math.random() * 3);
}

function numberTochoice(number) {
  return ["rock", "page", "scissor"][number];
}

function decideWinner(yourChoice, botChoice) {
  var rpsDatabase = {
    rock: { rock: 0.5, page: 0, scissor: 1 },
    page: { rock: 1, page: 0.5, scissor: 0 },
    scissor: { rock: 0, page: 1, scissor: 0.5 },
  };
  return rpsDatabase[yourChoice][botChoice];
}

finalmessage = (score) => {
  if (score === 0) {
    return { message: "u lost", color: "red" };
  } else if (score === 0.5) {
    return { message: "drawn", color: "yellow" };
  } else if (score === 1) {
    return { message: "u win", color: "green" };
  }
};

function rpsfrontend(humanImageChoice, botImageChoice, finalmesssage) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    page: document.getElementById("page").src,
    scissor: document.getElementById("scissor").src,
  };
  //let's remove all images
  document.getElementById("rock").remove();
  document.getElementById("page").remove();
  document.getElementById("scissor").remove();

  var humanDiv = document.createElement("div");
  var messageDiv = document.createElement("div");
  var botDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imageDatabase[humanImageChoice] +
    "' width='20vw' height='20vh' />";
  messageDiv.innerHTML =
    "<h1 style='color:" +
    finalmesssage.color +
    "; max-width:20vw'  >" +
    finalmesssage.message +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" +
    imageDatabase[botImageChoice] +
    "' width='20vw' height='20vh' />";

  document.getElementById("flex-box-rps").appendChild(humanDiv);
  document.getElementById("flex-box-rps").appendChild(messageDiv);
  document.getElementById("flex-box-rps").appendChild(botDiv);

  document.getElementById("replay").innerHTML =
    "<break style='display:block;'>⬇ </break><a href='index.html' style='text-decoration:none; background-color: blue; font-size:1.5rem; border-radius:0.2rem; color:white; margin:1rem 1rem'>Replay</a> ";
}
