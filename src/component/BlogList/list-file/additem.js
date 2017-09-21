/**
 * Created by dell on 2017/9/14.
 */
import React from 'react';
import ClassNames from 'classnames';
import {Button, Form, Input} from 'semantic-ui-react';

export default class AddItems extends React.Component {
	constructor(props) {
		super(props);
		this.getRefData = this.getRefData.bind(this);
	}

	getRefData(e){
		let thisTitle = this.refs.title.value.trim(),
			thisDetail = this.refs.detail.value.trim();
		this.props.addTask(thisTitle, thisDetail);
	}

	render(){
		return (<div>
			<input type="text" ref="title"/>
			<input type="text" ref="detail"/>
			<button type="submit" onClick={this.getRefData}>SUBMIT</button>
		</div>)
	}
}

