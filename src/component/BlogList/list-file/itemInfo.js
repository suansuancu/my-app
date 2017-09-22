/**
 * Created by dell on 2017/9/22.
 */
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';

export default class ItemInfo extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (<div>

			<h3>{this.props.tasks.title}</h3>
			<span>{this.props.tasks.time}</span>
			<span>{this.props.tasks.detail}</span>
			<div>
				Thought:
				<textarea>

				</textarea>
			</div>
		</div>)
	}
}
