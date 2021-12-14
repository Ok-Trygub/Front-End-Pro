const arr = [9, [5, 2], 4, [3, 1, [7, 8]]];
const arr2 = [12, 4, 8, 7, 34];

function flat(array) {

	if (arguments.length > 1) {
		return ('throw new Error(Function accepts only 1 argument, too much arguments provided)');
	} else {
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
}

console.log(flat(arr));
console.log(flat(arr2));