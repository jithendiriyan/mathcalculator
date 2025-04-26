let display = document.getElementById("display");
let currentInput = "";
let memory = 0;

function appendNumber(num) {
  if (display.textContent === "0" && num !== ".") {
    display.textContent = num;
  } else {
    display.textContent += num;
  }
  currentInput = display.textContent;
}

function chooseOperation(op) {
  if (op === "mc") {
    memory = 0; // Memory Clear
  } else if (op === "del") {
    display.textContent = display.textContent.slice(0, -1) || "0";
  } else {
    display.textContent += " " + op + " ";
  }
}

function clearDisplay() {
  display.textContent = "0";
  currentInput = "";
}

function calculate() {
  try {
    display.textContent = eval(display.textContent.replace("x", "*"));
  } catch (error) {
    display.textContent = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || key === ".") {
    appendNumber(key);
  } else if (["+", "-", "*", "/", "%"].includes(key)) {
    chooseOperation(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    chooseOperation("del");
  } else if (key === "Escape") {
    clearDisplay();
  }
});