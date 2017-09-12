/**
 * Created by dell on 2017/8/29.
 */
import React from 'react';

const user = {
	firstName: 'Harper',
	lastName: 'Perez'
};

let formatName = (user) => {
	return user.firstName + ' ' + user.lastName;
};

let xssLink = escape(<a href="www.baidu.com">XSSLink</a>);

let element = React.createClass({
	render(){
		return (<div>
			{xssLink}
		</div>)
	}
});
function Welcome(props) {
	return <p>welcome {props.data.name},age: {props.data.age}</p>
}
const data = {name:'www',age:23}
class App extends React.Component {
	render(){
		return (
			<div><Welcome data={data}/>
			</div>
		)
	}
}

function dataformate(data){
	return data.toLocaleString();
}
const userdata = {
	author:{
		name: 'wxj',
		age:23
	},
	text:'this is a test text',
	date:'2017-08-19'

};
class Avatar extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>{this.props.user.age}</div>
		)
	}
}
function UserInfo(props) {
	return (
		<div className="UserInfo">
			<Avatar user={props.author} />
			<div className="UserInfo-name">
				{props.author.name}
			</div>
		</div>
	)
}
class Commont extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (<div className="Comment">
			<UserInfo author={userdata.author}/>
			<div className="Comment-text">
				{this.props.text}
			</div>
			<div className="Comment-date">
				{dataformate(this.props.date)}
			</div>
		</div>)
	}
}

class CommentList extends React.Component{
	render(){
		return <Commont author={userdata.author} text={userdata.text} date={userdata.date}/>
	}
}

class SmallClock extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div>{this.props.name}</div>
	}
}

class Clock extends React.Component{
	constructor(props) {
		super(props); // Class components should always call the base constructor with props.
		this.state = {date: new Date()};
	}

	//
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	//
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick(e){
		this.setState({
			date:new Date()
		})

	}
	render(){
		{/*return <div>{this.state.date.toLocaleTimeString()}</div>*/}
		return (<div>
				<div>{this.props.from}</div>
				<SmallClock name={this.props.from}/>
			</div>

				)
	}
}

function BigClock(props) {
	return <Clock from="Clock111"/>
}

class Counter extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			num : 0
		}
	}

	componentDidMount() {
		this.timer = setInterval(
			()=>this.addByStep(),
			1000
		)
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	addByStep(){
		let prev = this.state;
		let next = this.props;
		this.setState((prev, next) => ({
			num: Number(prev.num) + Number(next.number)
		}))
	}

	render(){
		return (
			<div>{this.state.num}</div>
		)
	}
}

class ShowCounter extends React.Component {
	render(){
		return (
			<div>
				<Counter number="1"/>
				<Counter number="2"/>
				<Counter number="3"/>
			</div>

		)
	}
}

class Toggle extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isToggle : true
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		this.setState(prevstate=>({
			isToggle: !prevstate.isToggle
		}))
	}

	render(){

		return (
			<div onClick={this.handleClick}>
				{this.state.isToggle?'ON':'OFF'}
			</div>
		)
	}
}

class ClickToggle extends React.Component{
	render(){
		return <Toggle/>
	}
}

function UserGreeting(props) {
	return (
		<div>User login</div>
	)
}
function GuestGreeting(props) {
	return (
		<div>Please Login</div>
	)
}

class Greeting extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		if(this.props.isLoged == false) {
			return <UserGreeting/>
		}else {
			return <GuestGreeting/>
		}

	}
}

function LoginBtn(props) {
	return (
		<button onClick={props.onClick}>Login</button>
	)
}
function LogoutBtn(props) {
	return (
		<button onClick={props.onClick}>Logout</button>
	)
}

class LoginControl extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isLoged: true
		}
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleLoginClick(){
		this.setState({
			isLoged: false
		})
	}
	handleLogoutClick(){
		this.setState({
			isLoged: true
		})
	}

	render(){
		let button;
		return (<div>
			<Greeting isLoged={this.state.isLoged} />
			{this.state.isLoged ?
				<LoginBtn onClick={this.handleLoginClick} /> : <LogoutBtn onClick={this.handleLogoutClick} />
			}
		</div>)
	}
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

class Mailbox extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const unreadMessages = this.props.unreadMessages;
		return (
			<div>
				<h1>Hello!</h1>
				{unreadMessages.length > 0 &&
				<h2>
					You have {unreadMessages.length} unread messages.
				</h2>
				}
			</div>
		);
	}

}

function showMailBox() {
	return <Mailbox unreadMessages={messages} />
}

