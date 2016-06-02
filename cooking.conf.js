var path = require('path');
var cooking = require('cooking');
var hljs = require('highlight.js');

cooking.set({
  entry: './src/main.js',
  dist: './dist',
  template: './src/index.tpl',

  devServer: {
    port: 8075,
    publicPath: '/'
  },

  // production
  clean: true,
  hash: true,
  publicPath: '/docs/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: true,
  extends: ['vue', 'lint', 'saladcss']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

cooking.add('externals', {
  'vue-router': 'VueRouter',
  'vue': 'Vue'
});

cooking.add('loader.md', {
  test: /\.md$/,
  loaders: ['markdown-it-plus-loader']
});

cooking.add('markdown-it', {
  use: [
    require('markdown-it-highlightjs')
  ],
  html: true,
  preprocess: function (MarkdownIt, Environment, Source) {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">';
    }
    return Source;
  }
});

module.exports = cooking.resolve();
