"use strict";

const view = {
	controller: null,
	formId: null,
	form: null,
	todoContainerId: null,
	todoContainer: null,
	currentItemId: null,
	removeAllBtn: null,

	getObjKeyValues(formId, containerId) {
		if (!formId) throw new Error("No formId!");
		if (!containerId) throw new Error("No containerId!");

		this.formId = formId;
		this.containerId = containerId;

		this.form = document.getElementById(formId);
		if (this.form.nodeName !== "FORM")
			throw new Error("There is no such form on the page");

		this.todoContainer = document.getElementById(containerId);
	},

	getRemoveAllBtn() {
		this.removeAllBtn = this.form.querySelector(".remove-all");
	},

	setEvents() {
		this.form.addEventListener("submit", this.formHandler.bind(this));

		document.addEventListener("DOMContentLoaded", this.prefillForm.bind(this));

		this.todoContainer.addEventListener("click", this.removeElement.bind(this));

		this.removeAllBtn.addEventListener("click", this.removeAllTodos.bind(this));

		this.todoContainer.addEventListener(
			"change",
			this.checkTodoItem.bind(this)
		);
	},

	prefillForm() {
		const data = this.controller.getData(this.formId);

		console.log(data);

		if (!data || !data.length) return;

		const iterator = data[Symbol.iterator]();


		let item = iterator.next();

		while (!iterator.done) {
			const element = item.value;
			console.log(element);
			if (item.done) break;

			this.todoContainer.prepend(this.createTemplate(element));
			item = iterator.next();
		}
	},

	formHandler(event) {
		event.preventDefault();
		++this.currentItemId;

		let data = {
			id: this.formId,
			completed: false,
			itemId: this.currentItemId,

			...this.findInputs(),
		};

		this.controller.saveData(data);

		this.todoContainer.append(this.createTemplate(data));

		event.target.reset();
	},

	createTemplate({ title, description, itemId, completed }) {
		const todoItem = this.createElement("div", "col-4");
		const taskWrapper = this.createElement("div", "taskWrapper");
		todoItem.append(taskWrapper);

		const taskHeading = this.createElement("div", "taskHeading", title);
		const taskDescription = this.createElement(
			"div",
			"taskDescription",
			description
		);

		taskWrapper.append(taskHeading);
		taskWrapper.append(taskDescription);

		const hr = this.createElement("hr");
		taskWrapper.append(hr);

		const label = this.createElement("label", ["completed", "form-check"]);
		taskWrapper.append(label);

		const input = this.createElement("input", "form-check-input");
		input.setAttribute("type", "checkbox");
		input.setAttribute("data-item-id", itemId);
		label.append(input);

		const span = this.createElement("span");
		span.innerHTML = "Завершено?";
		label.append(span);

		const hr2 = this.createElement("hr");
		taskWrapper.append(hr2);

		const btn = this.createElement("button", [
			"btn",
			"btn-danger",
			"delete-btn",
		]);

		btn.setAttribute("data-item-id", itemId);
		btn.innerHTML = "Удалить?";
		taskWrapper.append(btn);

		todoItem.querySelector("input[type=checkbox]").checked = completed;

		return todoItem;
	},

	createElement(nodeName, classes, innerContent) {
		const el = document.createElement(nodeName);

		if (!classes && !innerContent) return el;

		if (Array.isArray(classes)) {
			classes.forEach((singleClassName) => {
				el.classList.add(singleClassName);
			});
		} else {
			el.classList.add(classes);
		}

		if (innerContent) {
			el.innerHTML = innerContent;
		}

		return el;
	},

	checkTodoItem({ target }) {
		const itemId = target.getAttribute("data-item-id");
		const status = target.checked;

		this.controller.changeCompleted(itemId, this.formId, status);
	},

	removeElement({ target }) {
		if (!target.classList.contains("delete-btn")) return;

		this.controller.removeItem(
			this.formId,
			target.getAttribute("data-item-id")
		);

		target.closest(".taskWrapper").parentElement.remove();
	},

	removeAllTodos() {
		this.controller.removeAll(this.formId);
		this.todoContainer.innerHTML = "";
	},

	findInputs() {
		return Array.from(
			this.form.querySelectorAll("input[type=text], textarea")
		).reduce((acc, { name, value }) => {
			acc[name] = value;
			return acc;
		}, {});
	},

	init(controllerInstance) {
		this.getObjKeyValues("todoForm", "todoItems");
		this.getRemoveAllBtn();
		this.setEvents();

		this.controller = controllerInstance;
	},
};
