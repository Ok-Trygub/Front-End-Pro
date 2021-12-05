function random () {
	const appearedNumbers = [];

	function generateNum () {
		if (appearedNumbers.length === 100) return appearedNumbers;

		const num = Math.round(Math.random() * (100 - 1) + 1);

		if (!appearedNumbers.includes(num)) {
			appearedNumbers.push(num);
		} else {
			return generateNum();
		}
		return appearedNumbers;
	}
	return generateNum;
}

const result = random();

for (let i = 0; i < 100; i++) {
	console.log(result());
}


