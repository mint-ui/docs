# Navbar

> 顶部选项卡，与 <router-link to="tabbar">Tabbar</router-link> 类似，依赖 tab-item 组件。

------------

## 引入

```javascript
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
```

## 例子
搭配 <router-link to="tab-container">tab-container</router-link>> 组件使用

```html
<mt-navbar class="page-part" :selected.sync="selected">
  <mt-tab-item id="1">选项一</mt-tab-item>
  <mt-tab-item id="2">选项二</mt-tab-item>
  <mt-tab-item id="3">选项三</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container :active.sync="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'内容 ' + n"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'选项 ' + n"></mt-cell>
  </mt-tab-container-item>
</mt-tab-container>
```

## API

### navbar

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| fixed | 固定在页面顶部 | Boolean | | false |
| selected | 返回当前选中的 tab-item 的 id | * | |  |

### tab-item
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| id | 选中后的返回值 | * | |  |

## Slot
### navbar
| name | 描述 |
|------|--------|
| - | 内容 |

### tab-item
| name | 描述 |
|------|--------|
| - | 显示文字|
|icon | icon 图标|
