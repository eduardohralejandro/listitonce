const Query = {
    list: (parent, args, { db }, info) => {
        return db.list;
    },
    savedList: (parent, args, { db }, info) => {
        return db.shoppingList;
    }
}


export { Query as default };
