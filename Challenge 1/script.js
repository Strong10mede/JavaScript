//challenge 1 : your age in days
function ageIndays() {
  var year = prompt("What is your birth year?");
  var days = (2022 - year) * 365;
  var h1 = document.createElement("h1");
  var text = document.createTextNode("You are " + days + " old.");
  h1.setAttribute("id", "ageIndays");
  h1.appendChild(text);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageIndays").remove();
}
