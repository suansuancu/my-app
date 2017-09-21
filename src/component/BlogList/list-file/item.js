/**
 * Created by dell on 2017/9/14.
 */
import React from 'react';
import {Link} from 'react-router-dom';

export default class Item extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		const stateCls = this.props.state == 1 ? 'finished' :'unfinish';

		return (<li>
			<i className={stateCls}></i>
			<h2>{this.props.task.title}</h2>
			<span>{this.props.task.detail}</span>
			<span>{this.props.task.time}</span>
		</li>)

	}
}