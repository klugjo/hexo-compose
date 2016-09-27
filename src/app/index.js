import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexLink, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';

import SplashPage from './containers/SplashPage';
import Posts from './containers/Posts';
import ViewPost from './containers/ViewPostPage';
import Editor from './containers/EditorPage';

import styles from '../scss/main.scss';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={SplashPage} />
      <Route path="/posts" component={Posts} >
        <Route path="/posts/view/:postId" component={ViewPost} />
        <Route path="/posts/edit/:postId" component={Editor} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
