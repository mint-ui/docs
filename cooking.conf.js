var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: './src/main.js',
  dist: './dist',
  template: './src/index.tpl',

  devServer: {
    port: 8075,
    publicPath: '/',
    hostname: require('my-local-ip')()
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
  loader: 'vue-markdown-loader'
});

cooking.add('vueMarkdown', {
  preprocess: function (MarkdownIt, Source) {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<div class="table-container"><table class="table">';
    };
    MarkdownIt.renderer.rules.table_close = function () {
      return '</table></div>';
    };
    return Source;
  }
});

module.exports = cooking.resolve();
