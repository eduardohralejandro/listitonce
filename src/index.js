import express from "express";
import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
import cors from 'cors';

require('dotenv').config();


import db from './db';
import Mutation from './resolvers/Mutation';
import Query from './resolvers/Query';
import  ListSchema from './models/list';


const path = require('path');

const resolvers = {
    Mutation,
    Query
}

mongoose.Promise = global.Promise;
  
const server = async () => {

    const app = express();

    const port = process.env.PORT || 4000;

    app.use(cors());
    app.use(express.json());

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('client/build'));

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }

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

server.start(() => console.log(`The server is running on port ${port}`));

}

server();