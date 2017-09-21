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
import AppRoute from './approute';

export default class Template2 extends React.Component {

	render() {
		return(
			<Router>
				<Route path="/" component={AppRoute}>
					{/*<Route path="/template2/:type" component={TaskList} />*/}
					{/*<Route path="/template2/:id" component={Task} />*/}
				</Route>

			</Router>
		)

	}
}