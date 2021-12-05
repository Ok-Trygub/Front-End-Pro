function sum (accum = 0) {

	function accumSum (num) {
		return accum += num;
	}
	return accumSum;
}

const result = sum();

console.log(result(5));
console.log(result(7));
console.log(result(1));
