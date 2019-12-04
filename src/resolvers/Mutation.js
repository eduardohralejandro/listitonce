import uuid from 'uuid';


const Mutation = {
    createItem: (parent, args, { db }, info) => {
        
        const newItem = {
            id: uuid(),
            ...args,
            employee: null,
            bought: false,
            price: 0,
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
            list.employee = args.data.employee;
            list.product =  args.data.product;
            list.bought = args.data.bought;
            list.price = args.data.price;
            return list;
        });
       
        return buyer;
    },
    saveList: (parent, args, { db }, info) => {
       
        const items = [];

        db.list.map((list) => list.items.map(item => items.push(item)));

        const newList = {
            id: uuid(),
            ...args,
            items,
        }
        db.shoppingList.push(newList);
        db.list.map((list) => list.items = []);

        return newList;
    },
    deleteItemList: (parent, args, { db }, info) => {
       
        const itemIndex = db.shoppingList.map((list) => {
            return list.items.findIndex((item) => item.id === args.id);
        });
        
        if (itemIndex > -1) {
            const deleted = db.shoppingList.map((list) => list.items.splice(itemIndex, 1));
            return deleted[0];
        }
        return null;
    }
}


export { Mutation as default };