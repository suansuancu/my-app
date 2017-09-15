/**
 * Created by dell on 2017/9/14.
 */
import React from 'react';
import ClassNames from 'classnames';

export default class AddItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
		this.additem = this.additem.bind(this);
		this.stopPopg  = this.stopPopg.bind(this);
	}

	additem(event){
		event.preventDefault();
		let name = this.refs.name.value.trim(),
			desc = this.refs.desc.value.trim();
		if(!name){
			alert('Please input name');
			this.refs.name.focus();
		}
		if(!desc){
			alert('Please input desc');
			this.refs.desc.focus();
		}
		this.props.addTask(name,desc);

		this.refs.name.value = '';
		this.refs.desc.value = '';
	}

	stopPopg(event){
		event.stopPropagation();
	}

	render(){
		return (<div onClick={this.stopPopg}>
			<div className="form-group">
				<label className="name">Name</label>
				<input type="text" ref="name"/>
			</div>
			<div className="form-group">
				<label className="desc">Desc</label>
				<input type="text" ref="desc"/>
			</div>
			<button type="submit" onClick={this.additem} >SUBMIT</button>
		</div>)
	}
}

