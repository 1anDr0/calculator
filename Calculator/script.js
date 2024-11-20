const clear = document.getElementById("C");
const divide = document.getElementById("divide");
const multi = document.getElementById("multiplication");
const del = document.getElementById("delete");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const minus = document.getElementById("minus");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const plus = document.getElementById("plus");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const equell = document.getElementById("equell");
const procent = document.getElementById("procent");
const zero = document.getElementById("zero");
const coma = document.getElementById("coma");

const display = document.getElementById("display");

let currentInput = "";
let previousInput = "";
let currentOperation = null;

function updateDisplay(value) {
  display.value = value;
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function setOperation(operation) {
  if (currentInput === "") return; // Om det inte finns något att operera med, gör inget.
  if (previousInput !== "") {
    calculate(); // Utför beräkning om det finns en tidigare input
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
}

// Beräkna resultat
function calculate() {
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);

  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "X":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return; // Om ingen operation har valts
  }

  currentInput = result.toString();
  currentOperation = null;
  previousInput = "";
  updateDisplay(currentInput);
}

// Rensa display
function clearDisplay() {
  currentInput = "";
  previousInput = "";
  currentOperation = null;
  updateDisplay("0");
}

// Ta bort sista tecknet
function deleteLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput || "0");
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay(currentInput);
  }
}

// Lägg till event listeners för knapparna
one.addEventListener("click", () => appendNumber("1"));
two.addEventListener("click", () => appendNumber("2"));
three.addEventListener("click", () => appendNumber("3"));
four.addEventListener("click", () => appendNumber("4"));
five.addEventListener("click", () => appendNumber("5"));
six.addEventListener("click", () => appendNumber("6"));
seven.addEventListener("click", () => appendNumber("7"));
eight.addEventListener("click", () => appendNumber("8"));
nine.addEventListener("click", () => appendNumber("9"));
zero.addEventListener("click", () => appendNumber("0"));

plus.addEventListener("click", () => setOperation("+"));
minus.addEventListener("click", () => setOperation("-"));
multi.addEventListener("click", () => setOperation("X"));
divide.addEventListener("click", () => setOperation("/"));

equell.addEventListener("click", calculate);
clear.addEventListener("click", clearDisplay);
del.addEventListener("click", deleteLastCharacter);
coma.addEventListener("click", appendDecimal);

updateDisplay("0");
