var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var HOSTNAME = 'http://127.0.0.1:3000'
// 基于 multiparty 插件实现文件上传处理 & form-data 解析
const pathRul = `${__dirname.split('server')[0]}server`
console.log(pathRul, '还是')
const uploadDir = `${pathRul}/public/upload`;
console.log()
const multiparyty_upload = function multiparyty_upload(req, auto){
	typeof auto !== 'boolean' ? auto = false : null;
	let config = {
		maxFieldsSize: 200 * 1024 * 1024,
	}
	if (auto) config.uploadDir = uploadDir;
	return new Promise((resolve, reject) => {
		// 将用户传过来的formdata数据使用Form().parse去解析处理
		new multiparty.Form(config).parse(req, (err, fields, files) => {
				if (err) {
					reject(err);
					return;
				}
				resolve({
					files,
					fields
				})
			})
	})
}

router.post('/upload_single', async function(req, res) {
	try{
		let { files } = await multiparyty_upload(req, true);
		let file = (files.file && files.file[0]) || {};
		console.log(file.path)
		const servPath = file.path.replace(pathRul, HOSTNAME).split('public')
		const path1 = `${servPath[0]}${servPath[1]}`.replace(/\\\\|\\/g, '/')
		res.send({
			code: 200,
			msg: 'upload success',
			originalFilename: file.originalFilename,
			servicePath: path1
		})
	}catch(err){
		res.send({
			code: 1,
			msg: err
		})
	}
});

module.exports = router;