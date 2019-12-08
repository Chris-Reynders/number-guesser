var challengerOneName = document.querySelector("#first-challenger-name");
var challengerOneGuess = document.querySelector("#first-challenger-guess");
var challengerTwoName = document.querySelector("#second-challenger-name");
var challengerTwoGuess = document.querySelector("#second-challenger-guess");
var submitBtn = document.querySelector("#submit-guess-button");
var clearFormBtn = document.querySelector("#clear-form-button");

challengerOneName.addEventListener("keyup", enableSubmitBtn);
challengerTwoName.addEventListener("keyup", enableSubmitBtn);
challengerOneGuess.addEventListener("keyup", enableSubmitBtn);
challengerTwoGuess.addEventListener("keyup", enableSubmitBtn);

function enableSubmitBtn() {
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
