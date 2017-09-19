/**
 * Created by dell on 2017/9/14.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import Storage from 'localStorage';
import AddItems from './addtask';
import SearchInput from './itemSearch';
import {List,Button} from 'semantic-ui-react';

export default class AppRoute extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showAddPop:false,
			item:[]
		};
		this.addTask = this.addTask.bind(this);
	}

	componentDidMount() {
		let items = JSON.parse(localStorage.tasks);
		this.setState({
			items:items
		})

	}

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
			styleMB = {marginBottom: '20px',textAlign: 'center'},
			styleMT = {marginTop:'20px',marginBottom:'20px'},
			bottomSty = {borderBottom:'1px solid #ddd',marginBottom:'20px'};

		return (<div className="todolist-container">
			<header className="header" style={styleMB}>
				<h2>TodoList</h2>
				<div className="fa fa-plus" ></div>
			</header>
			<AddItems addTask={this.addTask} />
			<SearchInput/>
			<nav className="menu" style={styleMT}>

				<span className="sub-status-btn"><Link to={'/template2/'}  className={'fa fa-tasks' + (this.props.location.pathname === '/' ? 'active' : '')} >ALL</Link></span>
				<span className="sub-status-btn"><Link to={`/template2/completed`}  className="fa fa-check-circle" >DONE</Link></span>
				<span className="sub-status-btn"><Link to={'/template2/uncompleted'} className="fa fa-clock-o" >UNFINISH</Link></span>
			</nav>
			<List relaxed='very'>{itemlist.map(function (value,index) {
				return (<div style={bottomSty} key={value.id}>
					<h4 as='a'>{value.name}</h4>
					<div><span className="item-desc-info">{value.thought}</span><span className="item-time-info">{value.time}</span></div>
				</div>)
			})}
			</List>

		</div>)
	}
}

