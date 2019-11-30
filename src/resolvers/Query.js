const Query = {
    items: (parent, args, { db }, info) => {
        return db.list.items;
    },
    list: (parent, args, { db }, info) => {
        return db.list;
    }
}


export { Query as default };
