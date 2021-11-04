const str = prompt("Input some word/words:", "hello");
const num = prompt("Input length of str:", "2");
const symb = prompt("Input some symbol:", "*");
const bool = prompt("Input true/false:", "true");

function padString(str, num, symb, bool) {
  if (!str && !num && !symb && !bool) {
    return "Error. Try again.";
  } else if (!str || str.trim() === "") {
    return "Error. Need input some word";
  } else if (!num || num.trim() === "") {
    return "Error. Need input length of str";
  } else if (!symb || symb.trim() === "") {
    return "Error. Need input some symbol";
  } else if (!bool || bool.trim() === "") {
    return "Error. Need input true/false";
  } else {

return str + symb








  }
}

let result = padString(str, num, symb, bool).substr(+num);
console.log(result);
