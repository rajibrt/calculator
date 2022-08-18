const display1E1 = document.querySelector('.display-1');
const display2E1 = document.querySelector('.display-2');
const display3E1 = document.querySelector('.temp-result');
const numbersE1 = document.querySelectorAll('.number');
const numbersE2 = document.querySelectorAll('.operation');
const equal1E1 = document.querySelectorAll('.equal');
const clearE1 = document.querySelectorAll('.all-clear');
const clearLastE1 = document.querySelectorAll('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastaOperation = '';
let haveDot = false;

numbersE1.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        }
        else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2E1.innerText = dis2Num;
    })
})
operationE1.forEach(opearation => {
    opearation.addEventListener('click', (e) => {
        if (!dis2Num) result;
        haveDot = false;
    })
})