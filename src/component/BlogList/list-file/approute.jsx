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
		this.finishTask = this.finishTask .bind(this);
	}

	componentDidMount() {

		this.setState({
			itemsAry: JSON.parse(window.localStorage.getItem('lists'))
		})
	}

	addItem(title, detail){
		let current = new Date(),
			storageDataLen = JSON.parse(window.localStorage.getItem('lists')).length,
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
	finishTask(){

	}

	render(){

		return (<div className="todolist-container">
			<AddItem addTask={this.addItem}/>
			<SearchItem/>
			<StateItem/>
			<Switch>
				<Route path="/blog/template2(/:type)" component={ItemList} />
				<Route path="/blog/template2/:id" component={ItemInfo} />
			</Switch>

			{this.props.children && React.cloneElement(this.props.children, {
				tasks : this.state.itemsAry,
				finishTask : this.finishTask
			})}
		</div>)
	}
}

