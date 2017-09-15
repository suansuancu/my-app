/**
 * Created by dell on 2017/8/29.
 */
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
// import TaskList from './tasksList';
// import Task from './task';
import AppRoute from './approute';

export default class Template2 extends React.Component {

	render() {
		return(
			<Router>
				<Route path="/" component={AppRoute}>
					{/*<Route path="/tasks/:type" component={TaskList}/>*/}
					{/*<Route path="/task/:id" component={Task}/>*/}
				</Route>
			</Router>
		)

	}
}