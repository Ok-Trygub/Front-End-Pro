const arr = [9, [5, 2], 4, [3, 1, [7, 8]]];
const arr2 = [12, 4, 8, 7, 34];

function flat(array) {
	try {
		if (arguments.length > 1) throw new Error('Function accepts only 1 argument, too much arguments provided');
		let newArr = [];

		for (let i = 0; i < array.length; i++) {

			if (Array.isArray(array[i])) {
				newArr = newArr.concat(flat(array[i]));
			} else {
				newArr.push(array[i]);
			}
		}
		return newArr;
	}
	catch (err) {
		console.error('Error: ' + err.message);
	}
}

console.log(flat(arr));
console.log(flat(arr2));