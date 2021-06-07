import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleweare = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleweare));

export default store;