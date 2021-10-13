//There are diffent ways to accomplish this task
//Using +

let num1 = +prompt("Give me the first operand");
let num2 = +prompt("Give me the second operand");

let result = num1 + num2;

console.log(result, typeof result)


//Using Number()

/*
let num1 = Number(prompt("Give me the first operand"));
let num2 = Number(prompt("Give me the second operand"));

let result = num1 + num2;

console.log(result, typeof result)
*/


//Using parseInt

/*
let num1 = prompt("Give me the first operand");
num1 = parseInt(num1, 10);
let num2 = prompt("Give me the second operand");
num2 = parseInt(num2, 10);

let result = num1 + num2;

console.log(result, typeof result)
*/