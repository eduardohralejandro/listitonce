import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Root from '../Root';

let App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Root} />
            </Switch>
        </BrowserRouter>
    );
};

App = hot(module)(App);

const renderApp = () => {
    ReactDOM.render(<App />, document.querySelector('#root'));
};

renderApp();