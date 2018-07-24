const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const components = require('./components')
module.exports = {
  devServer: {
    port: 8000
  },
  mode: 'development',
  devtool: 'eval-source-map',
  entry: components.entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js'
  },
  /* resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }, */
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: components.html.concat([
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(['dist'], {
      root: `${__dirname}/../`,
      verbose: true,
      dry: false
    })
  ])
}
