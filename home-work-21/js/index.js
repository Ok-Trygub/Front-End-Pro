// #1 indexOf

// const arr = [12, 77, null, 11, "hi", 12, 77, null, 11, "hi", NaN];

// function indexOf (item, from = 0) {
// 	if (from < 0) from = 0;

// 	if (from >= arr.length) {
// 		return - 1;
// 	} else {
// 		for (let i = from; i < arr.length; i++) {
// 			if (arr[i] === item) return [i];
// 		}
// 	}
// 	return -1;
// }

// console.log(indexOf(11));

// #2 lastIndexOf

// const arr = [12, 77, null, 11, "hi", 12, 77, null, 11, "hi", NaN];

// function lastIndexOf (item, from = 0) {
// 	if (from < 0) from = 0;

// 	for (let i = arr.length - 1; i > from; i--) {
// 		if (arr[i] === item) return [i];
// 	}
// 	return -1;
// }

// console.log(lastIndexOf(11, -4));

// #3 includes

// const arr = [12, 77, null, 11, "hi", NaN];

// function includes (item, from = 0) {
// 	for (let i = from; i < arr.length; i++) {

// 		if (arr[i] === item) return true;


// 		if (Number.isNaN(arr[i])) return true;
// 	}
// 	return - 1
// }
// console.log(includes("hui"));



