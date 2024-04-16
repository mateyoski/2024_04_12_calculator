const currentScreenArea = document.getElementById('screen-current');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');

function appendNumber(number) {
    if(currentScreenArea.textContent === '0'){
    currentScreenArea.textContent = '';}
    currentScreenArea.textContent += number;
}

numberButtons.forEach((button) => 
button.addEventListener('click', () => ))

operatorButtons.forEach((button) => 
button.addEventListener('click', () => ))
