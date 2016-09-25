import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SplashPage} />
    <Route path="/posts" components={{main: HomePage, sidebar: SideBar}} />
  </Route>
);
