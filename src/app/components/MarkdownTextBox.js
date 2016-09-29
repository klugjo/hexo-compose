import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import Codemirror from 'react-codemirror';
import 'codemirror/addon/mode/overlay';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/meta';

export default class Editor extends Component {
	static propTypes = {
		onChange: PropTypes.func,
		value: PropTypes.string
	};

	render() {
		const options = {
			mode: 'gfm',
			theme: 'default'
		};
		return (
			<Codemirror value={this.props.value} onChange={this.props.onChange} options={options} />
		);
	}
}
