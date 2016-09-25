import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import { Link } from 'react-router';

export default class SideBar extends Component {
	static propTypes = {
		hexoPosts: PropTypes.object.isRequired,
		selectPost: PropTypes.func.isRequired
	};

	render() {
		const {hexoPosts, selectPost} = this.props;
		return (
			<div className="sidebar">
				<div className="title">Posts</div>
				<ul>
					{_.map(hexoPosts.posts, (post, index) =>
						<li key={index} className={classnames({'selected': hexoPosts.selectedPostIndex === index})}
							onClick={selectPost.bind(this, index)}>
							{post.name || "Untitled"}
						</li>
					)}
				</ul>
			</div>
		);
	}
}
