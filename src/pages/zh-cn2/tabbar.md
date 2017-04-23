# Tabbar

> 底部选项卡，点击 tab 会切换显示的页面。依赖 tab-item 组件。

-------------

## 引入

```javascript
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
```

## 例子

搭配 <router-link :to="{ path:'/' + $route.meta.language + '/tab-container' }">tab-container</router-link> 组件使用

```html
<mt-tabbar v-model="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" src="../assets/100x100.png">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="../assets/100x100.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="../assets/100x100.png">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="../assets/100x100.png">
    我的
  </mt-tab-item>
</mt-tabbar>
```

## API

### tabbar
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| fixed | 固定在页面底部 | Boolean | | false |
| value | 返回当前选中的 tab-item 的 id | * | |  |


### tab-item
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| id | 选中后的返回值 | * | |  |

## Slot

### tabbar
| name | 描述 |
|------|--------|
| - | 内容 |

### tab-item
| name | 描述 |
|------|--------|
| - | 显示文字|
|icon | icon 图标|
