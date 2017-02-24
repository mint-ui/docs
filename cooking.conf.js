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
  hash: true,
  publicPath: '/docs/',
  extractCSS: true,
  postcss: [
    require('postcss-salad')
  ],
  extends: ['vue', 'lint'],
  alias: {
    'src': path.join(__dirname, 'src')
  },
  externals: process.env.NODE_ENV === 'production' ? {
    'vue-router': 'VueRouter',
    'vue': 'Vue'
  }: {}
});

cooking.add('vue.autoprefixer', false);
cooking.add('vue.postcss', [
  require('postcss-salad')
]);

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
