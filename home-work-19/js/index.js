// #1 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);

alert(arr3);

// #2 Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const arr = [1, 2, 3];
arr.reverse();

alert(arr);

// #3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const arr = [1, 2, 3];
arr.push(4, 5, 6);

alert(arr);

// #4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const arr = [1, 2, 3];
arr.unshift(4, 5, 6);

alert(arr);

// #5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

const arr = ['js', 'css', 'jq'];
alert(arr[0]);

// #6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

const arr = ['js', 'css', 'jq'];
alert(arr[arr.length - 1]);

// #7 Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].

const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(0, 3);

alert(newArr);

// #8 Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].

const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(-2);

alert(newArr);

// #9 Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);

alert(arr);

// #10 Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].

const arr = [1, 2, 3, 4, 5];
const newArr = arr.splice(1, 3);  //if necessary cut values from arr
const newArr = arr.slice(1, 4);  //if necessary copy values from arr

alert(newArr);

// #11 Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, "a", "b", "c");

alert(arr);

// #12 Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, "a", "b");
arr.splice(6, 0, "c");
arr.splice(8, 0, "e");

alert(arr);

// or

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, "a", "b");
arr.splice(6, 0, "c");
arr.splice([arr.length], 0, "e");

alert(arr);

// #13 Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const arr = [3, 4, 1, 2, 7];
arr.sort();

alert(arr);

// #14 Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.

const arr = [5, 6, 7, 8, 9];

alert(arr.reduce(function sumOfArr (a, b) {
	return a + b;
}));

// #15 Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.

const arr = [5, 6, 7, 8, 9];

alert(arr.map(function degOfItem (item) {
	return Math.pow(item, 2);
}));

// #16 Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.

const arr = [1, -3, 5, 6, -7, 8, 9, -11];

alert(arr.filter(x => x < 0));

// #17 Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.

const arr = [1, -3, 5, 6, -7, 8, 9, -11];

alert(arr.filter(x => x % 2 == 0));

// #18 Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.

const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

alert(arr.filter(x => x.length > 5));

//#19 Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.

const arr = [1, 2, [3, 4], 5, [6, 7]];

alert(arr.filter(x => Array.isArray(x)));

// #20 Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.

const arr = [5, -3, 6, -5, 0, -7, 8, 9];

function negNumbers (num) {
	return num < 0
};
const countsOfNegativeNumbers = arr.filter(negNumbers);
alert(countsOfNegativeNumbers.length);