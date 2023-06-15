import $http from './index.js';

export function getHome() {
	return $http('/home')
}

// 获取首页banner图
export function getBanner() {
	return $http('/home/banner')
}
// 推荐歌单
export function getRecommentSong() {
	return $http('/home/recommentSong')
}