const str = prompt("Input some word/words:", "hello");
let num = +prompt("Input length of str:", "2");
const symb = prompt("Input some symbol:", "*");
let side = prompt("Input true/false:", "true");

if (str === null || str.trim() === "") alert("Error. Need input some word");

if (!num) alert("Please input length of str.");

if (symb.length !== 1 || !symb || symb.trim() === "") alert("You need input one symbol");

if (side === "true") {
  side = true;
} else if (side === "false") {
  side = false;
} else {
  alert("Error. Need input 'true' or 'false'");
}

function padString(str, num, symb, side = true) {
  if (num > str.length) {
    num -= str.length;

    for (let i = 0; i < num; i++) {
      side ? (str += symb) : (str = symb + str);
    }
  } else {
    str = str.substr(0, num);
  }
  return str;
}

console.log(padString(str, num, symb, side));
