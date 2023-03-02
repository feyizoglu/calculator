const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const eqButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const lastText = document.querySelector(".last");
const currentText = document.querySelector(".current");

class Calculator {
  constructor(lastText, currentText) {
    this.lastText = lastText;
    this.currentText = currentText;
  }

  clear() {
    this.c;
  }

  delete() {}

  chooseOperation(operation) {}

  chooseNumber(number) {}
  updateDisplay() {}
  compute() {}
}
