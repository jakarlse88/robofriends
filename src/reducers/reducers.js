import * as _ACTIONS from "../actions/types";

export const initialState = {
    robots: [],
    query: '',
    dataIsFetching: false,
    dataFetchDidErr: false,
    dataFetchSuccess: null
};

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case _ACTIONS.SET_QUERY:
            return {
                ...state,
                query: action.payload.query
            };
        case _ACTIONS.DATA_IS_FETCHING: 
            return {
                ...state,
                dataIsFetching: action.payload.dataIsFetching
            };
        case _ACTIONS.DATA_FETCH_DID_ERR:
            return {
                ...state,
                dataFetchDidErr: action.payload.dataFetchDidErr
            };
        case _ACTIONS.DATA_FETCH_SUCCESS:
            return {
                ...state,
                dataFetchSuccess: action.payload.dataFetchSuccess
            };
        case _ACTIONS.POPULATE_ROBOTS:
            return {
                ...state,
                robots: action.payload.robots
            };
        default: 
            return state;
    }
};