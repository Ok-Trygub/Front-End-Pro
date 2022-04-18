class PhotosModel {

    #getData(dbKey) {
        let data = JSON.parse(localStorage.getItem(dbKey));
        if (data === null) {
            throw new Error('AlbumId is absent!');
        }
        return data;
    }

    getData(dbKey) {
        return this.#getData(dbKey);
    }
}