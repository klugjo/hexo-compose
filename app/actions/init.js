
function getInitialState() {
	return [
			{name: 'Post 1', date: new Date(), content: 'Never let your guard down by thinking you’re fucking good enough. You need to sit down and sketch more fucking ideas because stalking your ex on facebook isn’t going to get you anywhere. Form follows fucking function. Nothing of value comes to you without fucking working at it. Why are you fucking reading all of this? Get back to work. Creativity is a fucking work-ethic. If you’re not being fucking honest with yourself how could you ever hope to communicate something meaningful to someone else?'},
			{name: 'Post 2', date: new Date(), content: 'To go partway is easy, but mastering anything requires hard fucking work. The details are not the details. They make the fucking design. Never let your guard down by thinking you’re fucking good enough. While having drinks with Tibor Kalman one night, he told me, “When you make something no one hates, no one fucking loves it.”'},
			{name: 'Post 3', date: new Date(), content: 'Paul Rand once said, “The public is more familiar with bad fucking design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.” Use your fucking hands. You need to sit down and sketch more fucking ideas because stalking your ex on facebook isn’t going to get you anywhere. Why are you fucking reading all of this? Get back to work. Intuition is fucking important. Can we all just agree as the greater design community to stop fucking talking about Comic Sans altogether? It’s getting fucking old.'},
			{name: 'Post 4', date: new Date(), content: 'Don’t worry about what other people fucking think. What’s important is the fucking drive to see a project through no matter what. The graphic designer’s first fucking consideration is always the size and shape of the format, whether for the printed page or for digital display. This design is fucking brilliant. If you fucking give up, you will achieve nothing. The details are not the details. They make the fucking design.'},
			{name: 'Post 5', date: new Date(), content: 'To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. When you sit down to work, external critics aren’t the enemy. It’s you who you must to fight against to do great fucking work. You must overcome yourself. What’s important is the fucking drive to see a project through no matter what. The details are not the details. They make the fucking design. Make your work consistent but not fucking predictable.'},
			{name: 'Post 6', date: new Date(), content: 'What’s important is the fucking drive to see a project through no matter what. Think about all the fucking possibilities. If you fucking give up, you will achieve nothing. Don’t worry about what other people fucking think. What’s important is the fucking drive to see a project through no matter what. Use your fucking hands. Design as if your fucking life depended on it.'}
		];
}

export const LOAD_POSTS = 'LOAD_POSTS';

export function loadPosts(delay = 2000) {
	return dispatch => {
		setTimeout(() => {
			console.log('loaded');
			dispatch({
				type: LOAD_POSTS,
				posts: getInitialState()
			});
		}, delay);
	};
}