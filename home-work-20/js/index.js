// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.

const arr = [`a`, `b`, `c`, `d`];
const str = `${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`

alert(str);


// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной

const arr = [2, 5, 3, 9];
let result = [];
result.push(arr[0] * arr[1], arr[2] * arr[3]);

alert(result);

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

alert(arr[1][0]);

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.

const obj = { 
	js: [`jQuery`, `Angular`], 
	php: `hello`, 
	css: `world` 
}

alert(obj.js[0]);

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.

const arr = [];
let str = `x`;

for (let i = 0; i < 10; i++) {
	arr.push(str);
	str += `x`;
}

alert(arr);

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.

const arr = [];

for (let i = 1; i < 10; i++) {
	let str = '';

	for (let j = 0; j < i; j++) {
		str += i;
	}
	arr.push(str);
}
alert(arr);

// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

const arr = [];

function arrayFill (value, countOfValue) {
	for (let i = 0; i < countOfValue-1; i++) {
		arr.push(value);
	}
	return arr.push(value);
}

arrayFill(`x`, 5);
alert(arr);

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

const arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
let countOfItems = [];

for(let i = 0; i < arr.length; i++){
sum += arr[i];

countOfItems.push(arr[i]);

if (sum > 10) break;
}

alert(countOfItems.length);

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

const arr = [1, 2, 3, 4, 5, 6];

function compareNum (a, b) {
	if (a < b) return 1;
	if (a == b) return 0;
	if (a > b) return -1;
}

arr.sort(compareNum);

alert(arr); 

// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

const arr = [[1, 2, 3], [4, 5], [6]];
let result = 0;

for (let i = 0; i < arr.length; i++) {

	for (let p = 0; p < arr[i].length; p++) {
		result += arr[i][p];
	}
}

alert(result);

// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. 

const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let result = 0;

for (let i = 0; i < arr.length; i++) {

	for (let p = 0; p < arr[i].length; p++) {

		for (let h = 0; h < arr[i][p].length; h++) {
			result += arr[i][p][h];

		}
	}
}

alert(result);