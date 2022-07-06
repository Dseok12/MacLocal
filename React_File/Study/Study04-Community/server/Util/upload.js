const AWS = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');
const path = require('path'); 

const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';

const config = require('../config/key.js');

const S3 = new AWS.S3({
    endpoint: endpoint,
    region: region,
    credentials: {
        accessKeyId : config.access_key,
        secretAccessKey: config.secret_key
    }
});

function setUpload(bucket) {
    const upload = multer({
        storage: multerS3({
            s3: S3,
            bucket: bucket,
            acl: 'public-read-write',
            key: function (req, file, cb) {
                let extension = path.extname(file.originalname)
                cb(null, Date.now().toString() + extension )
            }
        })
    }).single('file');
    return upload;
}
module.exports = setUpload;