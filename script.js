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

  delete() {}

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
  updateDisplay() {
    this.currentText.innerText = this.currentOperand;
    this.lastText.innerText = this.previousOperand;
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
  }
}

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const eqButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const lastText = document.querySelector("#last");
const currentText = document.querySelector("#current");
const calculator = new Calculator(lastText, currentText);

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

operationButtons.forEach((button) => {
  console.log(button.innerText);
});

eqButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});
