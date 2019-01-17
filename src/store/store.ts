import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];
const store = createStore(reducer, undefined, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
