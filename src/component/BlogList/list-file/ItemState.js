/**
 * Created by dell on 2017/9/21.
 */
import React from 'react';
export default class StateItem extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (<div className="state-outer">
			<div className="sub-status-btn">ALL</div>
			<div className="sub-status-btn">UNFINISH</div>
			<div className="sub-status-btn">FINISH</div>
		</div>)
	}
}