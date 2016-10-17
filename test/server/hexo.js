import hexoApi from 'server/hexo';

test('initialize works', () => {
	return hexoApi.initialize().then(() => {
		expect(true).toBe(true);
	});
});

test('getPosts returns a list of posts', () => {
	expect(hexoApi.getPosts().length).toBeGreaterThan(0);
});
