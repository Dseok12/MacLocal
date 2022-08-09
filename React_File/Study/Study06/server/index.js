const express = require('express');
const app = express();
const path = require('path');
const port = 5050;

app.get('/', (res, req) => {
  req.sendFile(path.join(__dirname, '../udong/build/index.html'));
})