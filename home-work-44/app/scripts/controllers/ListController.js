class ListController {
    _listSelector = null;
    _list = null;

    _API_URL = null;

    #view = null;
    #model = null;

    constructor(listConfiguration, ViewClass, ModelClass) {
        this.#setView(ViewClass);
        this.#setModel(ModelClass);

        this._listSelector = listConfiguration.list;
        this.list = ListController.#getElementFromSelector(this.listSelector);

        this.#setWindowOnloadEvent();
        this.setChooseCurrentAlbum();

        this._API_URL = listConfiguration.API_URL;

        this.#model.registerController(this);
    }

    #setView(ViewClass) {
        this.#view = new ViewClass(this);
    }

    #setModel(ModelClass) {
        this.#model = new ModelClass();
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

    async windowOnloadHandler() {
        let data = fetch(`${this.API_URL}/albums`);

        let response = await data;
        response = await response.json();

        response.forEach(listItem => {
            this.#view.renderList(listItem);
        })
    }

    #setWindowOnloadEvent() {
        window.addEventListener(
            'DOMContentLoaded',
            this.windowOnloadHandler.bind(this)
        )
    }

    chooseCurrentAlbumHandler(event) {
        event.preventDefault();
        event.stopPropagation();

        const {target} = event;
        console.log(target)

        if (!target.hasAttribute('href')) return;

        const id = target.getAttribute('id');

        this.#model.setAlbumId(id);
    }

    setChooseCurrentAlbum() {
        this.list.addEventListener(
            'click',
            this.chooseCurrentAlbumHandler.bind(this)
        )
    }

    loadPage() {
        window.location.href = '../pages/photos.html';
    }
}