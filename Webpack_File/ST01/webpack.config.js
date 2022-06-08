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
  }
}