// class Calculator {
//   constructor(lastText, currentText) {
//     this.lastText = lastText;
//     this.currentText = currentText;
//     this.clear();
//   }

//   clear() {
//     this.currentOperand = "";
//     this.previousOperand = "";
//     this.operation = undefined;
//   }

//   delete() {}

//   chooseOperation(operation) {}

//   chooseNumber(number) {
//     this.currentOperand = number;
//   }
//   updateDisplay() {
//     this.currentText.innerText = this.currentOperand;
//   }
//   compute() {}
// }

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const eqButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const lastText = document.querySelector(".last");
const currentText = document.querySelector(".current");

// const calculator = new Calculator(lastText, currentText);

// numberButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     calculator.chooseNumber(button.innerText);
//     calculator.updateDisplay();
//   });
// });

// numberButtons.forEach((button) => {
//   console.log(button.innerText);
// });
