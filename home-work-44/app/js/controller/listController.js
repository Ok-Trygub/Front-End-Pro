class ListController {
	_listSelector = null;
	_list = null;

	_API_URL = null;

	#view = null;
	#model = null;


	constructor(listConfiguration, View, Model) {
		this.#setView(View);
		this.#setModel(Model);

		this._listSelector = listConfiguration.list;   // #listItems
		this.list = ListController.#getElementFromSelector(this.listSelector); // ul#listItems.list-group.list-group-flush.col-8


		this.#setWindowOnloadEvent();
		this.setChooseCurrentAlbum();

		this._API_URL = listConfiguration.API_URL;
	}

	#setView(View) {
		this.#view = new View(this);
	}

	#setModel(Model) {
		this.#model = new Model();
	}

	get listSelector() {
		return this._listSelector;
	}

	get API_URL() {
		return this._API_URL;
	}

	static #getElementFromSelector(elemSelector) {
		const elem = document.querySelector(elemSelector);

		if (!(elem instanceof HTMLElement)) {
			throw new Error('It is not a HTML element!');
		}
		return elem;
	}

	set list(listNode) {
		this.#view.setList(listNode);
		this._list = listNode;
	}

	get list() {
		return this._list;
	}

	windowOnloadHandler() {
		async function getData(url) {

			let data = fetch(url, {
				method: 'GET',
				headers: {
					accept: 'application/json, text/plain, */*',
				}
			})

			let response = await data;
			response = await response.json();

			return response;
		}

		let data = null;

		getData(`${this.API_URL}/albums`)
			.then(response => {
				data = response

				data.forEach(listItem => {
					this.#view.renderList(listItem);
				});
			})
	}

	#setWindowOnloadEvent() {
		window.addEventListener(
			'DOMContentLoaded',
			this.windowOnloadHandler.bind(this)
		)
	}

	chooseCurrentAlbumHandler(event) {
		event.stopPropagation();
		const { target } = event;
		console.log(target)

		if (!target.hasAttribute('href')) return;

		const id = target.getAttribute('id');
		console.log(id);


		async function getData(url) {
			let photos = fetch(url, {
				method: 'GET',
				headers: {
					accept: 'application/json, text/plain, */*',
				}
			})

			let response = await photos;
			response = await response.json();

			return response;
		}

		let photos = null;

		getData(`${this.API_URL}/photos?albumId=${id}`)
			.then(response => {
				photos = response

				console.log(photos);
				this.#model.setData(id, photos);

			})
	}

	setChooseCurrentAlbum() {
		this.list.addEventListener(
			'click',
			this.chooseCurrentAlbumHandler.bind(this)
		)
	}
}