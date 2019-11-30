import uuid from 'uuid';


const Mutation = {
    createItem: (parent, args, { db }, info) => {
        const newItem = {
            id: uuid(),
            ...args
        }
        db.list.items.push(newItem);
        return newItem;
    },
    deleteItem: (parent, args, { db }, info) => {
        const itemIndex = db.list.items.findIndex((item) => item.id === args.id);
        if (itemIndex > -1) {
            const deleted = db.list.items.splice(itemIndex, 1)
            return deleted[0]
        }
        return null
    }
}


export { Mutation as default };