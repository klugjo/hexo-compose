import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexLink, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';

import SplashPage from './containers/SplashPage';
import Posts from './containers/Posts';
import Home from './containers/HomePage';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={SplashPage} />
      <Route path="/posts" component={Posts} >
        <Route path="/posts/home" component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
