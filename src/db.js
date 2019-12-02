import uuid from 'uuid';


const list = [{
  listTitle: 'super title',
  id: uuid(),
  items: [
    {
      id: uuid(),
      title: 'super tangent',
      employee: 'Eduardo',
      product: 'Chicken',
      bought: false,
    },
    {
      id: uuid(),
      title: 'new hypothesis',
      employee: 'Eddy',
      product: 'Fish',
      bought: false
    },
  ]
}]


const shoppingList = [{
  listTitle: 'first shop list',
  id: uuid(),
  items: [
    {
      id: uuid(),
      title: 'dinner',
      employee: 'Eduardo',
      product: 'pan',
      bought: false,
    },
    {
      id: uuid(),
      title: 'yep',
      employee: 'Eddy',
      product: 'hehehe',
      bought: false
    },
  ]
}];

const db = {
  list,
  shoppingList
}


export { db as default };
