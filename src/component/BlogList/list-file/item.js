/**
 * Created by dell on 2017/9/14.
 */
import React from 'react';
import {Link} from 'react-router';

class Item extends React.Component {
	render(){
		let task = this.props.task;
		if(task.state == 0) {
			return (<div>
				<li>
					<p className="task-name">{task.name}<span>{task.created}</span></p>
					<p><i className="fa fa-clock-o unfinished"></i></p>
					<Link to={`/task/${task.id}`} />
				</li>
			</div>)
		}else {
			return (<div>
				<li>
					<p className="task-name">{task.name}<span>{task.created}</span></p>
					<p><i className="fa fa-check-square-o finished"></i></p>
					<Link to={`/task/${task.id}`} />
				</li>
			</div>)
		}

	}
}
