import Hexo from 'hexo';

const hexo = new Hexo('/Users/klugjo/Dev/hexo-compose-test', {});

function postSerializer(post) {
	console.log(post);
	return {
		id: post._id,
		name: post.title,
		date: new Date(),
		content: post.content,
		source: getPostSource(post)
	}
}

function getPostSource(post) {
	let postRaw = post.raw;
	let	postBody;

	// Split post at front matter seperator '---'
	postRaw = postRaw.split('---');

	// Set body post to second part of array, first part being only front matter
	postBody = postRaw[1];

	// Incase user has used the front matter trigger anywhere else in the post
	// recombine the rest of postRaw with postBody, still ignoring the front matter
	if (postRaw.length > 1) {
		for (let i = 2; i < postRaw.length; i++) {
			// We have to append the seperator '---' before recombining since it will be
			// removed in the split
			postBody += '---' + postRaw[i]
		}
	}

	return postBody;
}

export default {
	initialize: () => {
		return hexo.init().then(() => {
			return hexo.load();
		});
	},

	getPosts: () => {
		return hexo.model('Post').toArray().map(postSerializer);
	}
};
