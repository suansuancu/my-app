import React from 'react';
import logo from '../../../src/asset/img/logo.svg'

export default class Header extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<div className="header-react"><img className="header-logo" src={logo} alt=""/></div>
			</div>
		)
	}
}