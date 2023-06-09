let baseUrl = 'http://127.0.0.1:3000';
// #ifdef H5
baseUrl = '/api'
// #endif
export default {
	request(options) {
		return new Promise((resove, reject) => {
			uni.request({
				url:`${baseUrl}${options.url}`,
				method:options.method,
				success: (res) => {
					if (res.statusCode === 200) {
						resove(res.data);
					} else if (res.statusCode === 401) {
						uni.showToast({
							icon:'none',
							duration:1500,
							title:'未登录或登录失效'
						})
						reject(res.msg);
					} else {
						uni.showToast({
							icon:'none',
							duration:1500,
							title:res.msg || '请求出错'
						})
					}
				},
				fail: (err) => {
					uni.showToast({
						icon:'none',
						duration:1500,
						title:err.errMsg || '请求出错'
					})
					reject(err);
				}
			})
		})
	}
};