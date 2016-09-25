import React, { Component, PropTypes } from 'react';
import SideBar from './SideBar';
import Home from './HomePage';

export default class Posts extends Component {
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
