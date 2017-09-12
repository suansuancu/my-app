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
import Template1 from '../BlogList/list-file/template1';
import Template2 from '../BlogList/list-file/template2';
import Template3 from '../BlogList/list-file/template3';

export default class BlogList extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (<div>
					<SubNav>
						<Segment >
							<Menu compact>
								<Menu.Item name='template1' ><Link to="/blog/template1" label="template1">template1</Link></Menu.Item>
								<Menu.Item name='template2' ><Link to="/blog/template2" label="template2">template2</Link></Menu.Item>
								<Menu.Item name='template3' ><Link to="/blog/template3" label="template3">template3</Link></Menu.Item>
							</Menu>
						</Segment>
						{/*<Button basic color='olive'><Link to="/blog/template1" label="template1">template1</Link></Button>*/}
						{/*<Button basic color='olive'><Link to="/blog/template2" label="template2">template2</Link></Button>*/}
						{/*<Button basic color='olive'><Link to="/blog/template3" label="template3">template3</Link></Button>*/}
					</SubNav>
					<div>
						<Switch>
							<Route exact path="/blog" component={Template1}/>
							<Route path="/blog/template1" component={Template1}/>
							<Route path="/blog/template2" component={Template2}/>
							<Route path="/blog/template3" component={Template3}/>
						</Switch>
					</div>

				</div>)
	}
}