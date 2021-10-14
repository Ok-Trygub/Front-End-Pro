const operation = prompt('What operation do you want to do? (+, -, *, /)');
const num1 = prompt('Enter the first number:');
const num2 = prompt('Enter the second number:');

if (operation == '+') {
	const result = (Number(num1) + Number(num2));
	alert(`${num1} ${operation} ${num2} = ${result}`);
} else if (operation == '-') {
	const result = (num1) - (num2);
	alert(`${num1} ${operation} ${num2} = ${result}`);
} else if (operation == '*') {
	const result = (num1) * (num2);
	alert(`${num1} ${operation} ${num2} = ${result}`);
} else if (operation == '/') {
	const result = (num1) / (num2);
	alert(`${num1} ${operation} ${num2} = ${result}`);
} else {
	alert('Error. Please try again.');
};

