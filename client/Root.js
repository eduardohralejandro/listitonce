import React from 'react';
import { Provider, createClient } from 'urql';

import FirstComponent from './components/FirstComponent';


const client = createClient({
    url: 'http://localhost:4000/',
});


const Root = () => {
    return (
        <Provider value={client}>
            <FirstComponent />
        </Provider>
    );
};


export default Root;