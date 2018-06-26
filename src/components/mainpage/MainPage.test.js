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

    it('filters robots correctly', () => {
        const mockProps = {
            robots: [
                {
                    id: 3,
                    name: 'John',
                    email: 'john@gmail.com'
                }
            ],
            query: 'a'
        };
        const wrapper = shallow(<MainPage {...mockProps} />);
        expect(wrapper.instance().filterRobots([])).toEqual([]);
        expect(wrapper.instance().filterRobots(mockProps.robots)).toEqual([]);
    });
})