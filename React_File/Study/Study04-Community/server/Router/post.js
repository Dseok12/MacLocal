var express = require('express');
var router = express.Router();
// const multer  = require('multer');

const { Post } = require('../Model/Post');
const { Counter } = require('../Model/Counter');

const setUpload = require('../Util/upload.js');

// 데이터 보내기
router.post('/submit', (req, res) => {
  let temp = req.body;
  Counter.findOne({name: 'counter'}).exec().then((counter) => {
    temp.postNum = counter.postNum;
    const CommunityPost = new Post(temp);
    CommunityPost.save().then(() => {

      // updateOne 몽고DB에서 사용하는 것.
      // update를 해주기위해
      Counter.updateOne({
        // 어떤 doc을 update할건지 선택
        name: 'counter'
      }, {
        // 그 선택한 doc을 어떻게 update할건지 선택
        $inc: {postNum: 1}
      }).then(() => {
        res.status(200).json({ success: true });
      });
    }).catch((err) => {
      res.status(400).json({ success: false });
    })
  })
});

// 목록 뿌려주기
router.post('/list', (req, res) => {
  // find 잘 보기
  Post.find().exec().then((doc) => {
    res.status(200).json({ success: true, postList: doc });
  }).catch((err) => {
    res.status(400).json({ success: false });
  })
});

// 상세보기
router.post('/detail', (req, res) => {
  // findOne 잘 보기
  Post.findOne({postNum: Number(req.body.postNum)})
  .exec()
  .then((doc) => {
    console.log(doc)
    res.status(200).json({ success: true, post: doc });
  }).catch((err) => {
    res.status(400).json({ success: false });
  })
});

// 수정하기
router.post('/edit', (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content
  }
  // updateOne 잘보기
  Post.updateOne({postNum: Number(req.body.postNum)}, {$set: temp})
  .exec()
  .then(() => {
    // console.log(doc)
    res.status(200).json({ success: true });
  }).catch((err) => {
    res.status(400).json({ success: false });
  })
});

// 삭제하기
router.post('/delete', (req, res) => {
  // deleteOne 잘 보기
  Post.deleteOne({postNum: Number(req.body.postNum)})
  .exec()
  .then(() => {
    res.status(200).json({ success: true });
  }).catch((err) => {
    res.status(400).json({ success: false });
  })
});

/*
// 멀터 라이브러리
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'image/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage }).single('file');
// // 멀터 라이브러리

router.post('/image/upload', (req,res) => {
  // console.log(req.body, req.formData)
  upload(req, res, err => {
    if(err){
      // console.log(err)
      res.status(400).json({ success: false });
    } else {
      // console.log(res.req.file);
      res.status(200).json({ success: true, filePath: res.req.file.path })
    }
  })
})
*/
router.post('/image/upload', setUpload('react-community01/post'),  (req, res, next ) => {
  res.status(200).json({ success: true, filePath: res.req.file.location})
})

module.exports = router;