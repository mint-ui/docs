# Tabbar
> 底部选项卡，点击 tab 会切换显示的页面。依赖 tab-item 组件。
-------------

## 例子

```html
<mt-tabbar :selected.sync="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" src="../assets/100x100.png">
    <span slot="label">外卖</span>
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="../assets/100x100.png">
    <span slot="label">订单</span>
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="../assets/100x100.png">
    <span slot="label">发现</span>
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="../assets/100x100.png">
    <span slot="label">我的</span>
  </mt-tab-item>
</mt-tabbar>
```

与 <a v-link="{path:'/panel'}">panel</a> 搭配使用

## API

### tabbar
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| fixed | 固定在页面顶部 | boolean | | false |
| selected | 返回当前选中的 tab-item 的 id | * | |  |


### tab-item
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| id | 选中后的返回值 | * | |  |
| icon | icon 图标 | slot | |  |
| text | 显示文字 | slot | |  |
