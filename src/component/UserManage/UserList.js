/**
 * Created by dell on 2017/8/29.
 */
import React from 'react';
import {Menu, Segment,Button} from 'semantic-ui-react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import SubNav from '../../../src/component/common/subNav';
import Emmy from '../../../src/component/UserManage/emmy';
import Jenny from '../../../src/component/UserManage/jenny';
import Sunny from '../../../src/component/UserManage/sunny';
import Molly from '../../../src/component/UserManage/molly';



export default class UserList extends React.Component {
	constructor(props){
		super(props)
	}

	routerWillLeave(nextLocation){
		console.log('i will redirect')
	}

	render(){

		return (<div>
					<SubNav>
						<Segment >
							<Menu compact>
								<Menu.Item name='emmy' ><Link to="/user/emmy" label="emmy">Emmy</Link></Menu.Item>
								<Menu.Item name='jenny' ><Link to="/user/jenny" label="jenny">Jenny</Link></Menu.Item>
								<Menu.Item name='sunny' ><Link to="/user/sunny" label="sunny">Sunny</Link></Menu.Item>
								<Menu.Item name='molly' ><Link to="/user/molly" label="molly">Molly</Link></Menu.Item>
							</Menu>
						</Segment>
						{/*<Button basic color='olive'><Link to="/user/emmy" label="emmy">Emmy</Link></Button>*/}
						{/*<Button basic color='olive'><Link to="/user/jenny" label="jenny">Jenny</Link></Button>*/}
						{/*<Button basic color='olive'><Link to="/user/sunny" label="sunny">Sunny</Link></Button>*/}
						{/*<Button basic color='olive'><Link to="/user/molly" label="molly">Molly</Link></Button>*/}
					</SubNav>
					<div>
						<Switch>
							<Route exact path="/user" component={Emmy}/>
							<Route exact path="/user/emmy" component={Emmy}/>
							<Route path="/user/jenny" component={Jenny}/>
							<Route path="/user/sunny" component={Sunny}/>
							<Route path="/user/molly" component={Molly}/>
						</Switch>
					</div>

		 		</div>)
	}
}
