import { GraphQLServer } from 'graphql-yoga';

import db from './db';
import Mutation from './resolvers/Mutation';
import Query from './resolvers/Query';


const resolvers = {
    Mutation,
    Query
}
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        db
    },
});


server.start(() => console.log(`The server is running on http://localhost:4000`));