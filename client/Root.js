import React from 'react';
import { Provider, createClient, dedupExchange, fetchExchange,  } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import gql from 'graphql-tag';
import UserLayout from './components/UserLayout';


const client = createClient({
    url: 'http://localhost:4000/',
    exchanges:[ cacheExchange({
        updates: {
            Mutation: {
                createItem: (result, args, cache, info) => {
                    cache.updateQuery({
                        query: gql`
                            {
                                list {
                                    id 
                                    items {
                                        id 
                                        product 
                                        bought 
                                        employee  
                                    }
                                }
                            }
                        `
                    }, 
                   (dataCache) => {
                        dataCache.list.unshift(result.createItem); 
                        return dataCache;
                    }
                    );
                },
                deleteItem: (result, args, cache, info) => {
                    cache.updateQuery({
                        query: gql`
                            {
                                list {
                                    id 
                                    items {
                                        id 
                                        product 
                                        bought 
                                        employee  
                                    }
                                }
                            }
                        `
                    },
                    (dataCache) => {
                        dataCache.list.unshift(result.deleteItem);
                        return dataCache;
                    })}
            }
        }
    }), fetchExchange, dedupExchange],
});


const Root = () => {
    return (
        <Provider value={client}>
            <UserLayout />
        </Provider>
    );
};


export default Root;