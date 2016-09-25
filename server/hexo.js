import Hexo from 'hexo';

const hexo = new Hexo('/Users/klugjo/Dev/hexo-compose-test', {});

function postSerializer(post) {
	return {
		name: post.title,
		date: new Date(),
		content: post.raw
	}
}

export default {
	initialize: () => {
		return hexo.init().then(() => {
			return hexo.load()
		});
	},

	getPosts: () => {
		return hexo.model('Post').toArray().map(postSerializer);
	}
};
