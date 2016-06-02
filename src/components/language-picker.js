import Component from './language-picker.vue';

export default function install(Vue, opts) {
  const data = {};

  Object.defineProperty(data, 'lang', {
    writable: false,
    value: opts.default || ''
  });
  Vue.util.defineReactive(Vue.prototype, '$language', data.lang);
  Vue.prototype.$language = data.lang;

  Component.langs = opts.langs;
  Vue.component(Component.name, Component);
};
