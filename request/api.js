import $http from './index.js';

export function getHome() {
	return $http.request({
		url: '/home',
		method: 'GET'
	})
}