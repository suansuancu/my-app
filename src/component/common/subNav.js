import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import {Menu, Segment, Label, Button} from 'semantic-ui-react';

export default class SubNav extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<div className="nav-sub-menu nav-react">
					<Label as="sub" color="pink" tag>二级菜单</Label>
					{this.props.children}
				</div>
			</div>
		)
	}
}