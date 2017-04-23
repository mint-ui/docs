import Vue from 'vue';
import VueRouter from 'vue-router';
import LANG_CONFIG from './langs.json';

Vue.use(VueRouter);

let defaultLang = {};

LANG_CONFIG.langs.forEach(item => {
  if (item.value === LANG_CONFIG.default) {
    defaultLang = item;
  }
});

const route = {
  '/': {
    component: resolve => require(['./pages/README.md'], resolve),
    default_lang: defaultLang,
    langs: LANG_CONFIG.langs,
    title: '选择语言'
  },
  '/zh-cn2': {
    title: '概述',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/README.md'], resolve)
  },
  '/zh-cn2/repositories': {
    title: '子项目',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/repositories.md'], resolve)
  },
  '/zh-cn2/quickstart': {
    title: '快速上手',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/quickstart.md'], resolve)
  },
  '/zh-cn2/toast': {
    title: 'Toast',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/toast.md'], resolve)
  },
  '/zh-cn2/indicator': {
    title: 'Indicator',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/indicator.md'], resolve)
  },
  '/zh-cn2/loadmore': {
    title: 'Loadmore',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/loadmore.md'], resolve)
  },
  '/zh-cn2/infinite-scroll': {
    title: 'Infinite scroll',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/infinite-scroll.md'], resolve)
  },
  '/zh-cn2/message-box': {
    title: 'Message box',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/message-box.md'], resolve)
  },
  '/zh-cn2/action-sheet': {
    title: 'Action sheet',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/action-sheet.md'], resolve)
  },
  '/zh-cn2/popup': {
    title: 'Popup',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/popup.md'], resolve)
  },
  '/zh-cn2/swipe': {
    title: 'Swipe',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/swipe.md'], resolve)
  },
  '/zh-cn2/lazyload': {
    title: 'Lazy load',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/lazyload.md'], resolve)
  },
  '/zh-cn2/range': {
    title: 'Range',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/range.md'], resolve)
  },
  '/zh-cn2/progress': {
    title: 'Progress',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/progress.md'], resolve)
  },
  '/zh-cn2/picker': {
    title: 'Picker',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/picker.md'], resolve)
  },
  '/zh-cn2/datetime-picker': {
    title: 'Datetime Picker',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/datetime-picker.md'], resolve)
  },
  '/zh-cn2/index-list': {
    title: 'Index List',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/index-list.md'], resolve)
  },
  '/zh-cn2/palette-button': {
    title: 'Palette Button (2.0)',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/palette-button.md'], resolve)
  },
  '/zh-cn2/header': {
    title: 'Header',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/header.md'], resolve)
  },
  '/zh-cn2/tabbar': {
    title: 'Tabbar',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/tabbar.md'], resolve)
  },
  '/zh-cn2/navbar': {
    title: 'Navbar',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/navbar.md'], resolve)
  },
  '/zh-cn2/button': {
    title: 'Button',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/button.md'], resolve)
  },
  '/zh-cn2/cell': {
    title: 'Cell',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/cell.md'], resolve)
  },
  '/zh-cn2/cell-swipe': {
    title: 'Cell Swipe',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/cell-swipe.md'], resolve)
  },
  '/zh-cn2/spinner': {
    title: 'Spinner',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/spinner.md'], resolve)
  },
  '/zh-cn2/tab-container': {
    title: 'TabContainer',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/tab-container.md'], resolve)
  },
  '/zh-cn2/search': {
    title: 'Search',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/search.md'], resolve)
  },
  '/zh-cn2/switch': {
    title: 'Switch',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/switch.md'], resolve)
  },
  '/zh-cn2/checklist': {
    title: 'Checklist',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/checklist.md'], resolve)
  },
  '/zh-cn2/radio': {
    title: 'Radio',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/radio.md'], resolve)
  },
  '/zh-cn2/field': {
    title: 'Field',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/field.md'], resolve)
  },
  '/zh-cn2/badge': {
    title: 'Badge',
    language: 'zh-cn2',
    component: resolve => require(['./pages/zh-cn2/badge.md'], resolve)
  },
  '/en2': {
    title: '概述',
    language: 'en2',
    component: resolve => require(['./pages/en2/README.md'], resolve)
  },
  '/en2/repositories': {
    title: '子项目',
    language: 'en2',
    component: resolve => require(['./pages/en2/repositories.md'], resolve)
  },
  '/en2/quickstart': {
    title: '快速上手',
    language: 'en2',
    component: resolve => require(['./pages/en2/quickstart.md'], resolve)
  },
  '/en2/toast': {
    title: 'Toast',
    language: 'en2',
    component: resolve => require(['./pages/en2/toast.md'], resolve)
  },
  '/en2/indicator': {
    title: 'Indicator',
    language: 'en2',
    component: resolve => require(['./pages/en2/indicator.md'], resolve)
  },
  '/en2/loadmore': {
    title: 'Loadmore',
    language: 'en2',
    component: resolve => require(['./pages/en2/loadmore.md'], resolve)
  },
  '/en2/infinite-scroll': {
    title: 'Infinite scroll',
    language: 'en2',
    component: resolve => require(['./pages/en2/infinite-scroll.md'], resolve)
  },
  '/en2/message-box': {
    title: 'Message box',
    language: 'en2',
    component: resolve => require(['./pages/en2/message-box.md'], resolve)
  },
  '/en2/action-sheet': {
    title: 'Action sheet',
    language: 'en2',
    component: resolve => require(['./pages/en2/action-sheet.md'], resolve)
  },
  '/en2/popup': {
    title: 'Popup',
    language: 'en2',
    component: resolve => require(['./pages/en2/popup.md'], resolve)
  },
  '/en2/swipe': {
    title: 'Swipe',
    language: 'en2',
    component: resolve => require(['./pages/en2/swipe.md'], resolve)
  },
  '/en2/lazyload': {
    title: 'Lazy load',
    language: 'en2',
    component: resolve => require(['./pages/en2/lazyload.md'], resolve)
  },
  '/en2/range': {
    title: 'Range',
    language: 'en2',
    component: resolve => require(['./pages/en2/range.md'], resolve)
  },
  '/en2/progress': {
    title: 'Progress',
    language: 'en2',
    component: resolve => require(['./pages/en2/progress.md'], resolve)
  },
  '/en2/picker': {
    title: 'Picker',
    language: 'en2',
    component: resolve => require(['./pages/en2/picker.md'], resolve)
  },
  '/en2/datetime-picker': {
    title: 'Datetime Picker',
    language: 'en2',
    component: resolve => require(['./pages/en2/datetime-picker.md'], resolve)
  },
  '/en2/index-list': {
    title: 'Index List',
    language: 'en2',
    component: resolve => require(['./pages/en2/index-list.md'], resolve)
  },
  '/en2/palette-button': {
    title: 'Palette Button (2.0)',
    language: 'en2',
    component: resolve => require(['./pages/en2/palette-button.md'], resolve)
  },
  '/en2/header': {
    title: 'Header',
    language: 'en2',
    component: resolve => require(['./pages/en2/header.md'], resolve)
  },
  '/en2/tabbar': {
    title: 'Tabbar',
    language: 'en2',
    component: resolve => require(['./pages/en2/tabbar.md'], resolve)
  },
  '/en2/navbar': {
    title: 'Navbar',
    language: 'en2',
    component: resolve => require(['./pages/en2/navbar.md'], resolve)
  },
  '/en2/button': {
    title: 'Button',
    language: 'en2',
    component: resolve => require(['./pages/en2/button.md'], resolve)
  },
  '/en2/cell': {
    title: 'Cell',
    language: 'en2',
    component: resolve => require(['./pages/en2/cell.md'], resolve)
  },
  '/en2/cell-swipe': {
    title: 'Cell Swipe',
    language: 'en2',
    component: resolve => require(['./pages/en2/cell-swipe.md'], resolve)
  },
  '/en2/spinner': {
    title: 'Spinner',
    language: 'en2',
    component: resolve => require(['./pages/en2/spinner.md'], resolve)
  },
  '/en2/tab-container': {
    title: 'TabContainer',
    language: 'en2',
    component: resolve => require(['./pages/en2/tab-container.md'], resolve)
  },
  '/en2/search': {
    title: 'Search',
    language: 'en2',
    component: resolve => require(['./pages/en2/search.md'], resolve)
  },
  '/en2/switch': {
    title: 'Switch',
    language: 'en2',
    component: resolve => require(['./pages/en2/switch.md'], resolve)
  },
  '/en2/checklist': {
    title: 'Checklist',
    language: 'en2',
    component: resolve => require(['./pages/en2/checklist.md'], resolve)
  },
  '/en2/radio': {
    title: 'Radio',
    language: 'en2',
    component: resolve => require(['./pages/en2/radio.md'], resolve)
  },
  '/en2/field': {
    title: 'Field',
    language: 'en2',
    component: resolve => require(['./pages/en2/field.md'], resolve)
  },
  '/en2/badge': {
    title: 'Badge',
    language: 'en2',
    component: resolve => require(['./pages/en2/badge.md'], resolve)
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
  '/zh-cn/quickstart': {
    title: '快速上手',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/quickstart.md'], resolve)
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
  '/zh-cn/cell-swipe': {
    title: 'Cell Swipe',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/cell-swipe.md'], resolve)
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
  '/en/quickstart': {
    title: '快速上手',
    language: 'en',
    component: resolve => require(['./pages/en/quickstart.md'], resolve)
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
  '/en/cell-swipe': {
    title: 'Cell Swipe',
    language: 'en',
    component: resolve => require(['./pages/en/cell-swipe.md'], resolve)
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
};

const router = new VueRouter({
  routes: formatRoute(route)
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || document.title;
  next();
});

function formatRoute(route) {
  return Object.keys(route).map((path) => {
    const { language, title, component } = route[path]

    return {
      name: path,
      component,
      path,
      meta: Object.assign({}, route[path], {
        language: language || defaultLang.value,
      })
    }
  })
}

export default router;
