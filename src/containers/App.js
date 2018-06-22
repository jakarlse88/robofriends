import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ACTIONS from '../actions/actions';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import Header from '../components/Header';


class App extends Component {
	constructor(props) {
		super(props);

		const { actions } = props;

		actions.fetchData('https://jsonplaceholder.typicode.com/users');
	}

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

const mapStateToProps = state => {
	return {
		query: state.query,
		robots: state.robots
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(ACTIONS, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);