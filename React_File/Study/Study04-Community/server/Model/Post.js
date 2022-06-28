const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
},{
  collection:'kittens'
});

const Post = mongoose.model('Kitten', postSchema);

module.exports = { Post }