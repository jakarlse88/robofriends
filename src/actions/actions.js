import * as _ACTIONS from './types';

export const setQuery = text => {
    return {
        type: _ACTIONS.SET_QUERY,
        payload: {
            query: text
        }
    };
};

export const dataIsFetching = bool => {
    return {
        type: _ACTIONS.DATA_IS_FETCHING,
        payload: {
            dataIsFetching: bool
        }
    };
};

export const dataFetchDidErr = bool => {
    return {
        type: _ACTIONS.DATA_FETCH_DID_ERR,
        payload: {
            dataFetchDidErr: bool
        }
    };
};

export const dataFetchSuccess = bool => {
    return {
        type: _ACTIONS.DATA_FETCH_SUCCESS,
        payload: {
            dataFetchSuccess: bool
        }
    };
};

export const populateRobots = robots => {
    return {
        type: _ACTIONS.POPULATE_ROBOTS,
        payload: {
            robots: robots
        }
    };
};

export const fetchData = url => {
    return async dispatch => {

        dispatch(dataIsFetching(true));

        try {
            const response = await fetch(url);

            dispatch(dataIsFetching(false));

            const data = await response.json();
            dispatch(dataFetchSuccess(true));
            dispatch(populateRobots(data));
        } catch (e) {
            dispatch(dataFetchDidErr(true));
            console.log(e);
        }
    };
}