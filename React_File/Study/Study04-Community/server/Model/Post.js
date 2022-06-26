const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
},{
  collation:'posts'
});

const Post = mongoose.model('Kitten', postSchema);

module.exports = { Post }