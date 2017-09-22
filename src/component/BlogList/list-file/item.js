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
			<Link to={`/blog/template2/${this.props.task.id}`} >
				<i className={stateCls}></i>
				<h3>{this.props.task.title}</h3>
				<span className="item-desc-info">{this.props.task.detail}</span>
				<span className="item-time-info">{this.props.task.time}</span>
			</Link>
		</li>)

	}
}