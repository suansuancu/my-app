/**
 * Created by dell on 2017/8/29.
 */
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import Item from './item';

export default class ItemList extends React.Component {
	constructor(props){
		super(props)
	}

	render() {
		const itemlist = this.props.tasks;
		return(
			<ul>
				{
					itemlist.map(function(value, index){

						return <Item task={value} key={index}/>
					})
				}
			</ul>
		)

	}
}