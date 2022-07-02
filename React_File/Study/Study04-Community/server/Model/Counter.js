const { default: mongoose } = require("mongoose");

const counterSchema = new mongoose.Schema({
  name: String,
  postNum: Number,
},{
  collection:'counters'
});

const Counter = mongoose.model('counter', counterSchema);

module.exports = { Counter }