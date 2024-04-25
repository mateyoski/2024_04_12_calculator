let firstOperator = "";
let secondOperator = "";
let gottaReset = false;
let currOperator = null;

const currentScreenArea = document.getElementById("screen-current");
const prevScreenArea = document.getElementById("screen-prev");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const clearButton = document.getElementById("clearBtn");
const deleteButton = document.getElementById("deleteBtn");
const pointButton = document.getElementById("pointBtn");
const equalsButton = document.getElementById("equalsBtn");

deleteButton.addEventListener('click', removeOne);
pointButton.addEventListener('click', addPoint);
clearButton.addEventListener('click', clear);
equalsButton.addEventListener('click', evaluate)

numberButtons.forEach((button) =>
button.addEventListener('click', () => addNumber(button.textContent)))

operatorButtons.forEach((button) =>
button.addEventListener('click', () => chooseOperator(button.textContent)))

function addNumber (number) {
    if(currentScreenArea.textContent === "0" || gottaReset) {
        resetScreen();
    }
    currentScreenArea.textContent += number;
}

function clear() {
    currentScreenArea.textContent = "0";
    prevScreenArea.textContent = " ";
    firstOperator = "";
    secondOperator = "";
    currOperator = null;
}

function removeOne() {
    currentScreenArea.textContent = currentScreenArea.textContent.toString().slice(0,-1);
}

function resetScreen() {
    currentScreenArea.textContent = "";
    gottaReset = false;
}

function addPoint() {
    if(gottaReset) resetScreen();
    if(currentScreenArea.textContent === "")
        currentScreenArea.textContent = "0";
    if(currentScreenArea.textContent.includes(".")) return;
    currentScreenArea.textContent += ".";
}

function roundValue(value) {
    return Math.round(value * 1000) / 1000;
}

function evaluate() {
    if(currOperator === null || gottaReset) return;
    if(currOperator === "÷" && currentScreenArea.textContent === "0") {
        alert("No no no!")
        return
    }
    secondOperator = currOperator.textContent
    currentScreenArea.textContent = roundValue(operate(currOperator, firstOperator, secondOperator)
    )
    prevScreenArea.textContent = `${firstOperator} ${currOperator} ${secondOperator} =`
    currOperator = null
}

function chooseOperator(operator) {
    if(currOperator !== null) evaluate()
    firstOperator = currentScreenArea.textContent
    currOperator = operator
    prevScreenArea.textContent = `${firstOperator} ${currOperator}`
    gottaReset = true
}

function operate(operator, a, b){
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multipy(a, b);
        case "÷":
            if(b === 0) return null;
            else return divide(a, b);
        default:
            return null
    }
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;;
}

function multipy (a, b) {
    return a * b;
}

function divide (a, b) {
    if(b === "0"){
        return null
    }
    else return a / b;
}