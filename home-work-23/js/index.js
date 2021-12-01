//     Створіть функцію sum, яка буде мати один параметр типу number.
//     Кожен виклик функції має додавати нове число до попередніх і повертати суму, яку можна показати користувачу.
//     Наприклад:
//
// const result = sum(1) // Перший виклик
// console.log(result) // -> 1
//
// const secondResult = sum(2)
// console.log(secondResult) // -> 3
//
// sum(4)
// sum(8)
// const lastResult = sum(11)
// console.log(lastResult) // -> 26
//
//     Функція sum не повинна ніяким чином не повинна звертатись до будь-яких змінних або змінювати їх у глобальному лексичному середовищі!



function sum (num = 0) {
  let accum = 0;

  if (typeof(num) !== 'number' || isNaN(num) === true) return; //почему не проходит проверка на undefined?

  function add() {
    return accum += num;
  }
  return add();
}



const result = sum(4)
console.log(result)

const secondResult = sum(2)
console.log(secondResult)

// const lastResult = sum(3)
// console.log(lastResult)

