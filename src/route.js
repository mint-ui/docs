import LANG_CONFIG from './langs.json';
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
  '/zh-cn': {
    title: '概述',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/README.md'], resolve)
  },
  '/zh-cn/repositories': {
    title: '子项目',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/repositories.md'], resolve)
  },
  '/zh-cn/toast': {
    title: 'Toast',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/toast.md'], resolve)
  },
  '/zh-cn/indicator': {
    title: 'Indicator',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/indicator.md'], resolve)
  },
  '/zh-cn/loadmore': {
    title: 'Loadmore',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/loadmore.md'], resolve)
  },
  '/zh-cn/infinite-scroll': {
    title: 'Infinite scroll',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/infinite-scroll.md'], resolve)
  },
  '/zh-cn/message-box': {
    title: 'Message box',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/message-box.md'], resolve)
  },
  '/zh-cn/action-sheet': {
    title: 'Action sheet',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/action-sheet.md'], resolve)
  },
  '/zh-cn/popup': {
    title: 'Popup',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/popup.md'], resolve)
  },
  '/zh-cn/swipe': {
    title: 'Swipe',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/swipe.md'], resolve)
  },
  '/zh-cn/lazyload': {
    title: 'Lazy load',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/lazyload.md'], resolve)
  },
  '/zh-cn/range': {
    title: 'Range',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/range.md'], resolve)
  },
  '/zh-cn/progress': {
    title: 'Progress',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/progress.md'], resolve)
  },
  '/zh-cn/picker': {
    title: 'Picker',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/picker.md'], resolve)
  },
  '/zh-cn/datetime-picker': {
    title: 'Datetime Picker',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/datetime-picker.md'], resolve)
  },
  '/zh-cn/index-list': {
    title: 'Index List',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/index-list.md'], resolve)
  },
  '/zh-cn/header': {
    title: 'Header',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/header.md'], resolve)
  },
  '/zh-cn/tabbar': {
    title: 'Tabbar',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/tabbar.md'], resolve)
  },
  '/zh-cn/navbar': {
    title: 'Navbar',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/navbar.md'], resolve)
  },
  '/zh-cn/button': {
    title: 'Button',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/button.md'], resolve)
  },
  '/zh-cn/cell': {
    title: 'Cell',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/cell.md'], resolve)
  },
  '/zh-cn/spinner': {
    title: 'Spinner',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/spinner.md'], resolve)
  },
  '/zh-cn/tab-container': {
    title: 'TabContainer',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/tab-container.md'], resolve)
  },
  '/zh-cn/search': {
    title: 'Search',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/search.md'], resolve)
  },
  '/zh-cn/switch': {
    title: 'Switch',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/switch.md'], resolve)
  },
  '/zh-cn/checklist': {
    title: 'Checklist',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/checklist.md'], resolve)
  },
  '/zh-cn/radio': {
    title: 'Radio',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/radio.md'], resolve)
  },
  '/zh-cn/field': {
    title: 'Field',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/field.md'], resolve)
  },
  '/zh-cn/badge': {
    title: 'Badge',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/badge.md'], resolve)
  },
  '/en': {
    title: '概述',
    language: 'en',
    component: resolve => require(['./pages/en/README.md'], resolve)
  },
  '/en/repositories': {
    title: '子项目',
    language: 'en',
    component: resolve => require(['./pages/en/repositories.md'], resolve)
  },
  '/en/toast': {
    title: 'Toast',
    language: 'en',
    component: resolve => require(['./pages/en/toast.md'], resolve)
  },
  '/en/indicator': {
    title: 'Indicator',
    language: 'en',
    component: resolve => require(['./pages/en/indicator.md'], resolve)
  },
  '/en/loadmore': {
    title: 'Loadmore',
    language: 'en',
    component: resolve => require(['./pages/en/loadmore.md'], resolve)
  },
  '/en/infinite-scroll': {
    title: 'Infinite scroll',
    language: 'en',
    component: resolve => require(['./pages/en/infinite-scroll.md'], resolve)
  },
  '/en/message-box': {
    title: 'Message box',
    language: 'en',
    component: resolve => require(['./pages/en/message-box.md'], resolve)
  },
  '/en/action-sheet': {
    title: 'Action sheet',
    language: 'en',
    component: resolve => require(['./pages/en/action-sheet.md'], resolve)
  },
  '/en/popup': {
    title: 'Popup',
    language: 'en',
    component: resolve => require(['./pages/en/popup.md'], resolve)
  },
  '/en/swipe': {
    title: 'Swipe',
    language: 'en',
    component: resolve => require(['./pages/en/swipe.md'], resolve)
  },
  '/en/lazyload': {
    title: 'Lazy load',
    language: 'en',
    component: resolve => require(['./pages/en/lazyload.md'], resolve)
  },
  '/en/range': {
    title: 'Range',
    language: 'en',
    component: resolve => require(['./pages/en/range.md'], resolve)
  },
  '/en/progress': {
    title: 'Progress',
    language: 'en',
    component: resolve => require(['./pages/en/progress.md'], resolve)
  },
  '/en/picker': {
    title: 'Picker',
    language: 'en',
    component: resolve => require(['./pages/en/picker.md'], resolve)
  },
  '/en/datetime-picker': {
    title: 'Datetime Picker',
    language: 'en',
    component: resolve => require(['./pages/en/datetime-picker.md'], resolve)
  },
  '/en/index-list': {
    title: 'Index List',
    language: 'en',
    component: resolve => require(['./pages/en/index-list.md'], resolve)
  },
  '/en/header': {
    title: 'Header',
    language: 'en',
    component: resolve => require(['./pages/en/header.md'], resolve)
  },
  '/en/tabbar': {
    title: 'Tabbar',
    language: 'en',
    component: resolve => require(['./pages/en/tabbar.md'], resolve)
  },
  '/en/navbar': {
    title: 'Navbar',
    language: 'en',
    component: resolve => require(['./pages/en/navbar.md'], resolve)
  },
  '/en/button': {
    title: 'Button',
    language: 'en',
    component: resolve => require(['./pages/en/button.md'], resolve)
  },
  '/en/cell': {
    title: 'Cell',
    language: 'en',
    component: resolve => require(['./pages/en/cell.md'], resolve)
  },
  '/en/spinner': {
    title: 'Spinner',
    language: 'en',
    component: resolve => require(['./pages/en/spinner.md'], resolve)
  },
  '/en/tab-container': {
    title: 'TabContainer',
    language: 'en',
    component: resolve => require(['./pages/en/tab-container.md'], resolve)
  },
  '/en/search': {
    title: 'Search',
    language: 'en',
    component: resolve => require(['./pages/en/search.md'], resolve)
  },
  '/en/switch': {
    title: 'Switch',
    language: 'en',
    component: resolve => require(['./pages/en/switch.md'], resolve)
  },
  '/en/checklist': {
    title: 'Checklist',
    language: 'en',
    component: resolve => require(['./pages/en/checklist.md'], resolve)
  },
  '/en/radio': {
    title: 'Radio',
    language: 'en',
    component: resolve => require(['./pages/en/radio.md'], resolve)
  },
  '/en/field': {
    title: 'Field',
    language: 'en',
    component: resolve => require(['./pages/en/field.md'], resolve)
  },
  '/en/badge': {
    title: 'Badge',
    language: 'en',
    component: resolve => require(['./pages/en/badge.md'], resolve)
  }
});

router.beforeEach(transition => {
  document.title = transition.to.title || document.title;
  transition.next();
});

export default function(Component, element) {
  router.start(Component, element);
};
