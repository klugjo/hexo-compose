import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import {browserHistory} from 'react-router';

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
			this.context.router.push('/posts/home');
		}
	}

	render() {
		return (
			<div>
				Splash
			</div>
		);
	}
}

export default Splash;
