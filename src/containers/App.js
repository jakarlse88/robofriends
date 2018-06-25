import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ACTIONS from '../actions/actions';
import React, { Component } from 'react';
import MainPage from '../components/MainPage';


class App extends Component {
	constructor(props) {
		super(props);

		const { actions } = props;

		actions.fetchData('https://jsonplaceholder.typicode.com/users');
	}

	render() {
		return <MainPage
			robots={this.props.robots}
			query={this.props.query}
			actions={this.props.actions} />;
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