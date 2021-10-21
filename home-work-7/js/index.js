let numOrStr = prompt('input number or string');

if (numOrStr === null || numOrStr.trim() === '' || isNaN(numOrStr)) {
	alert('Please try again and input some number');
} else {
	alert('Very good!');
}

switch (numOrStr) {
	case null:
		alert('Error. Null');
		break;
	default:
		alert('Very good!');
		break;
}

switch (numOrStr.trim()) {
	case '':
		alert('Error. Empty String');
		break;
	default:
		alert('Very good!');
		break;
}

switch (isNaN(numOrStr)) {
	case true:
		alert('Error. Input only number.');
		break;
	default:
		alert('Very good!');
		break;
}

switch (true) {
	case numOrStr === null:
		alert('Error. Null');
		break;
	case numOrStr.trim() === '':
		alert('Error. Empty String');
		break;
	case isNaN(numOrStr):
		alert('Error. Input only number.');
		break;
	default:
		alert('Very good!');
		break;
}

