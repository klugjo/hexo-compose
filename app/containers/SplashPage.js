import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Splash from '../components/Splash';
import * as InitActions from '../actions/init';

function mapStateToProps(state) {
	return {
		hexoPosts: state.hexoPosts
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(InitActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
