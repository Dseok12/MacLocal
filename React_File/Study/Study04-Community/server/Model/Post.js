const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,

  // 고유 id값 지정
  postNum: Number,

  // 이미지등록
  image: String,
},{
  collection:'posts'
});

const Post = mongoose.model('post', postSchema);

module.exports = { Post }