/**
 * Created by dell on 2017/9/14.
 */
import React from 'react';
import AddItem from './additem';
import SearchItem from './itemSearch';
import StateItem from './ItemState'
import ItemList from './itemlist'

export default class AppRoute extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			itemsAry:[]
		};
		this.addItem = this.addItem.bind(this);
	}

	addItem(title, detail){
		let current = new Date(),
			storageDataLen = JSON.parse(window.localStorage.getItem('tasks')).length || false,
			itemId = storageDataLen == 0 ? 1 :storageDataLen + 1,
			time = (current.getMonth() + 1) + "月" + current.getDate() + "日" + current.getHours() + ":" + (current.getMinutes() > 10 ? current.getMinutes() : '0' + current.getMinutes()),
		    item = {id: itemId, title: title, detail:detail, state: 0, time:time},
			savedAry =JSON.parse(window.localStorage.getItem('lists')) || [];
		savedAry.push(item);
		
		window.localStorage.setItem('lists', JSON.stringify(savedAry));
		this.setState({
			itemsAry: savedAry
		})
	}

	render(){
		return (<div>
			<AddItem addTask={this.addItem}/>
			<SearchItem/>
			<StateItem/>
			<ItemList/>
		</div>)
	}
}

