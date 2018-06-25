import { shallow } from 'enzyme';
import App from './App';
import React from 'react';

describe('App component', () => {
    it('expects to render the App component', () => {
        const mockStore = {
            robots: [],
            query: ''
        };
        expect(shallow(<App />)).toMatchSnapshot();
    });
})