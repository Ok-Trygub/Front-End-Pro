class ListModel {
    #controller = null;
    #dbKey = 'AlbumId';

    registerController(controllerClass) {
        if (this.#controller) throw new Error('Controller instance already exists!')
        this.#controller = controllerClass;
    }

    get dbKey() {
        return this.#dbKey;
    }

    #hasData() {
        let data = localStorage.getItem(this.dbKey);
        if (data === null) {
            return false;
        }
        return true;
    }

    #setAlbumId(id) {
        if (!this.#hasData()) {
            this.saveData(id);
        }
        localStorage.clear();
        this.saveData(id);

        this.#controller.loadPage();
    }

    setAlbumId(id) {
        return this.#setAlbumId(id);
    }

    saveData(id) {
        localStorage.setItem(
            this.dbKey,
            JSON.stringify(id)
        );
    }
}