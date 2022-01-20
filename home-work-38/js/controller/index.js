// Controller

"use strict";

function controller(view, model) {
  return {
    setData(data) {
      if (!this.validateData(data)) throw new Error("Validation Error!");
      model.setData(data);
    },

    validateData(data) {
      if (Object.keys(data).length === 0) return false;

      for (const key in data) {
        if (data[key] === "") return false;
      }
      return true;
    },

    	getData(dbKey) {
    		if (!dbKey) throw new Error('Database key is not defined');

    		return model.getData(dbKey);
    	},

    	changeCompleted(itemId, dbKey, status) {
    		if(!itemId) throw new Error('itemId is not defined');

    		model.changeCompleted(itemId, dbKey, status);
    },

    	removeElement(elementId, dbKey) {
    		if (!elementId) throw new Error('No element!')

    		return model.deleteItem(elementId, dbKey);
    	},

    	removeAll(dbKey) {
    	return	model.clearStorage(dbKey);
    }
  };
}
