# Loadmore

> 下拉/上拉刷新，支持自定义 HTML 模板。

-------------

## 引入

```javascript
import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);
```

## 例子

```html
<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  <ul>
    <li v-for="item in list">{{ item }}</li>
  </ul>
</mt-loadmore>
```

以列表顶部的下拉刷新为例：按住列表，下拉一定距离（通过 `topDistance` 配置）后释放，被指定为 `top-method` 的方法就会执行

```javascript
loadTop() {
  ...// 加载更多数据
  this.$refs.loadmore.onTopLoaded();
}
```
注意在这个方法的最后需要手动调用 `loadmore` 的 `onTopLoaded` 事件。这是因为在加载数据后需要对组件进行一些重新定位的操作。

列表底部的上拉刷新与之类似

```javascript
loadBottom() {
  ...// 加载更多数据
  this.allLoaded = true;// 若数据已全部获取完毕
  this.$refs.loadmore.onBottomLoaded();
}
```
唯一的区别是，当底部数据全部获取完毕时，可以将绑定到组件 `bottom-all-loaded` 属性的变量赋值为 `true`，这样 `bottom-method` 就不会再次执行了。

手指在屏幕上滑动的距离与组件实际移动的距离比值可以通过 `distance-index` 参数配置，默认值为 2。

## 自定义 HTML 模板

可以为列表顶部和底部的加载提示区域提供自定义的 HTML 模板
```html
<template>
  <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
  </mt-loadmore>
</template>
<script>
  export default {
    data() {
      return {
        topStatus: '',
        // ...
      };
    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },
      // ...
    },
    // ...
  };
</script>
```
比如需要配置列表顶部的 HTML，则需要为自定义 HTML 模板的最外层标签设置 `slot` 属性为 `top`，类名为 `mint-loadmore-top`。当用户滑动组件时，组件会有以下几个状态：
*  `pull`：组件已经被按下，但按下的距离未达到 `topDistance`，此时释放不会触发 `top-method`，列表会回到初始位置
*  `drop`：按下的距离不小于 `topDistance`，此时释放会触发 `top-method`
*  `loading`：组件已被释放，`top-method` 正在执行
每当组件的状态发生变化时，`loadmore` 都会触发 `top-status-change` 方法，参数为组件目前的状态。因此可以像本例一样，使用一个 `handleTopChange` 方法来处理组件状态的变化。

## 配置加载提示区域的文字
在不使用自定义 HTML 模板的情况下，可以配置 `loadmore` 本身自带的加载提示区域的文字。以列表顶部为例，对应于 `status` 的三个状态，可配置的属性依次为 `topPullText`、`topDropText` 和 `topLoadingText`。与之对应的底部属性为 `bottomPullText`、`bottomDropText` 和 `bottomLoadingText`。

## 自动检测
`loadmore` 在初始化时会自动检测它的高度是否能够撑满其容器，如果不能则会调用 `bottom-method`，直到撑满容器为止。如果不希望使用这一机制，可以将 `auto-fill` 设为 `false`。

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| autoFill | 若为真，`loadmore` 会自动检测并撑满其容器 | Boolean | | true |
| distanceIndex | 手指移动与组件移动距离的比值 | Number | | 2 |
| maxDistance | 组件可移动的最大距离（像素），若为 0 则不限制 | Number | | 0 |
| topPullText | `topStatus` 为 `pull` 时加载提示区域的文字 | String | | '下拉刷新' |
| topDropText | `topStatus` 为 `drop` 时加载提示区域的文字 | String | | '释放更新' |
| topLoadingText | `topStatus` 为 `loading` 时加载提示区域的文字 | String | | '加载中...' |
| topDistance | 触发 `topMethod` 的下拉距离阈值（像素） | Number | | 70 |
| topMethod | 下拉刷新执行的方法 | Function | | |
| bottomPullText | `bottomStatus` 为 `pull` 时加载提示区域的文字 | String | | '上拉刷新' |
| bottomDropText | `bottomStatus` 为 `drop` 时加载提示区域的文字 | String | | '释放更新' |
| bottomLoadingText | `bottomStatus` 为 `loading` 时加载提示区域的文字 | String | | '加载中...' |
| bottomDistance | 触发 `bottomMethod` 的上拉距离阈值（像素） | Number | | 70 |
| bottomMethod | 上拉刷新执行的方法 | Function | | |
| bottomAllLoaded | 若为真，则 `bottomMethod` 不会被再次触发 | Boolean | | false |

## Events
| 事件名称 | 说明 | 回调参数 |
|------|-------|---------|
| top-status-change | 组件顶部状态发生变化时的回调函数 | 组件顶部的新状态名 |
| bottom-status-change | 组件底部状态发生变化时的回调函数 | 组件底部的新状态名 |

## Slot
| name | 描述 |
|------|--------|
| - | 数据列表 |
| top | 自定义顶部加载提示区域 HTML 模板 |
| bottom | 自定义底部加载提示区域 HTML 模板 |
