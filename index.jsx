import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Hello extends React.Component {
	constructor(props){
			super(props);      
			this.state = {
				name: 'Hello'
			}
	}

	//读取后台数据，更新state的name
	async fetchData(){
		try{
			let response = await axios({
				method: 'GET',
				headers: { 'Accept': 'application/json, text/plain, */*' },
				url: '/api'
			})
			this.setState({name: response.data})
		}catch(error){
			console.log(error);
		}
	}

	render() {
		let {name} = this.state
		let {fetchData} = this
		return (
			<div>
				<span>{name}</span>
				<button onClick={fetchData.bind(this)}></button>
			</div>
		)
	}
}

ReactDOM.render(
	<Hello/>,
	document.getElementById("example")
)



