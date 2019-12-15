import React from 'react';
import { Provider, createClient, dedupExchange, fetchExchange,  } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';

import UserLayout from './components/user_layout/UserLayout';
import GET_LISTS from './components/user_layout/GET_LISTS.graphql';
import RENDER_LISTS from './components/render_lists/RENDER_LISTS.graphql';


const client = createClient({
    url: 'http://localhost:4000/',
    exchanges:[ cacheExchange({
        updates: {
            Mutation: {
                createItem: (result, args, cache, info) => {
                    cache.updateQuery({
                            query: GET_LISTS,
                        }, 
                        (dataCache) => {
                            dataCache.list.unshift(result.createItem); 
                            return dataCache;
                        }
                    );
                },
                deleteItem: (result, args, cache, info) => {
                    cache.updateQuery({
                            query: GET_LISTS,
                        },
                        (dataCache) => {
                            dataCache.list.unshift(result.deleteItem);
                            return dataCache;
                        }
                    );
                },
                saveList: (result, args, cache, info) => {
                    cache.updateQuery({
                            query: RENDER_LISTS,
                        },
                        (dataCache) => {
                            dataCache.savedList.unshift(result.saveList);
                            return dataCache;
                        }
                    );
                }
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