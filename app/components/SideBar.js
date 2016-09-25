import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import { Link } from 'react-router';
import styles from './SideBar.scss';

export default class SideBar extends Component {
	static propTypes = {
		hexoPosts: PropTypes.object.isRequired,
		selectPost: PropTypes.func.isRequired
	};

	render() {
		const {hexoPosts, selectPost} = this.props;
		console.log(hexoPosts);
		return (
			<div>
				<div className="container">
					<h4>Menu</h4>
					<ul>
						{_.map(hexoPosts.posts, (post, index) =>
							<li key={index} className={classnames({'selected': hexoPosts.selectedPostIndex === index})}
								onClick={selectPost.bind(this, index)}>
								{post.name}
							</li>
						)}
					</ul>
				</div>
			</div>
		);
	}
}
