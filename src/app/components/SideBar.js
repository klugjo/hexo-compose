import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import { Link } from 'react-router';

export default class SideBar extends Component {
	static propTypes = {
		hexoPosts: PropTypes.object.isRequired,
		selectPost: PropTypes.func.isRequired
	};

	static contextTypes = {
		router: React.PropTypes.object
	};

	viewPost(post) {
		this.context.router.push(`/posts/view/${post.id}`);
		event.stopPropagation();
	}

	editPost(post, event) {
		this.context.router.push(`/posts/edit/${post.id}`);
		event.stopPropagation();
	}

	render() {
		const {hexoPosts, selectPost} = this.props;
		return (
			<div className="sidebar">
				<div className="title">Posts</div>
				<ul>
					{_.map(hexoPosts.posts, (post, index) =>
						<li key={index} className={classnames({'selected': hexoPosts.selectedPostIndex === index})}
							onClick={this.viewPost.bind(this, post)}>
							<div className="post-name">{post.name || "Untitled"}</div>
							<div className="post-edit">
								<a onClick={this.editPost.bind(this, post)}>
									<i className="fa fa-pencil"></i>
								</a>
							</div>
						</li>
					)}
				</ul>
			</div>
		);
	}
}
