const OSS = require('ali-oss');
const ossKey = require('./oss-key');
const client = new OSS({
  region: ossKey.OSS_REGION,
  accessKeyId: ossKey.OSS_AK,
  accessKeySecret: ossKey.OSS_SK,
  bucket: ossKey.OSS_BUCKET,
});

module.exports = {
	upload: (url, path) => {
		return new Promise((resolve) => {
			client.put(url, path).then((res) => {
				resolve(res);
			});
		});
	},
	deleteFile: (url) => {
		return new Promise((resolve) => {
			client.delete(url).then((res) => {
				resolve(res);
			});
		});


	}
};
	
	
