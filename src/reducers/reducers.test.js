import * as _ACTIONS from "../actions/types";
import * as _REDUCERS from './reducers';
import { initialState } from './reducers';
import robots from '../utils/robots';

describe('searchRobots reducer', () => {
    it('should return initial state by default', () => {
        expect(_REDUCERS.searchRobots(undefined, {})).toEqual(initialState);
    });

    it('should correctly handle action SET_QUERY', () => {
        const mockQuery = 'banana';
        
        const expectedState = {
            ...initialState,
            query: mockQuery
        };

        const mockAction = {
            type: _ACTIONS.SET_QUERY,
            payload: {
                query: mockQuery
            }
        };

        expect(_REDUCERS.searchRobots(initialState, mockAction)).toEqual(expectedState);
    });

    it('should correctly handle action DATA_IS_FETCHING', () => {
        const mockActionTrue = {
            type: _ACTIONS.DATA_IS_FETCHING,
            payload: {
                dataIsFetching: true
            }
        };

        const mockActionFalse = {
            ...mockActionTrue,
            payload: {
                dataIsFetching: false
            }
        };

        expect(_REDUCERS.searchRobots(initialState, mockActionTrue)).toEqual({
            ...initialState,
            dataIsFetching: true
        });

        expect(_REDUCERS.searchRobots(initialState, mockActionFalse)).toEqual({
            ...initialState,
            dataIsFetching: false
        });
    });

    it('should correctly handle action DATA_FETCH_DID_ERR', () => {
        const mockActionTrue = {
            type: _ACTIONS.DATA_FETCH_DID_ERR,
            payload: {
                dataFetchDidErr: true
            }
        };

        const mockActionFalse = {
            ...mockActionTrue,
            payload: {
                dataFetchDidErr: false
            }
        };

        expect(_REDUCERS.searchRobots(initialState, mockActionTrue)).toEqual({
            ...initialState,
            dataFetchDidErr: true
        });

        expect(_REDUCERS.searchRobots(initialState, mockActionFalse)).toEqual({
            ...initialState,
            dataFetchDidErr: false
        });
    });

    it('should correctly handle action DATA_FETCH_SUCCESS', () => {
        const mockActionTrue = {
            type: _ACTIONS.DATA_FETCH_SUCCESS,
            payload: {
                dataFetchSuccess: true
            }
        };

        const mockActionFalse = {
            ...mockActionTrue,
            payload: {
                dataFetchSuccess: false
            }
        };

        expect(_REDUCERS.searchRobots(initialState, mockActionTrue)).toEqual({
            ...initialState,
            dataFetchSuccess: true
        });

        expect(_REDUCERS.searchRobots(initialState, mockActionFalse)).toEqual({
            ...initialState,
            dataFetchSuccess: false
        });
    });

    it('should correctly handle action POPULATE_ROBOTS', () => {
        const mockAction = {
            type: _ACTIONS.POPULATE_ROBOTS,
            payload: {
                robots
            }
        };

        expect(_REDUCERS.searchRobots(initialState, mockAction)).toEqual({
            ...initialState,
            robots
        });
    });
});