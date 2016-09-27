import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewPost from '../components/ViewPost';
import * as ViewPostActions from '../actions/viewPost';

function mapStateToProps(state) {
	return {
		hexoPosts: state.hexoPosts
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ViewPostActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPost);
