import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './modules';

let store = createStore(reducers, applyMiddleware(thunk, logger));
// let store = createStore(reducers, applyMiddleware(thunk));

export default store;