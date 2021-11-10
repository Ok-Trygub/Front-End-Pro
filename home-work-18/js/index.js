function mainFunction (callback) {
	const num = +prompt("Input a number:", "4");
	const degree = +prompt("Input a degree:", "2");

	return exponentiation(num, degree);
	// return multiplay(num, degree);
	// return division(num, degree);
	// return modulo(num, degree);
}

function exponentiation (num, degree) {

	const numInDeg = Math.pow(num, degree);
	alert(numInDeg);
	return numInDeg;
}

// function multiplay (num, degree) {

// 	const numInDeg = num * degree;
// 	alert(numInDeg);
// 	return numInDeg;
// }

// function division (num, degree) {

// 	const numInDeg = (num / degree).toFixed(2);
// 	alert(numInDeg);
// 	return numInDeg;
// }

// function modulo (num, degree) {

// 	const numInDeg = num % degree;
// 	alert(numInDeg);
// 	return numInDeg;
// }

console.log(mainFunction(exponentiation));
// console.log(mainFunction(multiplay));
// console.log(mainFunction(division));
// console.log(mainFunction(modulo));

