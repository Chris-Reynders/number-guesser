var nameOneInput = document.querySelector("#challenger-1-name-input");
var nameTwoInput = document.querySelector("#challenger-2-name-input");
var guessOneInput = document.querySelector("#challenger-1-guess-input");
var guessTwoInput = document.querySelector("#challenger-2-guess-input");
var submitBtn = document.querySelector("#submit-btn");
var clearFormBtn = document.querySelector("#clear-btn");

nameOneInput.addEventListener("keyup", enableSubmitBtn);
nameTwoInput.addEventListener("keyup", enableSubmitBtn);
guessOneInput.addEventListener("keyup", enableSubmitBtn);
guessTwoInput.addEventListener("keyup", enableSubmitBtn);
clearFormBtn.addEventListener("click", clearForm);
submitBtn.addEventListener("click", showNameAndGuess);
window.addEventListener("load", pageLoad);

function enableSubmitBtn() {
  enableClearFormBtn();
  if (nameOneInput.value !== "" && nameTwoInput.value !== "" && guessOneInput.value !== "" && guessTwoInput.value !== "") {
    submitBtn.disabled = false;
    submitBtn.classList.add("active-submit-btn");
  } else {
    submitBtn.disabled = true;
  }
}

function enableClearFormBtn() {
  if (nameOneInput.value !== "" || nameTwoInput.value !== "" || guessOneInput.value !== "" || guessTwoInput.value !== "") {
    clearFormBtn.disabled = false;
    clearFormBtn.classList.add("active-submit-btn");
  } else {
    clearFormBtn.disabled = true;
  }
}

function clearForm() {
  var guessForm = document.querySelector("form");
  guessForm.reset();
}

function showNameAndGuess() {
  var showNameOne = document.querySelector("#name-1-display");
  var showNameTwo = document.querySelector("#name-2-display");
  var showGuessOne = document.querySelector("#guess-1-display");
  var showGuessTwo = document.querySelector("#guess-2-display");
  showNameOne.insertAdjacentHTML("afterbegin", `<p>${nameOneInput.value}</p>`);
  showNameTwo.insertAdjacentHTML("afterbegin", `<p>${nameTwoInput.value}</p>`);
  showGuessOne.insertAdjacentHTML("afterbegin", `<p>${guessOneInput.value}</p>`);
  showGuessTwo.insertAdjacentHTML("afterbegin", `<p>${guessTwoInput.value}</p>`);
  hide();
  clearForm();
}

function hide() {
  var nameOne = document.querySelector("#challenger-1-name");
  var nameTwo = document.querySelector("#challenger-2-name");
  var guessOne = document.querySelector("#challenger-1-guess");
  var guessTwo = document.querySelector("#challenger-2-guess");
  var guessContainer = document.querySelector(".guess-container");
  nameOne.classList.add("hidden");
  nameTwo.classList.add("hidden");
  guessOne.classList.add("hidden");
  guessTwo.classList.add("hidden");
  guessContainer.classList.add("guess-container");
}

function pageLoad() {
  var emptyGuessContainer = document.querySelector("#empty-guess-container");
  emptyGuessContainer.classList.add("hidden");
}
