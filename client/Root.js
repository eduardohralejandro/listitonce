import React from 'react';
import { Provider, createClient } from 'urql';

import UserLayout from './components/UserLayout';


const client = createClient({
    url: 'http://localhost:4000/',
});


const Root = () => {
    return (
        <Provider value={client}>
            <UserLayout />
        </Provider>
    );
};


export default Root;