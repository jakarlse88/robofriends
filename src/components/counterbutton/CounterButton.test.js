import { shallow } from 'enzyme';
import CounterButton from './CounterButton';
import React from 'react';

describe('CounterButton component', () => {
    it('expects to render the CounterButton component', () => {
        const mockColor = 'red';

        expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
    });

    it('correctly increments counter', () => {
        const mockColor = 'red';
        const wrapper = shallow(<CounterButton color={mockColor} />);

        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({ count: 1 });
    });

    it('correctly receives a color prop', () => {
        const mockColor = 'pink';
        const wrapper = shallow(<CounterButton color={mockColor}/>);

        expect(wrapper.props().color).toEqual('pink');
    })
})