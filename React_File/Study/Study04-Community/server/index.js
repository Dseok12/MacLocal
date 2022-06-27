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
  // console.log(req.body)
  let temp = req.body;
  console.log(temp);
  const CommunityPost = new Post(temp);
  CommunityPost.save().then(() => {
    res.status(200).json({ success: true });
  }).catch((err) => {
    res.status(400).json({ success: false });
  })
});