function WarnBanner(props){
	if(!props.warning){
		return null;
	} else {
		return <div>This is a Warning!</div>
	}
}
class PageShow extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isShow: true
		}
		this.handleClick= this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(
		(prev)=>({
			isShow: !prev.isShow
		})
		)
	}

	render(){
		return (
			<div>
				<button onClick={this.handleClick}>{this.state.isShow?'OFF':'ON'}</button>
				<WarnBanner warning={this.state.isShow} />
			</div>

		)
	}

}


function ListItems(props) {

	return (<li>{props.num}</li>)
}

class ListControl extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const arr =[1,2,3,4,5];
		return <ul>{arr.map((number) => (
			<ListItems key={number} num={number} />
		))}</ul>;
	}
}

class FormSubmit extends React.Component{
	constructor(props){
		super(props);
		this.state={
			value:'Apple'
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(e){
		this.setState({
			value :e.target.value
		})
	}

	handleSubmit(e){
		e.preventDefault();
		alert('submit'+ this.state.value)
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<select value={this.state.value} onhange={this.handleInput}>
					<option value='orange'>Orange</option>
					<option value='Apple'>Apple</option>
					<option value='Bnana'>Bnana</option>
					<option value='melon'>melon</option>
					<option value='flower'>flower</option>
				</select>
			</form>
		)
	}
}
class Reservation extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			ifChecked: true,
			num: 0,
			word: 'aaa'
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e){
		let target = e.target;
		let value = target.name == 'ifChecked' ? target.checked : target.value ;
		this.setState({
			[target.name] : value
		})
	}

	handleSubmit(e){

		let target = e.target;
		let output = target.name='ifChecked'?target.checked :target.value;
		alert(output);
		e.preventDefault();
	}

	render(){
		return (<form>
			<input name="ifChecked" type="checkbox" value={this.state.ifChecked} onChange={this.handleInputChange}/>
			<input name="num" type="number" onChange={this.handleInputChange} value={this.state.num}/>
			<input name="word" type="text" onChange={this.handleInputChange} value={this.state.word}/>
			<button onSubmit={this.handleSubmit}/>
		</form>)
	}
}

function meat4Egg(count) {
	return count*4;
}
function egg4Meat(count) {

	return count/4;
}

class PriceInput extends React.Component{
	constructor(props){
		super(props);
		this.handleInputCount = this.handleInputCount.bind(this);
	}

	handleInputCount(e){
		this.props.onPriceChange(e.target.value)
	}

	render(){
		return (<fieldset>
			<legend>{this.props.typeshow}</legend>
			<input type="text" value={this.props.price} onChange={this.handleInputCount}/>
		</fieldset>)
	}
}

class CalculatePrice extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			type: 'meat',
			priceVal:''
		};
		this.handleEggSet= this.handleEggSet.bind(this);
		this.handleMeatSet = this.handleMeatSet.bind(this);
	}

	handleMeatSet(priceValue){
		this.setState({
			type:'meat',
			priceVal: priceValue
		})
	}
	handleEggSet(priceValue){
		this.setState({
			type:'egg',
			priceVal: priceValue
		})
	}

	render(){
		const statePrice = this.state.priceVal;
		const stateType = this.state.type;
		const converseMeat = stateType == 'meat' ? statePrice : meat4Egg(statePrice);
		const converseEgg = stateType == 'egg'? statePrice :egg4Meat(statePrice);

		return (<div>
			<PriceInput
				typeshow='meat'
				price={converseMeat}
				onPriceChange={this.handleMeatSet}
			/>
			<PriceInput
				typeshow='egg'
				price={converseEgg}
				onPriceChange={this.handleEggSet}
			/>
		</div>)
	}
}



function CustomsInputText(props) {
	return (<div>
		<input type="text" ref={props.refInput}/>
	</div>)
}
function Parent(props){
	return (<div>
		<CustomsInputText refInput={props.refInput}/>
	</div>)
}

class GrandParent extends React.Component{

	render(){
		return (
			<Parent refInput={el=>this.inputElement = el}/>
		)
	}

}
class UNameForm extends React.Component{
	constructor(props){
		super(props);
		this.handleSubmit =this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		console.log(this.inputElement.value);
	}

	render(){
		return (<form onSubmit={this.handleSubmit}>
			<input type="text" defaultValue={'aaa'} ref={el=>this.inputElement = el} />
			<input type="submit" />
		</form>)
	}
}

class NameForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			value:''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		console.log(this.state.value);
	}

	handleChange(e){
		this.setState({
			value:e.target.value
		})
	}

	render(){
		return (<form onSubmit={this.handleSubmit}>
			<input type="text"  value={this.state.value} onChange={this.handleChange}/>
			<input type="submit"/>
		</form>)
	}
}
export default UNameForm;