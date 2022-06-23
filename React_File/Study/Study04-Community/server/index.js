const express = require('express');
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const port = 5050;

const config = require('./config/key.js');


app.use(express.static(path.join(__dirname, "../client/build")))

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
