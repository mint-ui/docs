import NavConfig from './nav.config.json';
import Vue from 'vue';
import LANG_CONFIG from './langs.json';

const registerRoute = (config, lang) => {
  let route = {};

  config.map(nav => nav.list.map(page => {
    const componentName = `${lang}-${page.name.replace(/\s/, '-').toLowerCase()}`;

    try {
      route[`/${lang}${page.path}`] = {
        title: page.title || page.name,
        language: lang,
        component: Vue.component(componentName, {
          template: require(`./pages/${lang}${page.path}.md`).body
        })
      };
    } catch (e) {
      console.error(e);
    }
  }));

  return route;
};

let route = {};

LANG_CONFIG.langs.forEach(lang => {
  route[`/${lang.value}`] = {
    title: '概述',
    language: lang.value,
    component: Vue.component(`${lang.value}-readme`, {
      template: require(`./pages/${lang.value}/README.md`).body
    })
  };
  route[`/${lang.value}/repositories`] = {
    title: '子项目',
    language: lang.value,
    component: Vue.component(`${lang.value}-readme`, {
      template: require(`./pages/${lang.value}/repositories.md`).body
    })
  };
  Object.assign(route, registerRoute(NavConfig, lang.value));
});

let defaultLang = {};
LANG_CONFIG.langs.forEach(item => {
  if (item.value === LANG_CONFIG.default) {
    defaultLang = item;
  }
});

export const navs = NavConfig;
export default Object.assign({
  '/': {
    component: Vue.component('page-readme', {
      template: require('./pages/README.md').body
    }),
    default_lang: defaultLang,
    langs: LANG_CONFIG.langs,
    title: '选择语言'
  }
}, route);
