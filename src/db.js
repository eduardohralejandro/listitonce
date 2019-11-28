const list = [
  {
    id: 1,
    listTitle: 'super tangent',
  },
  {
    id: 2,
    listTitle: 'new hypothesis',
  },
]

const items = [
  {
    id: 1,
    product: 'Chicken',
    employee: 'Eduardo',
    bought: false,
  },
  {
    id: 2,
    product: 'Fish',
    employee: 'Eddy',
    bought: true,
  },
]

const db = {
  list,
  items,
}


export { db as default }
