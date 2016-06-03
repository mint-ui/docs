import NavConfig from './nav.config.json';
import LANG_CONFIG from './langs.json';

const registerRoute = (config, lang) => {
  let route = {};

  config.map(nav => nav.list.map(page => {
    try {
      route[`/${lang}${page.path}`] = {
        title: page.title || page.name,
        language: lang,
        component: require(`./pages/${lang}${page.path}.md`)
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
    component: require(`./pages/${lang.value}/README.md`)
  };
  route[`/${lang.value}/repositories`] = {
    title: '子项目',
    language: lang.value,
    component: require(`./pages/${lang.value}/repositories.md`)
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
    component: require('./pages/README.md'),
    default_lang: defaultLang,
    langs: LANG_CONFIG.langs,
    title: '选择语言'
  }
}, route);
