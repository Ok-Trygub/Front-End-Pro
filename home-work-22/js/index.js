
// Создайте функцию counter, которая будет создавать счетчик и иметь один необязательный параметр типа number.

// 	Вызов функции должен возвращать объект (счетчик) с тремя методами: increase, decrease, value.
//
// 	Вызов метода value должен возвращать текущее значение счетчика, increse – увеличивать его на 1, а decrease – уменьшать.
//
// 	Вызов функции counter должен создавать независимый счетчик – это значит, что вызов методов одного счетчика никак не
// 	должен влиять на любой другой счетчик.



function counter(value){
	let accum = {
		increase: (value) => value + 1,
		decrease: (value) => value - 1,
		value: (value) => value
	}

	return accum;
	console.log(this.increase);
}




console.log(counter(2));


Trytoget2401 Ok-Trygub