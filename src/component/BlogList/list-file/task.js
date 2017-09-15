/**
 * Created by dell on 2017/9/14.
 */
import React from 'react';

class Task extends React.Component {
	constructor(props){
		super(props);
		this.finishTask = this.finishTask.bind(this);
		this.taskId = parseInt(props.params.id, 10);
		this.state = {task:null}
	}

	finishTask(){
		e.preventDefault();
		let thought = this.refs.thought.value.trim();
		if(!thought) {
			this.refs.thought.focus();
			return;
		}
		this.props.finishTask(this.taskId, thought);
	}

	render(){
		let task = null;
		this.props.tasks.forEach(function (val, index) {

		});
		return (
			<div></div>
		)
	}
}
