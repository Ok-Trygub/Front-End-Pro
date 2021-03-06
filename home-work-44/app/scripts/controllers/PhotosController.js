class PhotosController {
    #databaseKey = null;
    #albumId = null;
    _API_URL = null;

    _photosContainerSelector = null;
    _photosContainer = null;

    #view = null;
    #model = null;

    constructor(photosConfiguration, ViewClass, ModelClass) {
        this.#setView(ViewClass);
        this.#setModel(ModelClass);

        this.#databaseKey = photosConfiguration.databaseKey;
        this.#albumId = this.#model.getData(this.databaseKey);
        this._API_URL = `${photosConfiguration.API_URL}${this.#albumId}`;

        this._photosContainerSelector = photosConfiguration.photosContainer;
        this.photosContainer = PhotosController.#getElementFromSelector(this.photosContainerSelector);

        this.#setWindowOnloadEvent();
    }

    #setView(ViewClass) {
        this.#view = new ViewClass(this);
    }

    #setModel(ModelClass) {
        this.#model = new ModelClass();
    }

    get API_URL() {
        return this._API_URL;
    }

    get databaseKey() {
        return this.#databaseKey;
    }

    get photosContainerSelector() {
        return this._photosContainerSelector;
    }

    get photosContainer() {
        return this._photosContainer;
    }

    set photosContainer(containerNode) {
        this.#view.setPhotosContainer(containerNode);
        this._photosContainer = containerNode;
    }

    static #getElementFromSelector(elemSelector) {
        const elem = document.querySelector(elemSelector);

        if (!(elem instanceof HTMLElement)) {
            throw new Error('It is not a HTML element!');
        }
        return elem;
    }

    async windowOnloadHandler(event) {
        event.preventDefault();
        event.stopPropagation();

        let photos = await fetch(this.API_URL);
        let response = await photos;
        response = await response.json();

        response.forEach(item => {
            this.#view.renderPhoto(item);
        })
    }

    #setWindowOnloadEvent() {
        window.addEventListener(
            'DOMContentLoaded',
            this.windowOnloadHandler.bind(this)
        )
    }
}