var all_buttons = document.getElementsByTagName("button");

console.log(all_buttons[2].classList[1]);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

buttonColorChange = function (buttonThingy) {
  console.log(buttonThingy.value);
  if (buttonThingy.value === "red") {
    buttonsRed();
  } else if (buttonThingy.value === "green") {
    buttonsGreen();
  } else if (buttonThingy.value === "random") {
    buttonsRandom();
  } else if (buttonThingy.value === "reset") {
    buttonsReset();
  }
};

buttonsRed = () => {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
};

buttonsGreen = () => {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
};

buttonsReset = () => {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
};

buttonsRandom = () => {
  var choices = ["btn-success", "btn-warning", "btn-secondary", "btn-warning"];
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[Math.floor(Math.random() * 4)]);
  }
};
