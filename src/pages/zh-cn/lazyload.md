# Lazy load

> 图片懒加载指令。

-------------

## 引入

```javascript
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
```

## 例子

为 `img` 元素添加 `v-lazy` 指令，指令的值为图片的地址。同时需要设置图片在加载时的样式。

```html
<ul>
  <li v-for="item in list">
    <img v-lazy="item">
  </li>
</ul>
```

```css
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
```

若列表不在 window 上滚动，则需要将被滚动元素的 id 属性以修饰符的形式传递给 `v-lazy` 指令

```html
<div id="container">
  <ul>
    <li v-for="item in list">
      <img v-lazy.container="item">
    </li>
  </ul>
</div>
```
