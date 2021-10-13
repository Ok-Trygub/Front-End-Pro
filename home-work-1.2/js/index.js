//There are several ways to perform string to number for the correct addition operation.

//Using +

let num1ForAddition = +prompt("Give me the first operand");
let num2ForAddition = +prompt("Give me the second operand");

const resultOfAddition = num1ForAddition + num2ForAddition;

console.log(resultOfAddition);

//Using Number() 

/*
let num1ForAddition = Number(prompt("Give me the first operand"));
let num2ForAddition = Number(prompt("Give me the second operand"));

const resultOfAddition = num1ForAddition + num2ForAddition;

console.log(resultOfAddition);
*/



let num1ForSubtraction = prompt("Give me the first operand");
let num2ForSubtraction = prompt("Give me the second operand");

const resultOfSubtraction = num1ForSubtraction - num2ForSubtraction;

console.log(+resultOfSubtraction.toFixed(2));



let num1ForMultiplication = prompt("Give me the first operand");
let num2ForMultiplication = prompt("Give me the second operand");

const resultOfMultiplication = num1ForMultiplication * num2ForMultiplication;

console.log(+resultOfMultiplication.toFixed(2));



let num1ForDivision = prompt("Give me the first operand");
let num2ForDivision = prompt("Give me the second operand");

const resultOfDivision = num1ForDivision / num2ForDivision;

console.log(+resultOfDivision.toFixed(2));
