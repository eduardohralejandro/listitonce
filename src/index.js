import { GraphQLServer } from 'graphql-yoga';
import uuid from 'uuid';

import db from './db';


const typeDefs = `
type Query {
    lists: [List!]!
}

type Mutation {
    createList(title: String!): List
    deleteList(id: ID!): List
}

type List {
    id: ID!
    title: String!
}
`

const resolvers = {
    Query: {
        lists: (parent, args, _, info) => {
            return db.list
        },
    },
    Mutation: {
        createList: (parent, args, _, info) => {
            const newList = {
                id: uuid(),
                ...args
            }
            db.list.push(newList);
            return newList;
        },
        deleteList: (parent, args, db, info) => {
            const listIndex = db.list.findIndex((list) => list.id === args.id);
            if (listIndex > -1) {
                const deleted = db.list.splice(listIndex, 1)
                return deleted[0]
            }
            return null
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});


server.start(() => console.log(`The server is running on http://localhost:4000`));