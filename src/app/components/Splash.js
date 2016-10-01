import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import {browserHistory} from 'react-router';

import splashImg from '../img/hexo-compose-logo.png';

export class Splash extends Component {

	constructor(props, context){
		super(props);
	}

	static propTypes = {
		hexoPosts: PropTypes.object.isRequired,
		loadPosts: PropTypes.func.isRequired
	};

	static contextTypes = {
		router: React.PropTypes.object
	};

	componentWillMount() {
		this.props.loadPosts();
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		if(_.get(nextProps, 'hexoPosts.postsLoaded')) {
			this.context.router.push(`/posts/view/${_.get(nextProps, 'hexoPosts.posts[0].id}')}`);
		}
	}

	render() {
		return (
			<div className="splash-container">
				<img src={splashImg} />
			</div>
		);
	}
}

export default Splash;
