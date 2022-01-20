// Model

'use strict';

const model = {
	controller: null,

	getData(id) {
		return JSON.parse(
				localStorage.getItem(id)
		)
},

	setData(data) {
		const keyInDB = data.id;
		delete data.id;

		if(!localStorage.getItem(keyInDB)) {
				localStorage.setItem(
						keyInDB,
						JSON.stringify([data])
				);
				return;
		}

		const currentData = JSON.parse(localStorage.getItem(keyInDB));
		currentData.push(data);
		localStorage.setItem(
				keyInDB,
				JSON.stringify(currentData)
		);

},

	changeCompleted(itemId, dbKey, status) {
		const data = JSON.parse(localStorage.getItem(dbKey));
		const currentItem = data.find(todoItem => todoItem.itemId === +itemId);

		currentItem.completed = status;

		localStorage.setItem(
				dbKey,
				JSON.stringify(data)
		)
},

	deleteItem(id, dbKey) {  
		const data = JSON.parse(localStorage.getItem(dbKey));
		const index = data.findIndex(
			todoItem => todoItem.itemId === +id
		);

		data.splice(index, 1);

		localStorage.setItem(
			dbKey,
			JSON.stringify(data)
		)
	},

	clearStorage(dbKey) {
		localStorage.removeItem(dbKey);
	},

	init(controllerInstance) {
		this.controller = controllerInstance;
	}
}