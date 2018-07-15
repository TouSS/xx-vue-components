const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const componentsDir = `${__dirname}/../src/components`
let entry = {
  index: `${__dirname}/../src/index.js`
}
let html = [
  new HtmlWebpackPlugin({
    template: `${__dirname}/../src/index.html`,
    filename: 'index.html',
    showErrors: true,
    inject: 'body',
    chunks: ['index']
  })
]
let files = fs.readdirSync(componentsDir)
files.forEach(file => {
  entry[file] = `${componentsDir}/${file}/index.js`
  html.push(
    new HtmlWebpackPlugin({
      template: `${componentsDir}/${file}/index.html`,
      filename: `${file}.html`,
      showErrors: true,
      inject: 'body',
      chunks: [`${file}`]
    })
  )
})

exports.entry = entry
exports.html = html
