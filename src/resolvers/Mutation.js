import uuid from 'uuid';


const Mutation = {
    createItem: (parent, args, { db }, info) => {

        const newItem = {
            id: uuid(),
            ...args
        }
        db.list.map((list) => list.items.push(newItem));
        return newItem;
    },
    deleteItem: (parent, args, { db }, info) => {

        const itemIndex = db.list.map((list) => {
            return list.items.findIndex((item) => item.id === args.id);
        });

        if (itemIndex > -1) {
            const deleted = db.list.map((list) => list.items.splice(itemIndex, 1));
            return deleted[0];
        }
        return null;
    },
    updateBuyer: (parent, args, { db }, info) => {

        const lists = db.shoppingList.map((list) => {
            return list.items.find((item) => item.id === args.id);
        });

        const buyer = lists.map((list) => {
            if (list) {
                list.title = args.data.title;
                list.employee = args.data.employee;
                list.product = args.data.employee;
                list.bought = args.data.employee;
            }
            return list
        })

        return buyer;

    },
    saveList: (parent, args, { db }, info) => {

        const newList = db.list.map((list) => {
            list.listTitle = args.listTitle;
            const insertData = db.shoppingList.push(list);
            return insertData;
        });

        return newList;
    }
}


export { Mutation as default };