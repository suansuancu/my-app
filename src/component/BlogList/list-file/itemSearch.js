
/**
 * Created by dell on 2017/9/19.
 */
import React from 'react';
import serachlogo from '../../../asset/img/app-search.svg';
export default class SearchText extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (<div>
			<input className="search-text-input" type="text" placeholder="search text"/>
			<img className="search-confirm-btn" src={serachlogo} alt="searchlogo"/>
		</div>)
	}
}