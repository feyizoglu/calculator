//creating calculator class
class Calculator {
  constructor(lastText, currentText) {
    this.lastText = lastText;
    this.currentText = currentText;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  addNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  getDisplay(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentText.innerText = this.getDisplay(this.currentOperand);
    if (this.operation != null) {
      this.lastText.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.lastText.innerText = "";
    }
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }
}

//Selecting buttons from html file;
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const eqButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

//Selecting display part of calculator
const lastText = document.querySelector("#last");
const currentText = document.querySelector("#current");

//creating new calculator
const calculator = new Calculator(lastText, currentText);

//Adding events on buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

eqButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

clearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

let body = document.body;
body.addEventListener("keydown", (e) => {
  if ((e.key >= 0 && e.key <= 9) || e.key == ".") {
    calculator.addNumber(e.key);
    calculator.updateDisplay();
  } else if (e.key == "Backspace") {
    calculator.delete();
    calculator.updateDisplay();
  } else if (e.key == "Delete") {
    calculator.clear();
    calculator.updateDisplay();
  } else if (e.key == "*" || e.key == "+" || e.key == "-") {
    calculator.chooseOperation(e.key);
    calculator.updateDisplay();
  } else if (e.key == "/") {
    calculator.chooseOperation("÷");
    calculator.updateDisplay();
  } else if (e.key === "Enter") {
    calculator.compute();
    calculator.updateDisplay();
  }
});

// Farklı operatore ilk seçilen operatorden sonra basıldığında operator değiştirilecek
