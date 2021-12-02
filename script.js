let num = +prompt('Введите число');

let num1 = num > Math.PI ? true : false;
let num2 = num < Math.PI ? true : false;
let num3 = num === Math.PI ? true : false;

console.log('You entered: ' +num);
console.log('Is greater then PI: ' +num1);
console.log('Is less then PI: ' +num2);
console.log('Is equal PI: ' +num3);
