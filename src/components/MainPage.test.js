import { shallow } from 'enzyme';
import MainPage from './MainPage';
import React from 'react';

let wrapper;
beforeEach(() => {
    const mockProps = {
        robots: [],
        query: ''
    };
    wrapper = shallow(<MainPage {...mockProps}/>);
})

describe('MainPage component', () => {
    it('successfully renders the MainPage component', () => {
        expect(wrapper).toMatchSnapshot();
    });
})