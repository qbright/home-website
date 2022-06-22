const path = require('path');
const fs = require('fs');
const walker = require('walker');
const { upload } = require('./oss-client');
const uploadSet = [];
walker('./build/').on('file', function (file, stat) {

	const p = path.relative('./build/', file);
	uploadSet.push({
		url: file,
		path:p
	}) ;
}).on('end', () => {
	uploadFile();
});

function uploadFile() {
	Promise.all(uploadSet.map((item) => {
		return upload(item.path,  item.url);
	})).then(() => {
		console.log('finish');
	});

}