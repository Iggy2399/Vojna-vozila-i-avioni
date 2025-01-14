const path = require('path'); // Add this line to fix the error

module.exports = {
  mode: 'development', // Add this line
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // Use path module here
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: './dist',
  },
};
