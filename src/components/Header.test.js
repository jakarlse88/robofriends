import { shallow } from "enzyme";
import Header from './Header';
import React from 'react';

describe('Header component', () => {
    it('expects to render the Header component', () => {
        expect(shallow(<Header />)).toMatchSnapshot();
    })
});