// #1 indexOf()

const arr = [12, 77, null, 11, "hi", 12, 77, null, 11, "hi", NaN];

function indexOf (item, from = 0) {
	if (from < 0) from = 0;

	if (from >= arr.length) {
		return - 1;
	} else {
		for (let i = from; i < arr.length; i++) {
			if (arr[i] === item) return [i];
		}
	}
	return -1;
}

console.log(indexOf(11));

// #2 lastIndexOf()

const arr = [12, 77, null, 11, "hi", 12, 77, null, 11, "hi", NaN];

function lastIndexOf (item, from = 0) {
	if (from < 0) from = 0;

	for (let i = arr.length - 1; i > from; i--) {
		if (arr[i] === item) return [i];
	}
	return -1;
}

console.log(lastIndexOf(11, -4));

// #3 includes()

const arr = [12, 77, null, 11, "hi", NaN];

function includes (item, from = 0) {
	if (from >= 0) {
		for (let i = from; i < arr.length; i++) {
			if (arr[i] === item || Number.isNaN(arr[i])) return true;
		}
	} else if (from < 0) {
		for (let i = arr.length + from; i < arr.length; i++) {
		return arr[i] === item;
		}
	}
	return - 1
}
console.log(includes(77));

// #4 find()

const arr = [1, 2, -3, 4, 5, -6];

function find (cb, array) {
	let value = undefined;

	for (let i = 0; i < array.length; i++) {
		if (cb(array[i], i, array)) {
			value = array[i];
			return value;
		}
	}
}

function cb (value, index, array) {
	return value < 0;
}

console.log(find(cb, arr));

// #5 findIndex()

const arr = [1, 2, 3, -4, 5, -6];

function findIndex (cb, array) {
	let value = -1;

	for (let i = 0; i < array.length; i++) {
		if (cb(array[i], i, array)) {
			value = i;
			return value;
		}
	}
}

function cb (value, index, array) {
	return value < 0;
}

console.log(findIndex(cb, arr));

// #6 every()

const arr = [1, 2, 3, -4, 5];

function every (cb, array) {
	let value = true;

	for (let i = 0; i < array.length; i++) {
		if (cb(array[i], i, array) === false) {
			value = false;
			return value;
		}
	}
	return value;
}

function cb (value, index, array) {
	return value < 0;
}

console.log(every(cb, arr));


// #7 some()

const arr = [1, 2, 3, 4, -5];

function every (cb, array) {

	let value = false;
	for (let i = 0; i < array.length; i++) {
		if (cb(array[i], i, array)) {
			value = true;
			return value;
		}
	}
	return value;
}

function cb (value, index, array) {
	return value < 0;
}

console.log(every(cb, arr));