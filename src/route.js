import NavConfig from './nav.config.json';
import Vue from 'vue';

const registerRoute = (config) => {
  let route = {};
  config.map(nav => nav.list.map(page => {
    try {
      route[page.path] = {
        component: Vue.component(`page-${page.name}`, {
          template: require(`./pages${page.path}.md`).body
        }),
        title: page.title || page.name,
        description: page.description
      };
    } catch (e) {
      console.error(e);
      page.disabled = true;
    }
  }));

  return { route, navs: config };
};

const route = registerRoute(NavConfig);

export const navs = route.navs;
export default Object.assign({
  '/': {
    component: Vue.component('page-readme', {
      template: require('./pages/README.md').body
    }),
    title: '首页'
  }
}, route.route);
