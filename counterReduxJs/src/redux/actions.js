import { INCREASE_COUNTER,  DECREASE_COUNTER, DECREASE_COUNTER_BY_VALUE, INCREASE_COUNTER_BY_VALUE } from './types'

export const increaseCounter = function() {
    ({
        type: INCREASE_COUNTER
    })
};

export const decreaseCounter = function() {
    ({
        type: DECREASE_COUNTER
    })
};

export const decreaseCounterByValue = function(data) {
    ({
        type: DECREASE_COUNTER_BY_VALUE,
        payload: data
    })
};

export const increaseCounterByValue = function(data) {
    ({
        type: INCREASE_COUNTER_BY_VALUE,
        payload: data
    })
};