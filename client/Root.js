import React from 'react';
import { Provider, createClient, dedupExchange, fetchExchange,  } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import UserLayout from './components/user_layout/UserLayout';
import GetProduct from './components/get_product/GetProduct';
import Navbar from './components/navbar/Navbar';
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
                },
                updateBuyer: (result, args, cache, info) => {
                    cache.updateQuery({
                            query: RENDER_LISTS,
                        },
                        (dataCache) => {
                            dataCache.savedList.unshift(result.updateBuyer);
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
        <BrowserRouter>
            <Provider value={client}>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={UserLayout} />
                    <Route path="/recipes" component={GetProduct} />
                </Switch>
            </Provider>
        </BrowserRouter>
    );
};


export default Root;