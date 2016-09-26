import React, { Component, PropTypes } from 'react';
import SideBar from './SideBar';

export default class App extends Component {
	static propTypes = {
		children: PropTypes.element
	};

	render() {
		return (
			<div>
				<SideBar />
				{this.props.children}
			</div>
		);
	}
}
