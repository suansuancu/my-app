/**
 * Created by dell on 2017/9/14.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import Storage from 'localStorage';
import AddItems from './addtask';

export default class AppRoute extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showAddPop:false,
			item:[]
		};
		this.addTask = this.addTask.bind(this);
		// this.finishTask = this.finishTask.bind(this);
		// this.showPop = this.showPop.bind(this);
		// this.hidePop = this.hidePop.bind(this);
		// this.storage = Storage();
	}

	componentDidMount() {
		let items = window.localStorage.getItem('tasks') || [];
		this.setState({
			items:items
		})
	}

	// showPop(){
	// 	this.setState({
	// 		showAddPop:true
	// 	})
	// }
	// hidePop(){
	// 	this.setState({
	// 		showAddPop:false
	// 	})
	// }

	// addTask(name, desc) {
	// 	let current = new Date(),
	// 		taskId = this.state.items[0] ? this.state.items[0].id + 1:1,
	// 		created = (current.getMonth() + 1) + '月' +current.getDate() + '日' +current.getHours() + ':' + (current.getMinutes() < 10 ? '0' + current.getMinutes() : current.getMinutes()),
	// 	item = {
	// 		id : taskId,
	// 		name : name,
	// 		desc: desc,
	// 		created : created,
	// 		state: 0,
	// 		finish : 0,
	// 		thought: 0
	// 	};
	// 	this.state.items.unshift(item);
	// 	this.setState({items:this.state.items});
	// 	this.storage.set('task', this.state.items);
	// }

	addTask(name, desc){
		console.log(this.state.item);
		let current = new Date(),
			taskId = this.state.item.length == 0 ? 1 : this.state.item.length + 1,
			created = (current.getMonth()+1) + "月" + current.getDate() + "日" + current.getHours() + ":" + (current.getMinutes() < 10 ? "0" + current.getMinutes() : current.getMinutes());

		let item = {
			id: taskId,
			name : name,
			thought : desc,
			time : created,
		};
		this.state.item.unshift(item);
		this.setState({item : this.state.item});
		window.localStorage.setItem('tasks', JSON.stringify(this.state.item));
	}
	render(){
		let itemlist = JSON.parse(window.localStorage.getItem('tasks')),
			style = {marginRight:'20px'};

		return (<div>
			<header className="header">
				<h2>TodoList</h2>
				<div className="fa fa-plus" ></div>
			</header>
			<div className="itemList">{itemlist.map(function (value,index) {
				return <div key={value.id}><span style={style}>{`id:` + value.id}</span><span style={style}>{`name:` + value.name}</span><span style={style}>{`desc:` + value.thought}</span></div>
			})}</div>
			<AddItems addTask={this.addTask} />
			<nav className="menu">
				<ul>
					<li><Link to={'/tasks'}  className={'fa fa-tasks' + (this.props.location.pathname === '/' ? 'active' : '')} />ALL</li>
					<li><Link to={`/tasks/completed`}  className="fa fa-check-circle" />DONE</li>
					<li><Link to={'/tasks/uncompleted'} className="fa fa-clock-o" />UNFINISH</li>
				</ul>
			</nav>
		</div>)
	}
}

