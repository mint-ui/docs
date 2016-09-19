# Swipe

> 轮播图，可自定义轮播时间间隔、动画时长等。

-------------

## 引入

```javascript
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
```

## 例子

基础用法

```html
<mt-swipe :auto="4000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
```

隐藏 indicators

```html
<mt-swipe :show-indicators="false">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
```

取消自动播放

```html
<mt-swipe :auto="0">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| speed | 动画持时（毫秒） | Number | | 300 |
| auto | 自动播放的时间间隔（毫秒） | Number | | 3000 |
| continuous | 是否可以循环播放 | Boolean | | true |
| showIndicators | 是否显示 indicators | Boolean | | true |
| prevent | 是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能 | Boolean | | false |

## Slot

### mt-swipe
| name | 描述 |
|------|--------|
| - | 一个或多个 `mt-swipe-item` 组件 |

### mt-swipe-item
| name | 描述 |
|------|--------|
| - | 单个轮播图的内容 |
