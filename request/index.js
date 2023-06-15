let baseUrl = 'http://127.0.0.1:3000';
// #ifdef H5
baseUrl = '/api'
// #endif
function request(url, data={}, method='GET', contentType=1) {
	let header = {
		'content-type': contentType === 1 ? 'application/json' : 'application/x-www-form-urlencoded'
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data,
			method,
			header,
			success: (res) => {
				if (res.statusCode === 200) {
					// 请求成功
					resolve(res.data);
				} else if (res.statusCode === 401) {
					uni.showToast({
						icon:"none",
						title:'未登录或登录失效',
						duration:1500
					})
					reject(res.data)
				} else if (res.statusCode === 405) {
					uni.showToast({
						icon:"none",
						title:'请求方法错误',
						duration:1500
					})
					reject(res.data)
				} else {
					uni.showToast({
						icon:"none",
						title:'请求错误' + res.statusCode,
						duration:1500
					})
					reject(res.data)
				}
			},
			fail: (err) => {
				uni.showToast({
					icon:"none",
					title:err.errMsg,
					duration:1500
				})
				reject(err)
			}
		})
	})
}

export default request;