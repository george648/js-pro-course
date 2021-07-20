import ADD_USER from './types';
import {INCREASE_COUNTER, DECREASE_COUNTER, INCREASE_COUNTER_BY_VALUE, DECREASE_COUNTER_BY_VALUE} from './types';
import {combineReducers} from 'redux';

const initialState = {
    users: [],
    counter: 0
};

let counter = 0;

export const reducers = (state = initialState, action) => {
    if(action.type === 'ADD_USER') {
        return {
            users:
            [
                ...state.users,
                action.payload
            ]
        }
    } else if(action.type === INCREASE_COUNTER) {
        return {
            ...state,
            counter: state.counter+1
        }
    }
    else if(action.type === INCREASE_COUNTER_BY_VALUE) {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    } else if(action.type === DECREASE_COUNTER_BY_VALUE) {
        return {
            ...state,
            counter: state.counter - action.payload
        }
    } else if(action.type === DECREASE_COUNTER) {
        return {
            ...state,
            counter: state.counter-1
        }
    }
    return state
};

export const counterReducer = (state = initialState, action) => {
    if(action.type === 'ADD_USER') {
        return {
            ...state,
            counter: +1
        }
    }
    return state
};

export const rootReducer = combineReducers({
    users: initialState.users,
    counter,
})
