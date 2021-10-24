const num = prompt('Введите число:');

if (!num) {
	console.log('Жаль, что Вы не захотели ввести число.');
} else if (isNaN(+num)) {
	console.log('Ошибка. Введите число заново.');
} else if (+num === 1) {
	console.log('1 - не является ни простым, ни составным числом, так как у него только один делитель — 1.');
} else if (+num < 1) {
	console.log('NaN');
} else {
	for (let a = 2; a <= num; a++) {
		if (num % a === 0) {
			console.log(`${num} - составное число с минимальным делителем ${a}`);
			break;
		}

		if (num % a !== 0) {
			console.log(`${num} - простое число`);
			break;
		}
	}
}
