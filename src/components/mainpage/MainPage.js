import './MainPage.css';
import CardList from '../cardlist/CardList';
import ErrorBoundary from '../errorboundary/ErrorBoundary';
import Header from '../header/Header';
import React, { Component } from 'react';
import Scroll from '../scroll/Scroll';
import SearchBox from '../searchbox/SearchBox';

export default class MainPage extends Component {
    filterRobots = robots => {
        const { query } = this.props;
        const filteredRobots = robots.length ?
            robots.filter(robot => {
                return robot.name.toLowerCase().includes(query.toLowerCase());
            })
            : [];
        return filteredRobots;
    }

    render() {
        const {
            actions,
            robots,
        } = this.props;

        return !robots.length ?
            <h1>Loading</h1>
            : (
                <div className='tc'>
                    <Header />
                    <SearchBox
                        searchChange={e => actions.setQuery(e.target.value)} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={this.filterRobots(robots)} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}