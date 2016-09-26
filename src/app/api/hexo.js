import {ipcRenderer} from 'electron';
import Promise from 'bluebird';

export function initialize() {
	return new Promise((resolve) => {
		ipcRenderer.on('init-hexo-done', () => {
			resolve(true);
		});

		ipcRenderer.send('init-hexo');
	});
}

export function getPosts() {
	return ipcRenderer.sendSync('hexo-posts');
}
