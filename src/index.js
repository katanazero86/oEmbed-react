import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers'
import './index.css';
import App from './App';
import About from './about/About';
import Header from './header/Header';
import Footer from './footer/Footer';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const store = createStore(reducers);

const root = (
    <Provider store={store}>
        <Router>
            <Header/>
            <div>
                <Switch>
                    <Route path="/" exact component={App}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    </Provider>
);

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// );

ReactDOM.render(
    root,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
