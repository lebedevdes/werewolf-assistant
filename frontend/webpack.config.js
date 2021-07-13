module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx$|\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          },
          {
            options: {
              eslintPath: require.resolve('eslint')

            },
            loader: require.resolve('eslint-loader')
          }
        ]
      }
    ]
  }
};
