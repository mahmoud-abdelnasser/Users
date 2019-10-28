import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';
import { composeWithDevTools } from "redux-devtools-extension";


const combinedReducers = createRootReducer();
const middlewares = [thunk];

export type AppState = ReturnType<typeof combinedReducers>;

export const store = createStore(
    combinedReducers,
    compose(composeWithDevTools((applyMiddleware(...middlewares))))
  )
