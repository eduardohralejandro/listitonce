import express from "express";
import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
require('dotenv').config();


import db from './db';
import Mutation from './resolvers/Mutation';
import Query from './resolvers/Query';
import  ListSchema from './models/list';


const resolvers = {
    Mutation,
    Query
}

mongoose.Promise = global.Promise;

const server = async () => {
    const app = express();

    const server = new GraphQLServer({
        typeDefs: './src/schema.graphql',
        resolvers,
        context: {
            ListSchema,
            db,
        },
    });


    try {

        await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0-j3gkx.mongodb.net/test?retryWrites=true&w=majority
        `, {useNewUrlParser: true , useUnifiedTopology: true });
    }
    catch (err) {
        console.log(err)
    }

    app.listen({ port: 4001 }, () => {
        console.log('connected')
    })

server.start(() => console.log(`The server is running on http://localhost:4000`));

}

server();