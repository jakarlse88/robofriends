import * as _ACTIONS from './actions';
import * as _TYPE from "./types";
import configureMockStore from 'redux-mock-store';
import robots from '../utils/robots';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('Redux actions', () => {
    it('should create an action to set query', () => {
        expect(_ACTIONS.setQuery('testQuery')).toEqual({
            type: _TYPE.SET_QUERY,
            payload: {
                query: 'testQuery'
            }
        });
    });

    it('should create an action to set dataIsFetching', () => {
        expect(_ACTIONS.dataIsFetching(true)).toEqual({
            type: _TYPE.DATA_IS_FETCHING,
            payload: {
                dataIsFetching: true
            }
        });
    });

    it('should create an action to set dataFetchDidErr', () => {
        expect(_ACTIONS.dataFetchDidErr(true)).toEqual({
            type: _TYPE.DATA_FETCH_DID_ERR,
            payload: {
                dataFetchDidErr: true
            }
        });
    });

    it('should create an action to set dataFetchSuccess', () => {
        expect(_ACTIONS.dataFetchSuccess(true)).toEqual({
            type: _TYPE.DATA_FETCH_SUCCESS,
            payload: {
                dataFetchSuccess: true
            }
        });
    });

    it('should create an action to set robots', () => {
        expect(_ACTIONS.populateRobots(robots)).toEqual({
            type: _TYPE.POPULATE_ROBOTS,
            payload: {
                robots
            }
        });
    });

    it('should handle fetching data', async () => {
        const store = mockStore();
        
        store.dispatch(_ACTIONS.fetchData('https://jsonplaceholder.typicode.com/users'));
        
        const action = store.getActions();
        
        const expectedAction = {
            type: _TYPE.DATA_IS_FETCHING,
            payload: {
                dataIsFetching: true
            }
        };

        expect(action[0]).toEqual(expectedAction);
    });    
})