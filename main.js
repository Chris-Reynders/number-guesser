var nameOneInput = document.querySelector("#challenger-1-name-input");
var nameTwoInput = document.querySelector("#challenger-2-name-input");
var guessOneInput = document.querySelector("#challenger-1-guess-input");
var guessTwoInput = document.querySelector("#challenger-2-guess-input");
var submitBtn = document.querySelector("#submit-btn");
var clearFormBtn = document.querySelector("#clear-btn");
var nameOneErrorMsg = document.querySelector("#name-1-error");
var nameTwoErrorMsg = document.querySelector("#name-2-error");
var defaultStyling = document.querySelector("#latest-guess-container");

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
    submitBtn.classList.add("active-btn");
  } else {
    submitBtn.classList.remove("active-btn");
  }
}

function errorMsgEnterName() {
  nameOneErrorMsg.classList.remove("hidden");
  nameTwoErrorMsg.classList.remove("hidden");
}

function enableClearFormBtn() {
  if (nameOneInput.value !== "" || nameTwoInput.value !== "" || guessOneInput.value !== "" || guessTwoInput.value !== "") {
    clearFormBtn.disabled = false;
    clearFormBtn.classList.add("active-btn");
  } else {
    clearFormBtn.classList.remove("active-btn");
  }
}

function clearForm() {
  var clearForm = document.querySelector("#guess-form");
  clearForm.reset();
}

function clearGuess() {
  guessOneInput.value = "";
  guessTwoInput.value = "";
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
  clearGuess();
  defaultStyling.classList.remove("latest-guess-container-styling");
  clearFormBtn.classList.remove("active-btn");
  submitBtn.classList.remove("active-btn");
  submitBtn.disabled = true;
  clearFormBtn.disabled = true;
}

function hide() {
  var nameOne = document.querySelector("#challenger-1-name");
  var nameTwo = document.querySelector("#challenger-2-name");
  var guessOne = document.querySelector("#challenger-1-guess");
  var guessTwo = document.querySelector("#challenger-2-guess");
  nameOne.classList.add("hidden");
  nameTwo.classList.add("hidden");
  guessOne.classList.add("hidden");
  guessTwo.classList.add("hidden");
}

function pageLoad() {
  defaultStyling.classList.add("latest-guess-container-styling");
  nameOneErrorMsg.classList.add("hidden");
  nameTwoErrorMsg.classList.add("hidden");
}
