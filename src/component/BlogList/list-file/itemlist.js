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

import noData from '../../../asset/img/no-data.svg';

export default class ItemList extends React.Component {
	constructor(props){
		super(props)
	}

	render() {
		const itemlist = this.props.tasks;
		if(itemlist) {
			return(
				<ul className="item-list">

					{
						itemlist.map(function(value, index){

							return <Item task={value} key={index}/>
						})
					}
				</ul>
			)
		}else {
			return (<img src={noData} alt="nodata"/>)
		}


	}
}