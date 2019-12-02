const list = [{
  listTitle: 'super title',
  id: "1",
  items: [
    {
      id: "1",
      title: 'super tangent',
      employee: 'Eduardo',
      product: 'Chicken',
      bought: false,
    },
    {
      id: "2",
      title: 'new hypothesis',
      employee: 'Eddy',
      product: 'Fish',
      bought: false
    },
  ]
}]


const shoppingList = [{
  listTitle: 'first shop list',
  id: "2",
  items: [
    {
      id: "3",
      title: 'dinner',
      employee: 'Eduardo',
      product: 'pan',
      bought: false,
    },
    {
      id: "4",
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
