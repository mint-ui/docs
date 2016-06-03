import App from './app';
import routes from './route';
import VueRouter from 'vue-router';
import Vue from 'vue';
import 'sushi-ui';
import 'highlight.js/styles/github-gist.css';
import './assets/style/static.css';

const router = new VueRouter();

Vue.use(VueRouter);

router.map(routes);
router.start(App, 'app');
router.beforeEach(transition => {
  document.title = transition.to.title || document.title;
  transition.next();
});
