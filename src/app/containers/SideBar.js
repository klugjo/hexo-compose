import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SideBar from '../components/SideBar';
import * as SideBarActions from '../actions/sidebar';

function mapStateToProps(state) {
	return {
		hexoPosts: state.hexoPosts
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(SideBarActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
