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


