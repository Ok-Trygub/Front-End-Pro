function createTable() {
	const elementWrapper = document.querySelector('.itemsList');
	let counter = 1;
	const tableStart = document.createElement('table');

	elementWrapper.append(tableStart);

	for (let b = 0; b < 10; b++) {
		const tr = document.createElement('tr');
		tableStart.append(tr);

		for (let a = 0; a < 10; a++) {
			const td = document.createElement('td');
			tr.append(td);
			td.innerHTML = `${counter++}`;
		}
	}
}
createTable();