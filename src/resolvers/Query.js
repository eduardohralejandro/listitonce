const Query = {
    lists: (parent, args, { db }, info) => {
        return db.list
    },
}


export { Query as default };
