import { INCREASE_COUNTER,  DECREASE_COUNTER, DECREASE_COUNTER_BY_VALUE, INCREASE_COUNTER_BY_VALUE } from './types'

export const increaseCounter = function() {
    return {
        type: INCREASE_COUNTER
    }
};

export const decreaseCounter = function() {
    return {
        type: DECREASE_COUNTER
    }
};

export const decreaseCounterByValue = function(data) {
    return {
        type: DECREASE_COUNTER_BY_VALUE,
        payload: data
    }
};

export const increaseCounterByValue = function(data) {
    return {
        type: INCREASE_COUNTER_BY_VALUE,
        payload: data
    }
};