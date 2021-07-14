const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const staticPath = path.resolve(__dirname, './static');
const assetPath = path.resolve(__dirname, './asset');
module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.tsx')
  },
  output: {
    path: staticPath,
    filename: 'index.bundle.js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: assetPath, to: staticPath }
      ]
    })
  ],
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
      },
      {
        test: /\.(sass|css|scss)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
