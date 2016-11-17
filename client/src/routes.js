// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import './index.css';
//Import all the different "pages" we want to load and display
import Posts from './components/DatabasePosts/Posts';
import Tutorial from './components/Views/Tutorial';
import Github from './components/Views/Github';

const Routes = (props) => (
  <Router {...props}>
  <Route path="/" component={ App } >
    <IndexRoute component={ Posts } />
    <Route path="tutorial" component={ Tutorial } />
    <Route path="github" component={ Github } />
  </Route>
  </Router>
);

export default Routes;
