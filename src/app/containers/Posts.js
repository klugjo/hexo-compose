import React, { Component, PropTypes } from 'react';
import SideBar from './SideBar';
import Home from './HomePage';

export default class Posts extends Component {
	static propTypes = {
		children: PropTypes.element
	};

	render() {
		return (
			<div className="posts-container">
				<div className="sidebar-container">
					<SideBar />
				</div>
				<div className="main-container">
					{this.props.children}
				</div>
			</div>
		);
	}
}
