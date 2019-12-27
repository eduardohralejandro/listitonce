import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import Root from '../Root';


let App = () => {
    return (
        <Root />
    );
};

App = hot(module)(App);

const renderApp = () => {
    ReactDOM.render(<App />, document.querySelector('#root'));
};

renderApp();