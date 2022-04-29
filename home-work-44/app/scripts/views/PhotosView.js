class PhotosView {
    #photosContainer = null;

    #setPhotosContainer(containerNode) {
        if (this.#photosContainer) throw new Error('Container already defined!');
        this.#photosContainer = containerNode;
    }

    setPhotosContainer(containerNode) {
        return this.#setPhotosContainer(containerNode);
    }


    createElement(nodeName, classes, innerContent) {
        const elem = document.createElement(nodeName);

        if (!classes && innerContent) {
            elem.innerHTML = innerContent;
            return elem;
        }
        if (Array.isArray(classes)) {
            classes.forEach((singleClassName) => {
                elem.classList.add(singleClassName);
            });
        } else {
            elem.classList.add(classes);
        }
        return elem;
    }


    createTemplate({thumbnailUrl, title}) {

        const photoWrapper = this.createElement('span', 'photo_item');
        const photoItem = this.createElement("img");
        photoWrapper.append(photoItem);

        const titleElem = this.createElement('p');
        const titleText = this.createElement('b', '', title);
        titleElem.append(titleText);

        photoWrapper.append(titleElem);

        photoItem.setAttribute('src', thumbnailUrl);

        return photoWrapper;
    }

    renderPhoto(data) {
        this.#photosContainer.append(
            this.createTemplate(data)
        )
    }


}
