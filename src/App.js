import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';

import Dashbord from '../src/dashbord'


class App extends Component {
	constructor(props){
		super(props);
	}
	render() {


		return (
			<Router>
				<div>
					<Route path="/" component={Dashbord} />

				</div>
			</Router>
		);
	}
}

export default App;
