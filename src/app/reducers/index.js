import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import hexoPosts from './hexoPosts';

const rootReducer = combineReducers({
  counter,
  routing,
  hexoPosts
});

export default rootReducer;
