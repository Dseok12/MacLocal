if(process.env.NODE_ENV === "prodution"){
  module.exports = require('./production.js');
} else {
  module.exports = require('./dev.js');
}