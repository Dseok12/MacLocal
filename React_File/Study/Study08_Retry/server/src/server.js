const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { urlencoded } = require('express');
const app = express();
const port = 5050;
const BASIC_URL = '../../client/build';

app.use(express.static(path.join(__dirname, `${BASIC_URL}`)));

app.use(express.json());

app.use(express, urlencoded({ extended: true }));

const { Post } = require('../Model/Post.js');
app.listen(port, () => {
  mongoose
    .connect('')
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log('Connecting mongoDB...');
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get('/', (요청, 응답) => {
  응답.sendFile(path.join(__dirname, `${BASIC_URL}/index.html`));
});

app.get('*', (요청, 응답) => {
  응답.sendFile(path.join(__dirname, `${BASIC_URL}/index.html`));
});

app.post('/api/test', (요청, 응답) => {
  // console.log(요청.body);
  const CommunityPost = new Post({ title: 'test', content: '테스트입니다.' });
  CommunityPost.save()
    .then(() => {
      응답.status(200).json({ success: true, text: '안녕하세요.' });
    })
    .catch((err) => {
      console.log(err);
    });
});
