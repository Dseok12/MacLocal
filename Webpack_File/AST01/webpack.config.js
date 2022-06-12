const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}