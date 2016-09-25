import {SELECT_POST} from '../actions/sidebar';
import {LOAD_POSTS} from '../actions/init';

const defaultState = {
	selectedPostIndex: 0,
	posts: [],
	postsLoaded: false
};

export default function hexoPosts(state = defaultState, action) {
	switch(action.type) {
		case SELECT_POST:
			return Object.assign({},
				state,
				{selectedPostIndex: action.postIndex});
		case LOAD_POSTS:
			return Object.assign({selectedPostIndex: 0, posts: action.posts, postsLoaded: true});
		default:
			return state;
	}
}