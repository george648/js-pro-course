import ADD_USER from './types';
import {INCREASE_COUNTER, DECREASE_COUNTER, INCREASE_COUNTER_BY_VALUE, DECREASE_COUNTER_BY_VALUE} from './types';
import {combineReducers} from 'redux';

const initialCounter = {
    counter: 0
};

const initialUser = {
    users: []
};


let counter = 0;

export const reducers = (state = initialCounter, action) => {
    if(action.type === INCREASE_COUNTER) {
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

export const userReducer = (state = initialUser, action) => {
    if(action.type === 'ADD_USER') {
        return {
            users:
            [
                ...state.users,
                action.payload
            ]
        }
    }
    return state
};

export const rootReducer = combineReducers({
    initialUser,
    counter,
})
