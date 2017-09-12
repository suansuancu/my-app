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
import fruit from '../../../src/asset/img/fruit.svg'
import meat from '../../../src/asset/img/meat.svg'
import vegetable from '../../../src/asset/img/vegetable.svg'

import Fruit from '../../component/BlogList/SaleList/fruits';
import Meat from  '../../component/BlogList/SaleList/meat';
import Vegetables from '../../component/BlogList/SaleList/vegetables';

export default class SaleList extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(ev){
		ev.preventDefault();

	}

	render(){
		return (<div>
					<SubNav>
						<Segment >
							<Menu compact>
								<Menu.Item name='user' ><Link to="/sale/fruit" label="fruit"><img src={fruit} alt="fruit"/></Link></Menu.Item>
								<Menu.Item name='blog' ><Link to="/sale/meat" label="meat"><img src={meat} alt="meat"/></Link></Menu.Item>
								<Menu.Item name='sale' ><Link to="/sale/vegetable" label="vegetable"><img src={vegetable} alt="vegetable"/></Link></Menu.Item>
							</Menu>
						</Segment>
						{/*<Button basic color='olive'><Link to="/sale/fruit" label="fruit"><img src={fruit} alt="fruit"/></Link></Button>*/}
						{/*<Button basic color='olive'><Link to="/sale/meat" label="meat"><img src={meat} alt="meat"/></Link></Button>*/}
						{/*<Button basic color='olive'><Link to="/sale/vegetable" label="vegetable"><img src={vegetable} alt="vegetable"/></Link></Button>*/}
					</SubNav>
					<div>
						<Switch>
							<Route exact path="/sale" component={Fruit}/>
							<Route path="/sale/fruit" component={Fruit}/>
							<Route path="/sale/meat" component={Meat}/>
							<Route path="/sale/vegetable" component={Vegetables}/>
						</Switch>
					</div>
				</div>)
	}
}
