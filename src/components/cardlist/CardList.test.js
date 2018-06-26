import { shallow } from 'enzyme';
import CardList from './CardList';
import React from 'react';

describe('CardList component', () => {
    it('expects to render the CardList component', () => {
        const mockRobots = [
            {
                id: 1,
                name: 'Jon Snow',
                username: 'JonJon',
                email: 'jon@gmail.com'
            }
        ];

        expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
    })
})