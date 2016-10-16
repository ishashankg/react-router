import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Contact from './components/Contact';
import Summary from './components/Summary';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="summary" component={Summary} />
        <Route path="contact" component={Contact} />
    </Route>
  </Router>
),document.getElementById('react-application'));
