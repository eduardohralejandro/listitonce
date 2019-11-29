import uuid from 'uuid';


const Mutation = {
    createList: (parent, args, { db }, info) => {
        const newList = {
            id: uuid(),
            ...args
        }
        db.list.push(newList);
        return newList;
    },
    deleteList: (parent, args, { db }, info) => {
        const listIndex = db.list.findIndex((list) => list.id === args.id);
        if (listIndex > -1) {
            const deleted = db.list.splice(listIndex, 1)
            return deleted[0]
        }
        return null
    }
}


export { Mutation as default };