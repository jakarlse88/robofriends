import React, { Component, Fragment } from 'react';
import CounterButton from '../counterbutton/CounterButton';

export default class Header extends Component {
    shouldComponentUpdate = (nextProps, nextState) => {
        return false;
    }

    render() {
        return (
            <Fragment>
                <h1 className='f1'>RoboFriends</h1>
                <CounterButton color={'red'} />
            </Fragment>
        )
    }
}