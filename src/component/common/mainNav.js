import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Menu, Segment, Label, Button} from 'semantic-ui-react';

export default class MainNav extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<div className="nav-main-menu nav-react">
					<Label as="main" color="teal" tag>一级菜单</Label>
					<span>
						{this.props.children}
					</span>
				</div>
			</div>
		)
	}
}