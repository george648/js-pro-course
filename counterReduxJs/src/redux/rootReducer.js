import {DECREASE_COUNTER, INCREASE_COUNTER, DECREASE_COUNTER_BY_VALUE, INCREASE_COUNTER_BY_VALUE } from './types'
import { combineReducers } from 'redux'

const counterReducer = (state = 0, action) => {
    if(action.type === INCREASE_COUNTER) {
        return state +1
    } else if(action.type === DECREASE_COUNTER) {
        return state -1
    } else if(action.type === DECREASE_COUNTER_BY_VALUE) {
        return state - action.payload
    } else if(action.type === INCREASE_COUNTER_BY_VALUE) {
        return state + action.payload
    }
    return state
};

export const rootReducer = combineReducers({counter: counterReducer});