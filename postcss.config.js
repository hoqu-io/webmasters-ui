const autoprefixer = require('autoprefixer')
const simpleVars = require('postcss-simple-vars')
const postcssImport = require('postcss-import')

module.exports = {
  parser: 'postcss-less',
  map: false,
  plugins: [ autoprefixer, simpleVars, postcssImport ]
}
