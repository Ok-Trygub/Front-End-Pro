function generateList(arr, listWrapper) {

	function createList(arr) {
		const list = document.createElement('ul');

		for (let i = 0; i < arr.length; i++) {
			const li = document.createElement('li');

			if (Array.isArray(arr[i])) {
				li.append(createList(arr[i]));
			} else {
				li.innerHTML = arr[i];
			}

			list.append(li);
		}

		return list;
	}


	listWrapper.append(createList(arr));
}

generateList(
	[1, 2, 3, [1, 2, 3, 4], 4, 5],
	document.querySelector('.itemsList')
)