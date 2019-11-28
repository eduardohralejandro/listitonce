import { GraphQLServer } from 'graphql-yoga';


const typeDefs = `
type Query {
  listTitle: String!
}
`

const resolvers = {
    Query: {
        listTitle: () => {
            return 'Dinner';
        }
    },
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});


server.start(() => console.log(`The server is running on http://localhost:4000`));