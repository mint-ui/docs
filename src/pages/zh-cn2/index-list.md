# Index List

> 索引列表，可由右侧索引导航快速定位到相应的内容。

-------------

## 引入

```javascript
import { IndexList, IndexSection } from 'mint-ui';

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
```

## 例子

```html
<mt-index-list>
  <mt-index-section index="A">
    <mt-cell title="Aaron"></mt-cell>
    <mt-cell title="Alden"></mt-cell>
    <mt-cell title="Austin"></mt-cell>
  </mt-index-section>
  <mt-index-section index="B">
    <mt-cell title="Baldwin"></mt-cell>
    <mt-cell title="Braden"></mt-cell>
  </mt-index-section>
  ...
  <mt-index-section index="Z">
    <mt-cell title="Zack"></mt-cell>
    <mt-cell title="Zane"></mt-cell>
  </mt-index-section>
</mt-index-list>
```

`mt-index-section` 与右侧导航中的索引一一对应，`mt-index-section` 的 `index` 属性即为与其对应的索引的显示文本。`mt-index-section` 标签内可为任意自定义内容。

当手指在右侧导航中滑动时，会在列表中间显示一个目前索引值的提示符。若不需要提示符，只需将 `show-indicator` 设为 `false`

```html
<mt-index-list :show-indicator="false">
  ...
</mt-index-list>
```

## API
### mt-index-list
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| height | 组件的高度。若不指定，则自动延伸至视口底 | Number | | |
| showIndicator | 是否显示索引值提示符 | Boolean | | true |

### mt-index-section
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| index | 索引值（必需参数） | String | | |

## Slot
### mt-index-list
| name | 描述 |
|------|--------|
| - | 一个或多个 `mt-index-section` 组件 |

### mt-index-section
| name | 描述 |
|------|--------|
| - | 单个 `mt-index-section` 的内容 |