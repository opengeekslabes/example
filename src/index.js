import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';

import App from './App';
import AutorisationForm from './AutorisationForm';

ReactDOM.render(
	<Router>
        <Switch>
            <Route exact path="/" component={AutorisationForm} />
            <Route path="/app" component={App} />
        </Switch>
   </Router>,
  document.getElementById('root')
);
