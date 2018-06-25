import './MainPage.css';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

export default class MainPage extends Component {
    filterRobots = robots => {
        const { query } = this.props;
        const filteredRobots = robots.length ?
            robots.filter(robot => {
                return robot.name.toLowerCase().includes(query.toLowerCase());
            })
            : null;
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