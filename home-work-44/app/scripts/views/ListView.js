class ListView {
    #controller = null;
    #list = null;

    constructor(controller) {
        this.#controller = controller;
    }

    setList(listNode) {
        if (this.#list) throw new Error('List already defined');
        this.#list = listNode;
    }

    createElement(nodeName, classes, innerContent) {
        const el = document.createElement(nodeName);

        if (!classes && !innerContent) return el;

        if (!classes && innerContent) {
            el.innerHTML = innerContent;
            return el;
        }

        if (Array.isArray(classes)) {
            classes.forEach((singleClassName) => {
                el.classList.add(singleClassName);
            });
        } else {
            el.classList.add(classes);
        }
        return el;
    }

    createTemplate({id, title}) {
        const listItem = this.createElement("li", ["list-group-item", "albums__item", "fw-medium"]);
        const a = this.createElement('a', '', `Album ${id}: ${title}`);

        a.setAttribute('href', '../pages/photos.html');
        a.setAttribute('id', id);
        listItem.append(a)

        return listItem;
    }

    renderList(data) {
        this.#list.append(
            this.createTemplate(data)
        )
    }
}