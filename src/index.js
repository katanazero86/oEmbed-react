import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers'
import './index.css';
import App from './App';
import About from './about/About.js';
import * as serviceWorker from './serviceWorker';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/about" component={About} />
        </div>
    </Router>
);


const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
