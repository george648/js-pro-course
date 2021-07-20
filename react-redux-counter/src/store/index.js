import { createStore } from 'redux';
import { reducers } from './reducers';
import { counterReducer } from './reducers';
// import { applyMiddleware } from 'redux';
// import { thunk } from 'redux-thunk';


export const store =  createStore(
    reducers,
    // counterReducer,
    // applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);