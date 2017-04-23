import Vue from 'vue'
import App from './app';
import router from './route';
import 'sushi-ui';
import 'highlight.js/styles/github-gist.css';
import './assets/style/static.css';

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
