const Mutation = {
    createItem: async (parent, args, { db }, info) => {
        
        const newItem = {
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
    deleteItemList: async (parent, args, { db, ListSchema }, info) => {
        try {
            const list = ListSchema.update( 
                { _id : args.listId } , 
                { "$pull" : { items : { _id :  args.itemId } } } , 
                { "multi" : true }  
            );
            
            return list;
        }
        catch(e) {
            throw new Error("Unable to delete item, try again");
        }
            
    }
}


export { Mutation as default };