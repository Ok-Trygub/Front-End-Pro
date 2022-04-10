class ListModel {
	#controller = null;

	registerController(controllerClass) {
		if (this.#controller) throw new Error('Controller instance already exists!')
		this.#controller = controllerClass;
	}

	#hasData() {
		let data = localStorage.getItem(this.dbKey);

		if (data === null) {
			return false;
		}
		return true;
	}

	#setData(dbKey, data) {
		if (!this.#hasData()) {
			localStorage.setItem(
				`Album #${dbKey}`,
				JSON.stringify(data)
			);
			return
	}
}

	setData(dbKey, data) {
		return this.#setData(dbKey, data);
	}


}