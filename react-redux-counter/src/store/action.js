import {INCREASE_COUNTER, DECREASE_COUNTER, ADD_USER, INCREASE_COUNTER_BY_VALUE, DECREASE_COUNTER_BY_VALUE} from './types';

export const AddUserAction = (data) => {
    return {
        type: ADD_USER, 
        payload: data
    }
};

export const increaseCounter = () => 
    ({
        type: INCREASE_COUNTER
    })
;

export const decreaseCounter = () => {
    return {
        type: DECREASE_COUNTER
    }
};

export const increaseCounterByValue = (number) => {
    return {
        type: INCREASE_COUNTER_BY_VALUE, 
        payload: number
    }
};
export const decreaseCounterByValue = (number) => {
    return {
        type: DECREASE_COUNTER_BY_VALUE, 
        payload: number
    }
};