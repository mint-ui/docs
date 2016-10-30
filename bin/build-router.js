var NAVS_CONFIG = require('../src/nav.config.json');
var LANG_CONFIG = require('../src/langs.json');
var render = require('json-templater/string');
var fs = require('fs');
var path = require('path');

var OUTPUT_PATH = path.join(__dirname, '../src/route.js');
var TEMPLATE =
`import LANG_CONFIG from './langs.json';
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const router = new VueRouter();

let defaultLang = {};
LANG_CONFIG.langs.forEach(item => {
  if (item.value === LANG_CONFIG.default) {
    defaultLang = item;
  }
});

router.map({
  '/': {
    component: resolve => require(['./pages/README.md'], resolve),
    default_lang: defaultLang,
    langs: LANG_CONFIG.langs,
    title: '选择语言'
  },
  {{map}}
});

router.redirect({
  '*': '/'
});

router.beforeEach(transition => {
  document.title = transition.to.title || document.title;
  transition.next();
});

export default function(Component, element) {
  router.start(Component, element);
};
`;
var ITEM_TEMPLATE =
`'{{path}}': {
    title: '{{title}}',
    language: '{{language}}',
    component: resolve => require(['{{componentPath}}'], resolve)
  }`;

var renderRouter = function(str) {
  return render(TEMPLATE, { map: str });
};

var getPages = function(lang) {
  var pages = [];

  NAVS_CONFIG.map(nav => nav.list.map(page => {
    if (page.only && page.only.indexOf(lang) === -1) return;
    pages.push({
      path: `/${lang}${page.path}`,
      language: lang,
      componentPath: `./pages/${lang}${page.path}.md`,
      title: page.title || page.name
    })
  }));

  return pages;
};

var map = [];

LANG_CONFIG.langs.forEach(lang => {
  map.push({
    title: '概述',
    path: `/${lang.value}`,
    language: lang.value,
    componentPath: `./pages/${lang.value}/README.md`
  });

  map.push({
    title: '子项目',
    path: `/${lang.value}/repositories`,
    language: lang.value,
    componentPath: `./pages/${lang.value}/repositories.md`
  });

  map.push({
    title: '快速上手',
    path: `/${lang.value}/quickstart`,
    language: lang.value,
    componentPath: `./pages/${lang.value}/quickstart.md`
  });

  map = map.concat(getPages(lang.value));
});

var template = map.map(item => render(ITEM_TEMPLATE, item)).join(',\n  ');

fs.writeFileSync(OUTPUT_PATH, renderRouter(template));
console.log('router file done');
