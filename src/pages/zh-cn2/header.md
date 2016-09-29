# Header

> 顶部导航栏，支持显示按钮、自定义文字和固定在顶部。

-------------

## 引入

```javascript
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
```

## 例子

固定在页面顶部

```html
<mt-header fixed title="固定在顶部"></mt-header>
```

设置 `left` 或 `right` slot

```html
<mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
```

设置多个按钮

```html
<mt-header title="多个按钮">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
    <mt-button @click="handleClose">关闭</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| fixed | 固定在页面顶部 | Boolean | | false |
| title | 标题 | String | |  |

## Slot
| name | 描述 |
|------|--------|
| left | 左边显示元素 |
| right | 右边显示元素 |
