/**
 * Created by dell on 2017/8/30.
 */
import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import {Menu, Segment, Label, Button} from 'semantic-ui-react';

import MainArea from '../src/component/mainContent/mainArea';
import UserList from '../src/component/UserManage/UserList';
import BlogList from '../src/component/BlogList/List';
import SaleList from '../src/component/BlogList/SaleHome';

import Header from '../src/component/common/header'
import MainNav from '../src/component/common/mainNav'


export default class Dashbord extends React.Component{
	constructor(props){
		super(props)
	}

	render(){

		const ListItemLink = ({to, ...rest}) => (
			<Route path={to} children={({match}) => (
				<span className={match ? 'menu-active main-menu-item' : 'main-menu-item'}>
					<Link to={to} {...rest}>{to == '/user'? '用户':to == '/blog' ? '博客列表':'商店'}</Link>
				</span>
			)} />
		);

		return (
			<div>
				<div>
					<Header/>
					<MainNav>
						<Segment >
							<Menu compact>
								<Menu.Item name='user' ><ListItemLink to="/user" label="user"/></Menu.Item>
								<Menu.Item name='blog' ><ListItemLink to="/blog" label="blog"/></Menu.Item>
								<Menu.Item name='sale' ><ListItemLink to="/sale" label="sale"/></Menu.Item>
							</Menu>
						</Segment>
						{/*<Button basic color='olive'><ListItemLink to="/user" label="user"/></Button>*/}
						{/*<Button basic color='olive'><ListItemLink to="/blog" label="blog"/></Button>*/}
						{/*<Button basic color='olive'><ListItemLink to="/sale" label="sale"/></Button>*/}
					</MainNav>

					<div className="mainContent">
						<Switch>
							<Route exact path="/" component={MainArea}/>
							<Route path="/user" component={UserList}/>
							<Route path="/blog/" component={BlogList}/>
							<Route path="/sale" component={SaleList}/>
						</Switch>
					</div>

				</div>
			</div>
		)
	}
}