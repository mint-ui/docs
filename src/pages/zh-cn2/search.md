# Search

> 搜索框，可显示搜索结果列表。

----------

## 引入

```javascript
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);
```

## 例子

基础用法
```html
<mt-search v-model="value"></mt-search>
```

设置显示文字
```html
<mt-search
  v-model="value"
  cancel-text="取消"
  placeholder="搜索">
</mt-search>
```

带搜索结果
```html
<mt-search v-model="value" :result.sync="result"></mt-search>
```

自定义搜索结果
```html
<mt-search v-model="value">
  <mt-cell
    v-for="item in result"
    :title="item.title"
    :value="item.value">
  </mt-cell>
</mt-search>
```



## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| value | 搜索结果绑定值  | String | |   |
|cancel-text | 取消按钮文字 | String | | 取消 |
|placeholder | 搜索框占位内容  | String | | 搜索 |
| result | 搜索结果列表 | Array | | |
| autofocus | 自动聚焦 | Boolean | - | false |
| show | 始终显示搜索列表 | Boolean | - | false |

## Slot

| name | 描述 |
|------|--------|
| - | 自定义搜索结果列表|
