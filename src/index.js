import React from 'react';
import ReactDOM from 'react-dom';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './store/reducers'

import './index.css';
import App from './App';
import About from './about/About';
import Header from './header/Header';
import Footer from './footer/Footer';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const sageMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sageMiddleware));
sageMiddleware.run(rootSaga);


const root = (
    <Provider store={store}>
        <Router>
            <div style={{position : 'relative', top : '0px', left : '0px'}}>
                <Header/>
                <div style={{paddingBottom : '72px'}}>
                    <Switch>
                        <Route path="/" exact component={App}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
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
