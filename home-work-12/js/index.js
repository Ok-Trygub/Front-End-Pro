const num = prompt('Введите число:');
let flag = true;

if (num === null) {
	console.log('Ошибка. Введите число заново.');
} else if (num.trim() === '') {
	console.log('Ошибка. Пустая строка.');
} else if (isNaN(+num)) {
	console.log('Ошибка. Введите число заново.');
} else if (+num === 1) {
	console.log('1 - не является ни простым, ни составным числом, так как у него только один делитель — 1.');
} else if (+num === 0) {
	console.log('0 - не является натуральным числом и, соответственно, не является ни простым, ни составным.');
} else {
	for (let a = 2; a < +num; a++) {
		if (+num % a === 0) {
			flag = false;
			break;
		}
	}

	console.log(flag);
}