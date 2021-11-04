const userNum = +prompt("Введите число:", "6");
const userDeg = +prompt("Степень, в которую это число нужно возвести:", "2");

function degOfNum(num, deg = 1) {
  if (!num || !deg) {
    return "some error";
  } else {
    return Math.pow(num, deg);
  }
}
const result = degOfNum(userNum, userDeg);
alert(result);
