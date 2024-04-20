let operandOne = ''
let operandTwo = ''
let currOperation = null
let resetScreen = false

const currentScreenArea = document.getElementById('screen-current');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const prevOperationScreen = document.getElementById('screen-prev');
const currentOperationScreen = document.getElementById('screen-current');
const pointButton = document.getElementById('pointBtn');
const deleteButton = document.getElementById('deleteBtn');
const clearButton = document.getElementById('clearBtn');
const equalsButton = document.getElementById('equalsBtn');

window.addEventListener('keydown', handleKeyboardInput)

numberButtons.forEach((button) => 
button.addEventListener('click', () => appendNumber(button.textContent)))

operatorButtons.forEach((button) => 
button.addEventListener('click', () => chooseOperation(button.textContent)))

function appendNumber(number) {
    if(currentScreenArea.textContent === '0'){
    currentScreenArea.textContent = '';}
    currentScreenArea.textContent += number;
}

function handleKeyboardInput(ev) {
    if(ev.key >= 0 && ev.key <= 9) appendNumber(ev.key)
}

function chooseOperation(operator) {
    if(currOperation !== null) evaluate()
    operandOne = currentOperationScreen.textContent;
    currOperation = operator;
    prevOperationScreen.textContent = '${operandOne} ${operandTwo}'
    resetScreen = true;
}

function clear() {
    currentOperationScreen.textContent='0';
    prevOperationScreen.textContent = ' ';

}

function roundNumber(value) {
    return Math.round(value*1000) / 1000;
}

function evaluate() {
    if (currOperation === '÷' && currentOperationScreen.textContent === '0') {
        alert("Dividing by 0 is forbidden!");
        return
    }
    operandTwo = currentOperationScreen.textContent;
    currentOperationScreen.textContent = roundNumber(
        operate(currOperation, operandOne, operandTwo)
    )
    prevOperationScreen.textContent = '${operandOne} ${currOperation} ${operandTwo} =';
    currOperation = null;
}

function add(a,b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
  }

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '÷':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}