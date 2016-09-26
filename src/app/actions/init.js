
import {initialize, getPosts} from '../api/hexo';

export const LOAD_POSTS = 'LOAD_POSTS';

export function loadPosts() {
	return dispatch => {
		initialize().then(() => {
			dispatch({
				type: LOAD_POSTS,
				posts: getPosts()
			});
		});
	};
}