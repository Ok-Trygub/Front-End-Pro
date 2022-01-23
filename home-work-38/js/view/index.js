// View

"use strict";
const view = {
	controller: null,
	formId: null,
	todosContainerId: null,
	form: null,
	todoContainer: null,
	currentItemId: 0,
	removeAllBtn: null,

	getObjKeyValues(formId, containerId) {
		if (!formId) throw new Error("No formId!");
		if (!containerId) throw new Error("No containerId!");

		this.formId = formId;
		this.containerId = containerId;

		this.form = document.getElementById(formId);
		if (this.form.nodeName !== 'FORM') throw new Error('There is no such form on the page');

		this.todoContainer = document.getElementById(containerId);

	},


	getRemoveAllBtn() {
		this.removeAllBtn = this.form.querySelector('.remove-all');
	},

	setEvents() {
		this.form.addEventListener(
			"submit",
			this.formHandler.bind(this)
		);

		document.addEventListener(
			'DOMContentLoaded',
			this.prefillData.bind(this)
		);

		this.todoContainer.addEventListener(
			"change",
			this.checkTodoItem.bind(this)
		);

		this.todoContainer.addEventListener(
			'click',
			this.removeElement.bind(this)
		),

			this.removeAllBtn.addEventListener(
				'click',
				this.removeAll.bind(this)
			)
	},


	prefillData() {
		const data = this.controller.getData(this.formId);

		if (!data || data.length === 0) return;

		this.currentItemId = data[data.length - 1].itemId;

		data.forEach((toDoItem) => {
			this.todoContainer.prepend(this.createTemplate(toDoItem));
		});
	},


	formHandler(event) {
		event.preventDefault();
		++this.currentItemId;

		const data = this.findInputsData();
		console.log(data);

		data.itemId = this.currentItemId;
		console.log(data);

		data.id = this.formId;
		console.log(data)
		data.completed = false;

		this.controller.setData(data);

		this.todoContainer.prepend(this.createTemplate(data));
		event.target.reset();
	},


	checkTodoItem({ target }) {
		const itemId = target.getAttribute('data-item-id');
		const status = target.checked;

		this.controller.changeCompleted(
			itemId,
			this.formId,
			status
		);
	},

	removeElement({ target }) {
		if (!target.classList.contains('delete-btn')) return;

		this.controller.removeElement(
			target.getAttribute('data-item-id'),
			this.formId
		)

		target.closest('.taskWrapper').parentElement.remove()
	},

	removeAll() {
		this.controller.removeAll(this.formId);
		this.todoContainer.innerHTML = '';
	},

	findInputsData() {
		return Array.from(
			this.form.querySelectorAll("input[type=text], textarea")
		).reduce((acc, item) => {
			acc[item.name] = item.value;
			return acc;
		}, {});
	},

	createTemplate({ title, description, itemId, completed }) {
		const wrapper = document.createElement("div");
		wrapper.classList.add("col-4");

		let wrapInnerContent = '<div class="taskWrapper">';
		wrapInnerContent += `<div class="taskHeading">${title}</div>`;
		wrapInnerContent += `<div class="taskDescription">${description}</div>`;

		wrapInnerContent += `<hr>`;
		wrapInnerContent += `<label class="completed form-check">`;

		wrapInnerContent += `<input data-item-id="${itemId}" type="checkbox" class="form-check-input" >`;
		wrapInnerContent += `<span>Завершено ?</span>`;
		wrapInnerContent += `</label>`;

		wrapInnerContent += `<hr>`;
		wrapInnerContent += `<button class="btn btn-danger delete-btn" data-item-id="${itemId}">Удалить</button>`;

		wrapInnerContent += "</div>";

		wrapper.innerHTML = wrapInnerContent;

		wrapper.querySelector("input[type=checkbox]").checked = completed;

		return wrapper;
	},

	init(controllerInstance) {
		this.controller = controllerInstance;

		this.getObjKeyValues('todoForm', 'todoItems');
		this.getRemoveAllBtn();
		this.setEvents();
		this.prefillData();

	},
};
