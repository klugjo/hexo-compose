export const SELECT_POST = 'SELECT_POST';

export function selectPost(postIndex) {
	return {
		type: SELECT_POST,
		postIndex
	}
}