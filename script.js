let operandOne = '0';
let operator = '';
let operandTwo = '';
let display = '0';
let result = '';
let firstNum = true;

function add(a, b) {
 return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, numOne, numTwo) {
    let numOneInt = Number(numOne);
    let numTwoInt = Number(numTwo);
    switch(operator) {
        case '+':
            return add(numOneInt, numTwoInt);
            break;
       case '-':
            return subtract(numOneInt, numTwoInt);
            break;
        case '*':
            return multiply(numOneInt, numTwoInt);
            break;
        case '/':
            if (numTwoInt == 0) {
                return 'ERROR DIVIDE BY ZERO'
            } else {    
                return Math.round(divide(numOneInt, numTwoInt) * 100) / 100;
            }
            break;
        default:
            
    }
}

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#AC');
const allBtns = document.querySelectorAll('button');
let screen = document.querySelector('#display');

console.log(numbers);
console.log(operators);

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        if (firstNum == true) {
            display = button.id;
            operandOne = button.id;
        }
        if (operandOne === '0' && operator == '') {
            display = button.id;
            operandOne = button.id;
        } else if (display === 'ERROR DIVIDE BY ZERO') {
            display = button.id;
            operandOne = button.id;
            firstNum = true;
        }
        if (operator == '' && firstNum === false) {
            operandOne = operandOne.concat(button.id); 
            display = operandOne;
        } else if (operator != '') {
            operandTwo = operandTwo.concat(button.id);
            display = operandTwo;
        }

        if (operandOne == '0' && button.id == '0') {
            firstNum = true;
        } else {
            firstNum = false;  
        }
        screen.textContent = display;
        console.log(operandOne);
        console.log(operandTwo);
    });
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator != '' && operandTwo != '') {
            operator = button.id;
            result = operate(operator, operandOne, operandTwo);
            operandOne = result.toString();
            operandTwo = '';
            display = operandOne;
            screen.textContent = display;
        }
        operator = button.id;
    });
});

equals.addEventListener('click', () => {
    result = operate(operator, operandOne, operandTwo);
    console.log(result);
    display = result.toString();
    operandOne = result.toString();
    operator = '';
    operandTwo = '';
    firstNum = true;
    screen.textContent = display;
});

clear.addEventListener('click', () => {
    operandOne = '0';
    display = '0';
    operandTwo = '';
    result = '';
    operator = '';
    firstNum = true;
    screen.textContent = display;
});


