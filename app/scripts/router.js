
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from './Pages/App';
import projectView from './Pages/projectView';


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>
);

export default router;
