import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import React, { Component } from 'react';
import Header from '../components/Header';
import ErrorBoundary from '../components/ErrorBoundary';
import CardList from '../components/CardList';
import './MainPage.css';


export default class MainPage extends Component {
	render() {
		const {
			actions,
			robots,
			query
		} = this.props;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(query.toLowerCase());
		});

		return !robots.length ?
			<h1>Loading</h1>
			: (
				<div className='tc'>
					<Header />
					<SearchBox
						searchChange={e => actions.setQuery(e.target.value)} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
}