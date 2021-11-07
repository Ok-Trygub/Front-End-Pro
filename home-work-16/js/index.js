function returnPositive (arr) {
	const exampleArr = [];


	if (arr.length === 0) {
		return "This array is empty."
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > 0) exampleArr.push(arr[i]);
		}
	}

	if (exampleArr.length === 0) {
		return null;
	}

	return exampleArr;
}

const arr = [1, 2, 3, -1, -2, -3]

console.log(returnPositive(arr));


