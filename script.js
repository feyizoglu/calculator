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

function keyCodes(event) {
  if (event.keyCode > 95 && event.keyCode < 106) {
    calculator.addNumber(event.keyCode - 96);
    calculator.updateDisplay();
  }
}

// let body = document.body;

// let keyName = document.createElement("div");
// let keyCode = document.createElement("div");

// body.appendChild(keyName);
// body.appendChild(keyCode);

// body.style.fontFamily = "sans-serif";
// // body.style.height = "100%";
// body.style.display = "flex";
// body.style.flexWrap = "wrap";

// keyName.innerHTML = "<h1>Press any keyboard key</h1>";
// keyName.style.height = "100%";
// keyName.style.width = "100%";
// keyName.style.border = "solid #ccc1c0";
// keyName.style.boxShadow = "0 0 0 3px #9399a3";
// keyName.style.textAlign = "center";
// keyName.style.margin = "25% 25% 0 25%";

// keyCode.innerHTML = "";

// body.addEventListener("keydown", (e) => {
//   if (e.which == 32){
//     keyName.innerHTML = `<h1>You pressed <span>Space</span></h1>`;
//   }else {
//     keyName.innerHTML = `<h1>You pressed <span>${e.key}</span></h1>`;
//   }
//   let span1 = document.querySelector("span");
//   keyCode.innerHTML = `<h1> ${e.which}</h1>`;

// });
