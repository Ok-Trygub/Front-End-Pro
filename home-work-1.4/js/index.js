let operation = prompt('What operation do you want to do? (+, -, *, /)');
let num1 = prompt('Enter the first number:');
let num2 = prompt('Enter the second number:');

if (operation == '+') {
	let result = (Number(num1) + Number(num2));
	alert(`${num1} ${operation} ${num2} = ${result}`);
} else if (operation == '-') {
	let result = (num1) - (num2);
	alert(`${num1} ${operation} ${num2} = ${result}`);
} else if (operation == '*') {
	let result = (num1) * (num2);
	alert(`${num1} ${operation} ${num2} = ${result}`);
} else if (operation == '/') {
	let result = (num1) / (num2);
	alert(`${num1} ${operation} ${num2} = ${result}`);
} else {
	alert('Error. Please try again.');
};

