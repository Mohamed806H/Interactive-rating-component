const rateOne = document.querySelector(".rate-one");
const rateTwo = document.querySelector(".rate-two");
const rateThree = document.querySelector(".rate-three");
const rateFour = document.querySelector(".rate-four");
const rateFive = document.querySelector(".rate-five");
const submitBtn = document.querySelector(".action");

function chooseRone() {
  rateOne.classList.toggle("change-state");
  document.querySelector(".rating").innerHTML = "You selected 1 out of 5";
}
function chooseRtwo() {
  rateTwo.classList.toggle("change-state");
  document.querySelector(".rating").innerHTML = "You selected 2 out of 5";
}
function chooseRthree() {
  rateThree.classList.toggle("change-state");
  document.querySelector(".rating").innerHTML = "You selected 3 out of 5";
}
function chooseRfour() {
  rateFour.classList.toggle("change-state");
  document.querySelector(".rating").innerHTML = "You selected 4 out of 5";
}
function chooseRfive() {
  rateFive.classList.toggle("change-state");
  document.querySelector(".rating").innerHTML = "You selected 5 out of 5";
}
function submitRate() {
  document.querySelector(".rating-card").style.display = "none";
  document.querySelector(".thanks-card").style.display = "flex";
}
