var challengerOneName = document.querySelector("#first-challenger-name");
var challengerOneGuess = document.querySelector("#first-challenger-guess");
var challengerTwoName = document.querySelector("#second-challenger-name");
var challengerTwoGuess = document.querySelector("#second-challenger-guess");
var submitBtn = document.querySelector("#submit-guess-button");
var clearFormBtn = document.querySelector("#clear-form-button");
var nameOne = document.querySelector("#challenger-1-name");
var nameTwo = document.querySelector("#challenger-2-name");



challengerOneName.addEventListener("keyup", enableSubmitBtn);
challengerTwoName.addEventListener("keyup", enableSubmitBtn);
challengerOneGuess.addEventListener("keyup", enableSubmitBtn);
challengerTwoGuess.addEventListener("keyup", enableSubmitBtn);
clearFormBtn.addEventListener("click", clearForm);
submitBtn.addEventListener("click", showNameAndGuess);
window.addEventListener("load", pageLoad);

function enableSubmitBtn() {
  enableClearFormBtn();
  if (challengerOneName.value !== "" && challengerTwoName.value !== "" && challengerOneGuess.value !== "" && challengerTwoGuess.value !== "") {
    submitBtn.disabled = false;
    submitBtn.classList.add("active-submit-button");
  } else {
    submitBtn.disabled = true;
  }
}

function enableClearFormBtn() {
  if (challengerOneName.value !== "" || challengerTwoName.value !== "" || challengerOneGuess.value !== "" || challengerTwoGuess.value !== "") {
    clearFormBtn.disabled = false;
    clearFormBtn.classList.add("active-submit-button");
  } else {
    clearFormBtn.disabled = true;
  }
}

function clearForm() {
  var form = document.querySelector("form");
  form.reset();
}

function showNameAndGuess() {
  var challengerOne = document.querySelector("#style-name-1");
  var challengerTwo = document.querySelector("#style-name-2");
  hide();
  challengerOne.insertAdjacentHTML("afterbegin", `<p>${challengerOneName.value}</p>`);
  challengerTwo.insertAdjacentHTML("afterbegin", `<p>${challengerTwoName.value}</p>`);
  clearForm();
}

function hide() {
  nameOne.classList.add("hidden");
  nameTwo.classList.add("hidden");
}

function pageLoad() {
  var guessContainer = document.querySelector("#guess-container");
  var challengersGuess = document.querySelectorAll(".challenger-guess");
  guessContainer.classList.add("hidden");
  challengersGuess.classList.add("hidden");
}
