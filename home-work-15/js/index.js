const str = prompt("Input some word/words:", "hello");
const num = prompt("Input length of str:", "2");
const symb = prompt("Input some symbol:", "*");
const side = prompt("Input true/false:", "true");

function padString (str, num, symb, side = true) {
	if (!str && !num && !symb && !side) {
		return "Error. Try again.";
	} else if (!str || str.trim() === "") {
		return "Error. Need input some word";
	} else if (!num || num.trim() === "" || !(+num)) {
		return "Error. Need input correct length of str";
	} else if (!symb || symb.trim() === "") {
		return "Error. Need input some symbol";
	} else if (!side || side.trim() === "") {
		return "Error. Need input 'true' or 'false'";
	}

	if (side === "true") {
		side = true;
	} else {
		side = false;
	}

	if ((+num) > str.length) {
		num -= str.length;

		for (let i = 0; i < (+num); i++) {
			side ? str += symb[0] : str = symb[0] + str;
		}
	} else {
		str = str.substr(0, +num);
	}
	return str;
}

console.log(padString(str, num, symb, side));
