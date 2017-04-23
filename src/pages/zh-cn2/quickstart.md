# 快速上手

本节将介绍如何在项目中使用 Mint UI。

-----------

## 使用 vue-cli

```bash
npm install -g vue-cli

vue init webpack projectname
```

## 引入 Mint UI

你可以引入整个 Mint UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Mint UI。

### 完整引入

在 main.js 中写入以下内容：
```javascript
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.use(MintUI)

new Vue({
  el: '#app',
  components: { App }
})
```
以上代码便完成了 Mint UI 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：
```json
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]]
}
```

如果你只希望引入部分组件，比如 Button 和 Cell，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue'
import { Button, Cell } from 'mint-ui'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Cell)
 */

new Vue({
  el: '#app',
  components: { App }
})
```

## 开始使用

至此，一个基于 Vue 和 Mint UI 的开发环境已经搭建完毕，现在就可以编写代码了。启动开发模式：

```bash
npm run dev
```

编译：

```bash
npm run build
```
各个组件的使用方法请参阅它们各自的文档。
