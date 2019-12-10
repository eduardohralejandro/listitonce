import uuid from "uuid";


const Mutation = {
    createItem: async (parent, args, { db }, info) => {
        
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
    deleteItem: (parent, args, { db, ListSchema }, info) => {

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
    saveList: async (parent, args, { db, ListSchema }, info) => {
       
        const items = [];

        db.list.map((list) => list.items.map(item => items.push(item)));
  
        const saveInDb = new ListSchema({
            ...args,
            items,
        });

        try {
            await saveInDb.save();
            db.list.map((list) => list.items = []);
            return saveInDb;
        } 
        catch(e) {
            throw new Error("Unable to save the list, try again");
        }
    },
    deleteItemList: (parent, args, { db, ListSchema }, info) => {
        
        const itemIndex = db.shoppingList.map((list) => {
            return list.items.findIndex((item) => item.id === args.id);
        });
        
        if (itemIndex > -1) {
            const deleted = db.shoppingList.map((list) => list.items.splice(itemIndex, 1));
            return deleted[0];
        }
        return null;
    },
    deleteList: (parent, args, { db, ListSchema }, info) => {
        ListSchema.findByIdAndRemove(args.id, (err, data) => {
           if (err) {
                throw new Error("Unable to delete the list, try again");
           } 
           else {
               return data;
           }
        });

        return null;
    }
}


export { Mutation as default };