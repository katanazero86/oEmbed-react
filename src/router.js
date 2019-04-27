import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './App.js';
import About from './page/about/About.js';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            {/*<IndexRoute component={Index} />*/}
            <Route path="about" component={About}/>
        </Route>
    </Router>
), document.getElementById('root'));