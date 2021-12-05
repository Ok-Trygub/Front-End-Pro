function sum(accum = 0) {

    function insideSum(num) {
        return accum += num;
    }
    return insideSum;
}

const result = sum();
console.log(result(5));
console.log(result(7));
console.log(result(1));
