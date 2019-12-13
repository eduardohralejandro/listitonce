import uuid from 'uuid';

const list = [ { id: uuid(), items: [] } ];

const shoppingList = [];

const db = {
  list,
  shoppingList
}


export { db as default };
