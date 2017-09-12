/**
 * Created by dell on 2017/8/29.
 */
import React from 'react';
import { Header, Segment, Checkbox } from 'semantic-ui-react'

var PRODUCTS = [
	{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
	{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
	{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
	{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class ProductRow extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const name = this.props.stock ? this.props.name:<i style={{color:'red'}}>{this.props.name}</i>;
		return (<div>
			<span className="item-category">{name}</span>
			<span className="item-price">{this.props.price}</span>
		</div>)
	}

}
function ProductCategoryRow(props) {
	return (<div>
				<span>{props.category}</span>
			</div>)
}

class ProductTable extends React.Component{


	render(){
		const rows=[];
		const dataArr=this.props.products;

		var product = {};
		for(let key in dataArr) {
			product[dataArr[key].category] = product[dataArr[key].category]?product[dataArr[key].category]:[];
			product[dataArr[key].category].push(dataArr[key]);
		}

		for(let key in product) {

			rows.push(<ProductCategoryRow category={key}/>);
			product[key].map((value,index)=>(
				rows.push(<ProductRow name={value.name} price={value.price} stock={value.stocked}/>)))
		}

		return (<div>
			<span>Name</span>
			<span>Price</span>
			<div>{rows}</div>
		</div>)
}
}


class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.handleCheckChange = this.handleCheckChange.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e){
		this.props.onFilter(e.target.value)
	}

	handleCheckChange(e){
		this.props.onStock(e.target.value)
	}

	render(){
		return (<div>
			<input
				type="text"
				value={this.props.filterText}
				onChange={this.handleInputChange}/>
			<input
				type="checkbox"
				checked={this.props.inStockOnly}
				onChange={this.handleCheckChange}
			/>{' '}
			Only show products in stock
		</div>)
	}
}

class FilterableProductTable extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			search:'',
			inStockOnly:false
		};
		this.onFilterTextChange = this.onFilterTextChange.bind(this);
		this.onInStockOnly = this.onInStockOnly.bind(this);
	}

	onFilterTextChange(filterText){
		this.setState({
			search: filterText
		})
	}

	onInStockOnly(stockVal){
		this.state({
			inStockOnly:stockVal
		})
	}

	render(){
		return (
			<div>
				<SearchBar
					filterText={this.state.search}
					inStockOnly={this.state.inStockOnly}
					onFilter={this.onFilterTextChange}
					onStock={this.onInStockOnly}
				/>
				<ProductTable
					products={PRODUCTS}
					filterText={this.state.search}
					inStockOnly={this.state.inStockOnly}
				/>
			</div>

		)
	}
}

export default FilterableProductTable;