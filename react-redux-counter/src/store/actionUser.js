import { ADD_USER} from './types';

export const AddUserAction = (data) => {
    return {
        type: ADD_USER, 
        payload: data
    }
};