'use strict';

const app = (() => {

	const listConfiguration = {
		list: '#listItems',
		API_URL: 'https://jsonplaceholder.typicode.com'
	}

	const controller = new ListController(
		listConfiguration,
		ListView,
		ListModel
	)
	return controller;
})();