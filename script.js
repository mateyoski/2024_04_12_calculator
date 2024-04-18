const currentScreenArea = document.getElementById('screen-current');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const prevOperationScreen = document.getElementById('screen-prev');
const currentOperationScreen = document.getElementById('screen-current');

window.addEventListener('keydown', handleKeyboardInput)

numberButtons.forEach((button) => 
button.addEventListener('click', () => appendNumber(button.textContent)))

function appendNumber(number) {
    if(currentScreenArea.textContent === '0'){
    currentScreenArea.textContent = '';}
    currentScreenArea.textContent += number;
}

function handleKeyboardInput(ev) {
    if(ev.key >= 0 && ev.key <= 9) appendNumber(ev.key)
}

function chooseOperation(operator) {
    if()
}

function clear() {
    currentOperationScreen.textContent='0';
    prevOperationScreen.textContent = ' ';

}

function roundNumber(value) {
    return Math.round(value*1000) / 1000;
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