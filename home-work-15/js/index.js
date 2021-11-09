function validation (str, num, symb, side) {
	if (!typeof (symb) === "string" || symb === undefined || symb === null || symb.length !== 1) return "You need input one symbol";

	if (!typeof (str) === "string" || str === undefined || str === null) return "Error. Need input some word";

	if (!typeof (str) === "string" || str === undefined) return "Error. Need input some word";

	if (!Number(num)) return "Please input length of str.";

	if (side !== Boolean(side)) return "Error. Need input true or false";

	return true;
}


function padString (str, num, symb, side = true) {
	if (!validation(str, num, symb, side)) return;

	if (num > str.length) {
		num -= str.length;
		for (let i = 0; i < num; i++) {
			side ? (str += symb) : (str = symb + str);
		}
	} else {
		str = str.substr(0, num);

	}
	return str;
}

// console.log(padString("hello", 8, "*"));
console.log(padString("hello", 16, "23", true));
// console.log(padString("hello", 2));


// *******************************************



function padString (str, num, symb, side = true) {
	if (!typeof (symb) === "string" || symb === undefined || symb === null || symb.length !== 1) return "You need input one symbol";

	if (!typeof (str) === "string" || str === undefined || str === null) return "Error. Need input some word";

	if (!Number(num)) return "Please input length of str.";

	if (side !== Boolean(side)) return "Error. Need input true or false";

	if (num > str.length) {
		num -= str.length;
		for (let i = 0; i < num; i++) {
			side ? (str += symb) : (str = symb + str);
		}
	} else {
		str = str.substr(0, num);
	}
	return str;
}

// console.log(padString("hello", 8, "*"));
console.log(padString("hello", 12, "*", false));
// console.log(padString("hello", 2));