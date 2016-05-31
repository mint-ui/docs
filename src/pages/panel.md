# Panel

> 面板，可切换显示子页面。

----------

## 例子

改变 ative 的值，与 `<panel-item>` 的 id 一致即显示对应页面。

```html
<mt-panel style="page-tabbar-panel" :active.sync="active">
  <mt-panel-item id="panel1">
    <mt-cell v-for="n in 10" :title="'panel1 ' + $index"></mt-cell>
  </mt-panel-item>
  <mt-panel-item id="panel2">
    <mt-cell v-for="n in 5" :title="'panel2 ' + $index"></mt-cell>
  </mt-panel-item>
  <mt-panel-item id="panel3">
    <mt-cell v-for="n in 7" :title="'panel3 ' + $index"></mt-cell>
  </mt-panel-item>
</mt-panel>
```

## API
### panel

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| active | 当前激活的 id | * | | |

### panel-item

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| id | item 的 id | * | | |
