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

export default class Template3 extends React.Component {
	constructor(props){
		super(props)
	}

	render() {
		const Child =({match}) => (
			<div>
				<p>{match.params.id}</p>
			</div>
		);

		return(
			<Router>
				<div>
					<ul>
						<li><Link to="/blog/template3/AccTest" />AccTest</li>
						<li><Link to="/blog/template3/BccTest" />BccTest</li>
						<li><Link to="/blog/template3/CccTest" />CccTest</li>
						<li><Link to="/blog/template3/DccTest" />DccTest</li>
						<li><Link to="/blog/template3/EccTest" />EccTest</li>
					</ul>
					<Route path="/blog/template3/:id" component={Child}/>
				</div>
			</Router>
		)
	}
}

class AccTest extends React.Component{
	render(){
		return (<div>
			AAA
		</div>)
	}
}
class BccTest extends React.Component{
	render(){
		return (<div>
			BBB
		</div>)
	}
}
class CccTest extends React.Component{
	render(){
		return (<div>
			CCC
		</div>)
	}
}
class DccTest extends React.Component{
	render(){
		return (<div>
			DDD
		</div>)
	}
}
class EccTest extends React.Component{
	render(){
		return (<div>
			EEE
		</div>)
	}
}
