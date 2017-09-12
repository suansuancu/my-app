/**
 * Created by dell on 2017/8/29.
 */

import React from 'react';

export default class Sunny extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {

		fetch('https://api.github.com/users/chriscoyier/repos')
			.then(response => response.json())
			.then(data => {
				// data就是我们请求的repos
				console.log(data);
			});
	}

	handleClick(e){
		this.textInput.focus()
	}

	render() {
		return(
			<div>
				<input type="text" onClick={this.handleClick}/>
				<input type="text" ref={(input)=>this.textInput = input} />
			</div>
		)

	}
}