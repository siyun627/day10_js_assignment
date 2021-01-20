const rangeSlider = document.querySelector(".slider_range"),
  rangeValue = document.querySelector(".rangeValue"),
  userInput = document.querySelector(".submitValue"),
  submit = document.querySelector(".submit"),
  form = document.querySelector(".form"),
  span = document.querySelector(".span");

function rangeMax(event) {
  event.preventDefault();
  rangeValue.innerHTML = "Generate a number between 0 and " + rangeSlider.value;
}

function handleSubmit(event) {
  event.preventDefault();
  const userNumber = parseInt(userInput.value);
  const maxRange = parseInt(rangeSlider.value);
  if (userNumber >= maxRange) {
    window.alert("Please check your number.😅 It's not in the range");
  } else {
    compareResult();
  }
}

function compareResult() {
  const message = document.createElement("span");
  const userNumber = parseInt(userInput.value);
  const maxRange = parseInt(rangeSlider.value);
  const machineNumber = Math.floor(Math.random() * maxRange) + 1;
  span.innerText =
    "You chose: " + userNumber + ", the machine chose: " + machineNumber;
  if (userNumber === machineNumber) {
    form.appendChild(message);
    message.innerText = "😍You Won!!!!😍";
    message.classList.add("span");
  } else {
    form.appendChild(message);
    message.innerText = "You lose....😭";
    message.classList.add("span");
  }
  submit.addEventListener("click", compareResult);
}

function init() {
  rangeSlider.addEventListener("input", rangeMax);
  submit.addEventListener("click", handleSubmit);
}

init();
