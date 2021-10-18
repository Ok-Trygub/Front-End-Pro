// Task #1

Boolean(Number('10')) + 1;     //2

'sub' + Number(false);        //'sub0'

16 * '   91   ';              //1456

true - 70;                    //-69

Number(1 + String(1)) + 1;    //12


// Task #2

const quantityOfHours = prompt('How many hours in seconds do you want to count?', '2');
const secondsInHour = 3600;
const result = secondsInHour * Number(quantityOfHours);

alert('In ' + quantityOfHours + ' hour(s) ' + Math.round(result) + ' seconds!');


// Task #3

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;

alert(num);

