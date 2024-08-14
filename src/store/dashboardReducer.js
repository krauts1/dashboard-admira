import { 
    SET_STATE,
    SET_FILTER
 } from './actionTypes';

const DashboardReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_STATE:
            return {
                ...state,
                ...payload,
            }
        case SET_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...payload
                },
            }
        default:
            return state;
    }
}

export default DashboardReducer;
