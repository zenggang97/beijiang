import React, { Component } from 'react';
import './assets/css/base.css';
import './assets/css/index.css';
import Map from "./model/Map";
import Charts from "./model/Charts";


class App extends Component {
	render() {
		return (
		 	<div className='flex wrapper'>
			 	<Map />
				<Charts />
		 	</div>
		);
	}
}

export default App;
