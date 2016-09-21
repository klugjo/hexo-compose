import React, { Component, PropTypes } from 'react';

export default class App extends Component {
	static propTypes = {
		main: PropTypes.element.isRequired,
		sidebar: PropTypes.element.isRequired
	};

	render() {
		return (
			<div>
				<div>
					{this.props.main}
				</div>
				<div>
					{this.props.sidebar}
				</div>
			</div>
		);
	}
}
