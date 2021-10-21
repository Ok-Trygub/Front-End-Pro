//1. Если переменная a равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt('Input some value', '1');
const result = a === 0 ? 'Верно' : 'Неверно';
alert(result);

// 2. Если переменная a больше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt('Input some value', '1');
const result = a > 0 ? 'Верно' : 'Неверно';
alert(result);

// 3. Если переменная a меньше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt('Input some value', '1');
const result = a < 0 ? 'Верно' : 'Неверно';
alert(result);

// 4. Если переменная a больше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt('Input some value', '1');
const result = a >= 0 ? 'Верно' : 'Неверно';
alert(result);

// 5. Если переменная a меньше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt('Input some value', '1');
const result = a <= 0 ? 'Верно' : 'Неверно';
alert(result);

// 6. Если переменная a не равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt('Input some value', '1');
const result = a !== 0 ? 'Верно' : 'Неверно';
alert(result);

// 7. Если переменная a равна ‘test’, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = prompt('Input some value', 'test');
const result = a === 'test' ? 'Верно' : 'Неверно';
alert(result);

// 8. Если переменная a равна ‘1’ и по значению и по типу, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = prompt('Input some value', '1');
const result = a === '1' ? 'Верно' : 'Неверно';
alert(result);

// 9. Если переменная a больше нуля и меньше 5-ти, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt('Input some value', '1');
const result = a > 0 && a < 5 ? 'Верно' : 'Неверно';
alert(result);

// 10. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран.

let a = +prompt('Input some value', '1');

if (a === 0 || a === 2) {
	a += 7;
	alert(a);
} else {
	a /= 10;
	alert(a);
}

// 11. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

const a = +prompt('Input first value', '1');
const b = +prompt('Input second value', '1');

if (a <= 1 && b >= 3) {
	const result = a + b;
	alert(result);
} else {
	const result = a - b;
	alert(result);
}

// 12. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите ‘Верно’, в противном случае выведите ‘Неверно’.

const a = +prompt('Input first value', '1');
const b = +prompt('Input second value', '1');

const result = a > 2 && a < 11 || b >= 6 && b < 14 ? 'Верно' : 'Неверно';
alert(result);

// 13. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение ‘1’, то в переменную result запишем ‘зима’, если имеет значение ‘2’ – ‘весна’ и так далее. Решите задачу через switch-case.

const num = +prompt('Введите значение от 1 до 4', '4');
let result;

switch (num) {
	case 1:
		result = 'Зима';
		alert(result);
		break;
	case 2:
		result = 'Весна';
		alert(result);
		break;
	case 3:
		result = 'Лето';
		alert(result);
		break;
	case 4:
		result = 'Осень';
		alert(result);
		break;
	default:
		alert('Ошибка. Необходимо ввести значение от 1 до 4.');
}