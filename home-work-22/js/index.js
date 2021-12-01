//  Создайте функцию counter, которая будет создавать счетчик и иметь один необязательный параметр типа number.
// 	Вызов функции должен возвращать объект (счетчик) с тремя методами: increase, decrease, value.
// 	Вызов метода value должен возвращать текущее значение счетчика, increse – увеличивать его на 1, а decrease – уменьшать.
// 	Вызов функции counter должен создавать независимый счетчик – это значит, что вызов методов одного счетчика никак не
// 	должен влиять на любой другой счетчик.

function counter(num = 0) {
  const accum = num;
  return {
    incr: () => accum + 1,
    decr: () => accum - 1,
    value: () => accum,
  };
}
const res = counter(7);
console.log(res.incr());
console.log(res.decr());
console.log(res.value());


