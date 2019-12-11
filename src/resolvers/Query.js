const Query = {
    list: (parent, args, { db }, info) => {
        return db.list;
    },
    savedList: (parent, args, { db, ListSchema }, info) => {
        const lists = ListSchema.find({}, (error, response) => {
            try {
                return response;
            }
            catch (e) {
                throw new Error(error);
            }
        });

        return lists;
    }
}


export { Query as default };
