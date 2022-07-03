const express = require('express');
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const port = 5050;

const config = require('./config/key.js');



app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const { Post } = require('./Model/Post');
const { exec } = require('child_process');
const { Counter } = require('./Model/Counter');

app.listen(port, () => {
  mongoose.connect(config.mongoURI).then(() => {
      console.log(`Example app listening on port ${port}`)
      console.log('Connecting MongoDB')
    }).catch((err) => {
      console.log(`${err}`)
    })
});

app.get('/', (요청, 응답) => {
  응답.sendFile(path.join(__dirname, "../client/build/index.html"))
});

app.get('*', (요청, 응답) => {
  응답.sendFile(path.join(__dirname, "../client/build/index.html"))
});

app.post('/api/post/submit', (req, res) => {
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

app.post('/api/post/list', (req, res) => {
  Post.find().exec().then((doc) => {
    res.status(200).json({ success: true, postList: doc });
  }).catch((err) => {
    res.status(400).json({ success: false });
  })
});


app.post('/api/post/detail', (req, res) => {
  Post.findOne({postNum: Number(req.body.postNum)})
  .exec()
  .then((doc) => {
    console.log(doc)
    res.status(200).json({ success: true, post: doc });
  }).catch((err) => {
    res.status(400).json({ success: false });
  })
});


app.post('/api/post/edit', (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content
  }
  Post.updateOne({postNum: Number(req.body.postNum)}, {$set: temp})
  .exec()
  .then(() => {
    // console.log(doc)
    res.status(200).json({ success: true });
  }).catch((err) => {
    res.status(400).json({ success: false });
  })
});