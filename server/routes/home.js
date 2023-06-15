var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.json({
		code: 200,
		data: [
			{ id: 1, name: 'uniapp实战课程', imgUrl: '/images/1.jpg' },
			{ id: 2, name: 'nodejs实战课程', imgUrl: '/images/2.jpg' },
			{ id: 3, name: 'webpack实战课程', imgUrl: '/images/3.jpg' },
			{ id: 4, name: 'javascript实战课程', imgUrl: '/images/4.jpg' },
			{ id: 5, name: 'react实战课程', imgUrl: '/images/5.jpg' },
			{ id: 6, name: 'vue实战课程', imgUrl: '/images/6.jpg' },
			{ id: 7, name: 'threejs实战课程', imgUrl: '/images/7.jpg' },
			{ id: 8, name: 'electron实战课程', imgUrl: '/images/8.jpg' },
			{ id: 9, name: 'weex实战课程', imgUrl: '/images/9.jpg' },
			{ id: 10, name: 'flutter实战课程', imgUrl: '/images/10.jpg' },
		],
		msg: '成功'
	})
})

router.get('/banner', function(req, res, next) {
	res.json({
		code: 200,
		data: [
			{ id: 1, name: 'uniapp实战课程', imgUrl: '/images/1.jpg' },
			{ id: 2, name: 'nodejs实战课程', imgUrl: '/images/2.jpg' },
			{ id: 3, name: 'webpack实战课程', imgUrl: '/images/3.jpg' },
			{ id: 4, name: 'javascript实战课程', imgUrl: '/images/4.jpg' },
			{ id: 5, name: 'react实战课程', imgUrl: '/images/5.jpg' },
			{ id: 6, name: 'vue实战课程', imgUrl: '/images/6.jpg' },
			{ id: 7, name: 'threejs实战课程', imgUrl: '/images/7.jpg' },
			{ id: 8, name: 'electron实战课程', imgUrl: '/images/8.jpg' },
			{ id: 9, name: 'weex实战课程', imgUrl: '/images/9.jpg' },
			{ id: 10, name: 'flutter实战课程', imgUrl: '/images/10.jpg' },
		],
		msg: '成功'
	})
})

// 推荐歌单
router.get('/recommentSong', function(req, res, next) {
	res.json({
		code: 200,
		data: [
			{ id: 1, name: 'uniapp实战课程', imgUrl: '/images/1.jpg', playCount: 100332 },
			{ id: 2, name: 'nodejs实战课程', imgUrl: '/images/2.jpg', playCount: 100332 },
			{ id: 3, name: 'webpack实战课程', imgUrl: '/images/3.jpg', playCount: 100332 },
			{ id: 4, name: 'javascript实战课程', imgUrl: '/images/4.jpg', playCount: 100332 },
			{ id: 5, name: 'react实战课程', imgUrl: '/images/5.jpg', playCount: 100332 },
			{ id: 6, name: 'vue实战课程', imgUrl: '/images/6.jpg', playCount: 100332 },
			{ id: 7, name: 'threejs实战课程', imgUrl: '/images/7.jpg', playCount: 100332 },
			{ id: 8, name: 'electron实战课程', imgUrl: '/images/8.jpg', playCount: 100332 },
			{ id: 9, name: 'weex实战课程', imgUrl: '/images/9.jpg', playCount: 100332 },
			{ id: 10, name: 'flutter实战课程', imgUrl: '/images/10.jpg', playCount: 100332 },
		],
		msg: '成功'
	})
})
module.exports = router;