const numbers = document.querySelectorAll('[data-attr=number]');
const operators = document.querySelectorAll('[data-attr=operator]');
const prevOperations = document.querySelector('.full-operation');
const currInput = document.querySelector('.current-input');
const clearOp = document.querySelector('.clear');
const percentOp = document.querySelector('.percent')


let firstNum = null;
let secondNum = null;
let operator = null;
let final = null;
let reset = false;

numbers.forEach(num => num.addEventListener('click', numEnter));
operators.forEach(op => op.addEventListener('click', opEnter));
clearOp.addEventListener('click', clear);
percentOp.addEventListener('click', convertToPercent);

function convertToPercent(e) {
    num = Number(currInput.textContent);
    currInput.textContent = num / 100;
}

function clear() {
    firstNum = null;
    secondNum = null;
    operator = null;
    reset = false;
    currInput.textContent = 0;
    prevOperations.textContent = `Ans = ${final}`;
}

function numEnter(e) {
    if (currInput.textContent === '0' || reset) {
        currInput.textContent = e.target.textContent;
        reset = false;
    } else {
        currInput.textContent += e.target.textContent;
    }
}

function opEnter(e) {
    if (e.target.textContent === '=') {
        secondNum = currInput.textContent;
        final = evaluate(firstNum, operator, secondNum);
        console.log(final);
        prevOperations.textContent = `${firstNum} ${operator} ${secondNum} =`;
        currInput.textContent = `${final}`;
    }
    firstNum = currInput.textContent;
    operator = e.target.textContent;
    reset = true;
}

function evaluate(first, op, second) {
    firstNum = Number(first);
    secondNum = Number(second);
    console.log(firstNum);
    console.log(secondNum);
    console.log(operator);
    switch(op) {
        case '+':
             return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            if(secondNum === 0) {
                return 'Infinity';
            }
            return firstNum / secondNum;
    }
}

