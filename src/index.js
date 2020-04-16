import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Example from './Example';
import './index.css';
import AutorisationForm from './AutorisationForm';

ReactDOM.render(
	<Router>
        <Switch>
            <Route exact path="/" component={AutorisationForm} />
            <Route path="/example" component={Example} />
        </Switch>
   </Router>,
  document.getElementById('root')
);
