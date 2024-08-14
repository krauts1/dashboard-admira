import { 
    SET_STATE,
    SET_FILTER
 } from './actionTypes';

export const setState = (payload) => ({
    type: SET_STATE,
    payload
});
export const setFilter = (payload) => ({
    type: SET_FILTER,
    payload
});
