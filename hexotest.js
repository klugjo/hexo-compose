var Hexo = require('hexo');
var hexo = new Hexo('/Users/klugjo/Dev/hexo-compose-test', {});

hexo.init().then(() => {
	hexo.load().then(() => {
		console.log(hexo.model('Post').toArray().map(p => {
			return {
				title: p.title,
				source: p.raw
			};
		}));
	});
});