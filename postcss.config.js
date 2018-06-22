module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-easy-import'),
    require('autoprefixer')(),
    require('postcss-normalize')()
  ]
};
