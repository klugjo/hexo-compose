import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import SideBar from './containers/SideBar';

export default (
  <Route path="/" component={App}>
    <IndexRoute components={{main: HomePage, sidebar: SideBar}} />
  </Route>
);
