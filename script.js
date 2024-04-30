let operandOne = '';
let operator = '';
let operandTwo = '';
let display = '0';
let result = '';

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

function operate(operator) {
    switch(operator) {
        case '+':
            
            break;
       case '-':
            
            break;
        case '*':
            
            break;
        case '/':
            
            break;
        default:
            
    }
}

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#AC');

console.log(numbers);
console.log(operators);

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        if (display === '0') {
            display = button.id;
            operandOne = button.id;
        }
        if (operator == '') {
           operandOne = operandOne.concat(button.id);
        } else if (operator != '') {
            operandTwo = operandTwo.concat(button.id);
        }
    display = display.concat(button.id);
    console.log(operandOne);
    console.log(operandTwo);
    }
    );
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.id;
        display = display.concat(` ${operator} `);
    });
});

equals.addEventListener('click', () => {
    result = operate(operator);
    display = result;
    operandOne = result;
    operandTwo = '';
});

