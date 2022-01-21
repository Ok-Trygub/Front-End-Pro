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

  getId(objKey, Id) {
    if (!Id) throw new Error("No ID!");
    this[objKey] = Id;
  },

  getElement(objKey, elemId) {
    if (!elemId) throw new Error("No element ID!");
    this[objKey] = document.getElementById(elemId);
  },

	getRemoveAllBtn() {
		this.removeAllBtn = this.form.querySelector('.remove-all');
},

  setEvents() {
    this.form.addEventListener(
			"submit", 
		this.formHandler.bind(this)
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

  formHandler(event) {
    event.preventDefault();
    ++this.currentItemId;

    const data = this.findInputsData();
    console.log(data);

    data.itemId = this.currentItemId;
    console.log(data);

    data.id = this.formId;
		data.completed = false;

    this.controller.setData(data, this.formId);

    this.todoContainer.prepend(this.createTemplate(data));
    event.target.reset();
  },

  prefillData() {
    const data = this.controller.getData(this.formId);

    if (data === null || data.length === 0) return;

    this.currentItemId = data[data.length - 1].itemId;

    data.forEach((toDoItem) => {
      this.todoContainer.prepend(this.createTemplate(toDoItem));
    });
  },

  	checkTodoItem({target}) {
  		const itemId = target.getAttribute('data-item-id');
  		console.log(itemId);
			console.log(target);
  		const status = target.checked;

  		this.controller.changeCompleted(
  				itemId,
  				this.formId,
  				status
  		);
  },

  removeElement({ target }) { 
				 if(!target.classList.contains('delete-btn')) return;
		
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

    this.getId("formId", "todoForm");
    this.getId("todosContainerId", "todoItems");
    this.getElement("form", this.formId);
    this.getElement("todoContainer", this.todosContainerId);
		this.getRemoveAllBtn();
		this.setEvents();
		this.prefillData();
 
  },
};
