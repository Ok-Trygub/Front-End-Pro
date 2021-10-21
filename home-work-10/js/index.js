//#1

let x = 10, y = 7;
const result = x > y ? 'x больше, чем y' : 'x не больше, чем y';
alert(result);

//#2

const num = prompt('Input some number:');

if (num %2 === 0) {
	alert('Число ' + num + ' четное');
} else {
	alert('Число ' + num + ' нечетное');
}

//#3

let lengthOfNum;
let valueOfNum;

const num = prompt('Введите целое число:');

if (num === null) {
	alert('Жаль, что Вы передумали вводить число.');
} else if (isNaN(num)) {
	alert('Число должно содержать только цифры.');
} else if (num.trim() === '') {
	alert('Пустая строка. Попробуйте снова.');
} else if (num.trim().length === 1) {
	lengthOfNum = ' однозначное, ';
} else if (num.trim().length === 2) {
	lengthOfNum = ' двухзначное, ';
} else if (num.trim().length === 3) {
	lengthOfNum = ' трехзначное, ';
} else if (num.trim().length >= 4) {
	lengthOfNum = ' многозначное, ';
}

if (+num === 0) {
	valueOfNum = ' не явялется ни положительным, ни отрицательным.';
	alert('Число ' + num + lengthOfNum + valueOfNum);
} else if (+num > 0) {
	valueOfNum = 'положительное.';
	alert('Число ' + num + lengthOfNum + valueOfNum);
} else if (+num < 0) {
	valueOfNum = 'отрицательное.';
	alert('Число ' + num + lengthOfNum + valueOfNum);
} else {
	alert('Ошибка, попробуйте снова.');
}

//#4

const firstNum = prompt('Введите первое число:');
let secondNum;
let thirdNum;

if (firstNum === null) {
	alert('Ошибка. Вы нажали кнопку "Отмена"');
} else if (firstNum.trim() === '') {
	alert('Пустая строка. Попробуйте снова.');
} else if (isNaN(firstNum)) {
	alert('Ошибка. Ведите число.');
} else {
	secondNum = prompt('Введите второе число:');
}

if (secondNum === null) {
	alert('Ошибка. Вы нажали кнопку "Отмена"');
} else if (secondNum.trim() === '') {
	alert('Пустая строка. Попробуйте снова.');
} else if (isNaN(secondNum)) {
	alert('Ошибка. Ведите число.');
} else {
	thirdNum = prompt('Введите третье число:');
}

if (thirdNum === null) {
	alert('Ошибка. Вы нажали кнопку "Отмена"');
} else if (thirdNum.trim() === '') {
	alert('Пустая строка. Попробуйте снова.');
} else if (isNaN(thirdNum)) {
	alert('Ошибка. Ведите число.');
}

if (+firstNum >= +secondNum && +firstNum >= +thirdNum) {
	alert(firstNum);
} else if (+secondNum >= +firstNum && +secondNum >= +thirdNum) {
	alert(secondNum);
} else if (+thirdNum >= +firstNum && +thirdNum >= +secondNum) {
	alert(thirdNum);
}

//#5

const firstSide = +prompt('Ввелите длину первой стороны:', '2');
const secondSide = +prompt('Ввелите длину второй стороны:', '2');
const thirdSide = +prompt('Ввелите длину третьей стороны:', '2');


if (firstSide + secondSide > thirdSide && firstSide + thirdSide > secondSide && secondSide + thirdSide > firstSide) {
	alert('Треугольник может существовать');
} else {
	alert('Треугольник НЕ может существовать');
}
