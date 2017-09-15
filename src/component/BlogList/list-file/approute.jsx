/**
 * Created by dell on 2017/9/14.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import Storage from 'localStorage';
import AddItems from './addtask';
import {List,Button} from 'semantic-ui-react';

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
			styleMB = {marginBottom:'20px'},
			styleMT = {marginTop:'20px',marginBottom:'20px'};

		return (<div>
			<header className="header" style={styleMB}>
				<h2>TodoList</h2>
				<div className="fa fa-plus" ></div>
			</header>
			<AddItems addTask={this.addTask} />
			<nav className="menu" style={styleMT}>
				<Button.Group>
					<Button><Link to={'/blog/template2'}  className={'fa fa-tasks' + (this.props.location.pathname === '/' ? 'active' : '')} />ALL</Button>
					<Button.Or />
					<Button><Link to={`/blog/template2/completed`}  className="fa fa-check-circle" />DONE</Button>
					<Button.Or />
					<Button><Link to={'/blog/template2/uncompleted'} className="fa fa-clock-o" />UNFINISH</Button>
				</Button.Group>
			</nav>
			<List relaxed='very'>{itemlist.map(function (value,index) {
				return (<List.Item key={value.id}>
					<List.Header as='a'>{value.name}</List.Header>
					<List.Description>{value.thought}<a></a> {value.time}</List.Description>
				</List.Item>)
			})}
			</List>


		</div>)
	}
}

