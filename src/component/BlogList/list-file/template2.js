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
import ItemInfo from './itemInfo';
import ItemList from './itemlist';

export default class Template2 extends React.Component {

	render() {
		return(<Router>
				<AppRoute />
			</Router>
		)

	}
}