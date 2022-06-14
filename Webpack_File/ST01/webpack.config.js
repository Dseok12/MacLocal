const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve('./dist'),
    
    // filename에 [name]이라고 작성한 것은 entry에서 나오는 파일을 동적으로 받기 위해서이다.
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 읽는 순서는 맨 밑에서부터 위로
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          publicPath: './dist/',
          name: '[name].[ext]?[hash]',
          limit: 300000, // 300kb용량제한
        }
      }
    ]
  }
}