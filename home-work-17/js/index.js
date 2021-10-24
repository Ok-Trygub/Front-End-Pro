const x = 4;
const y = 9;
const r = 10;
const a = Math.sqrt(x * x + y * y);
console.log(a);

const result = a <= r ? 'Точка внутри окружности' : 'Точка за пределами окружности';

alert(result);