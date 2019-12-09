var nameOneInput = document.querySelector("#challenger-1-name-input");
var nameTwoInput = document.querySelector("#challenger-2-name-input");
var guessOneInput = document.querySelector("#challenger-1-guess-input");
var guessTwoInput = document.querySelector("#challenger-2-guess-input");
var submitBtn = document.querySelector("#submit-btn");
var clearFormBtn = document.querySelector("#clear-btn");
var nameOneErrorMsg = document.querySelector("#name-1-error");
var nameTwoErrorMsg = document.querySelector("#name-2-error");
var defaultStyling = document.querySelector("#latest-guess-wrapper");
var showGuessOne = document.querySelector("#challenger-1-guess");
var showGuessTwo = document.querySelector("#challenger-2-guess");
var showNameOne = document.querySelector("#challenger-1-name");
var showNameTwo = document.querySelector("#challenger-2-name");
var challengerOneHint = document.querySelector("#challenger-1-hint");
var challengerTwoHint = document.querySelector("#challenger-2-hint");
var min = 1;
var max = 100;

nameOneInput.addEventListener("keyup", enableSubmitBtn);
nameTwoInput.addEventListener("keyup", enableSubmitBtn);
guessOneInput.addEventListener("keyup", enableSubmitBtn);
guessTwoInput.addEventListener("keyup", enableSubmitBtn);
clearFormBtn.addEventListener("click", clearForm);
submitBtn.addEventListener("click", clickSubmitBtn);
window.addEventListener("load", pageLoad);

function enableSubmitBtn() {
  checkNameOneInput();
  checkNameTwoInput();
  enableClearFormBtn();
  if (nameOneInput.value !== "" && nameTwoInput.value !== "" && guessOneInput.value !== "" && guessTwoInput.value !== "") {
    submitBtn.disabled = false;
    submitBtn.classList.add("active-btn");
  } else {
    submitBtn.classList.remove("active-btn");
  }
};

function checkNameOneInput() {
  if (nameOneInput.value !== "") {
    nameOneErrorMsg.classList.add("hidden");
  } else {
    nameOneErrorMsg.classList.remove("hidden");
  }
};

function checkNameTwoInput() {
  if (nameTwoInput.value !== "") {
    nameTwoErrorMsg.classList.add("hidden");
  } else {
    nameTwoErrorMsg.classList.remove("hidden");
  }
};

function enableClearFormBtn() {
  if (nameOneInput.value !== "" || nameTwoInput.value !== "" || guessOneInput.value !== "" || guessTwoInput.value !== "") {
    clearFormBtn.disabled = false;
    clearFormBtn.classList.add("active-btn");
  } else {
    clearFormBtn.classList.remove("active-btn");
    submitBtn.classList.remove("active-btn");
  }
};

function clearForm() {
  var clearForm = document.querySelector("#guess-form");
  clearForm.reset();
  enableSubmitBtn();
  submitBtn.disabled = true;
};

function checkChallengerOneGuess() {
  var parsed = parseInt(guessOneInput.value);
  if (parsed < winningNumber) {
    challengerOneHint.insertAdjacentHTML("afterbegin", "<p>that's too low</p>");
  } else if (parsed > winningNumber) {
    challengerOneHint.insertAdjacentHTML("afterbegin", "<p>that's too high</p>");
  } else if (parsed === winningNumber) {
    challengerOneHint.insertAdjacentHTML("afterbegin", "<p>BOOM!</p>");
  }
};

function checkChallengerTwoGuess() {
  var parsed = parseInt(guessTwoInput.value);
  if (parsed < winningNumber) {
    challengerTwoHint.insertAdjacentHTML("afterbegin", "<p>that's too low</p>");
  } else if (parsed > winningNumber) {
    challengerTwoHint.insertAdjacentHTML("afterbegin", "<p>that's too high</p>");
  } else if (parsed === winningNumber) {
    challengerTwoHint.insertAdjacentHTML("afterbegin", "<p>BOOM!</p>");
  }
};

function generateWinningNumber(min, max) {
  winningNumber = parseInt(Math.random() * (max - min) + min);
};

function clearGuess() {
  guessOneInput.value = "";
  guessTwoInput.value = "";
};

function clickSubmitBtn() {
  showPlaceHolders();
  hideDefault();
  generateWinningNumber(min, max);
  checkChallengerOneGuess();
  checkChallengerTwoGuess();
  showNameAndGuess();
  clearGuess();
};

function showNameAndGuess() {
  showNameOne.insertAdjacentHTML("afterbegin", `<p>${nameOneInput.value}</p>`);
  showNameTwo.insertAdjacentHTML("afterbegin", `<p>${nameTwoInput.value}</p>`);
  showGuessOne.insertAdjacentHTML("afterbegin", `<p>${guessOneInput.value}</p>`);
  showGuessTwo.insertAdjacentHTML("afterbegin", `<p>${guessTwoInput.value}</p>`);
  clearFormBtn.classList.remove("active-btn");
  submitBtn.classList.remove("active-btn");
  submitBtn.disabled = true;
  clearFormBtn.disabled = true;
};

function hideDefault() {
  var nameOne = document.querySelector("#name-1-default");
  var nameTwo = document.querySelector("#name-2-default");
  var guessOne = document.querySelector("#guess-1-default");
  var guessTwo = document.querySelector("#guess-2-default");
  var hintOne = document.querySelector("#challenger-1-default-hint");
  var hintTwo = document.querySelector("#challenger-2-default-hint");
  nameOne.classList.add("hidden");
  nameTwo.classList.add("hidden");
  guessOne.classList.add("hidden");
  guessTwo.classList.add("hidden");
  hintOne.classList.add("hidden");
  hintTwo.classList.add("hidden");
};

function hidePlaceHolders() {
  challengerOneHint.classList.add("hidden");
  challengerTwoHint.classList.add("hidden");
  showNameOne.classList.add("hidden");
  showNameTwo.classList.add("hidden");
  showGuessOne.classList.add("hidden");
  showGuessTwo.classList.add("hidden");
};

function showPlaceHolders() {
  challengerOneHint.classList.remove("hidden");
  challengerTwoHint.classList.remove("hidden");
  showNameOne.classList.remove("hidden");
  showNameTwo.classList.remove("hidden");
  showGuessOne.classList.remove("hidden");
  showGuessTwo.classList.remove("hidden");
};

function pageLoad() {
  hidePlaceHolders();
};
