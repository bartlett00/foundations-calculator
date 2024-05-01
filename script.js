let operandOne = '';
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
    switch(operator) {
        case '+':
            add(numOne, numTwo);
            break;
       case '-':
            subtract(numOne, numTwo);
            break;
        case '*':
            multiply(numOne, numTwo);
            break;
        case '/':
            divide(numOne, numTwo);
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
        if (operandOne === '') {
            display = button.id;
            operandOne = button.id;
        } else {
            display = display.concat(button.id);
        }

        if (operator == '' && firstNum === false) {
           operandOne = operandOne.concat(button.id);
        } else if (operator != '') {
            operandTwo = operandTwo.concat(button.id);
        }
    screen.textContent = display;
    firstNum = false;
    console.log(operandOne);
    console.log(operandTwo);
    }
    );
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.id;
        display = display.concat(` ${operator} `);
        screen.textContent = display;
    });
});

equals.addEventListener('click', () => {
    result = operate(operator, Number(operandOne), Number(operandTwo));
    display = result;
    operandOne = result;
    operandTwo = '';
    screen.textContent = display;
    console.log(result);
});

clear.addEventListener('click', () => {
    operandOne = '';
    display = '0';
    operandTwo = '';
    result = '';
    operator = '';
    screen.textContent = display;
});


