const path = require('path');
module.exports = {
  entry: {
    
    client: './src/custom-ecstatic/lib/ecstatic/client/index.js',
    // bundle: './src/bundle.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", 
        query: {
          presets: ['@babel/react', '@babel/env']
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
 },
  node: {
    fs: 'empty'
  }
}