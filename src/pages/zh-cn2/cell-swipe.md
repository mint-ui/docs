# Cell Swipe

> 可滑动的单元格，用法同 cell。

----------


## 引入

```javascript
import { CellSwipe } from 'mint-ui';

Vue.component(CellSwipe.name, CellSwipe);
```

## 例子

增加右滑动按钮

```html
<mt-cell-swipe
  title="标题文字"
  :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
  ]"></mt-cell-swipe>
```

`content` 可以是 HTML 或者纯文本。

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| icon  |  图标   | String    |  back, more   |     |
| title | 标题 | String | | |
| to    | 跳转链接 | String | | |
| value | 内容 | * | | |
| label | 备注信息，显示在标题下方 | String | | |
| is-link | 链接，会显示箭头图标。搭配 to 属性使用 | Boolean | | |
| left | 按钮组, `{ content, style, handler }` | Object[] | |
| right | 按钮组, `{ content, style, handler }` | Object[] | |

## Slot
| name | 描述 |
|------|--------|
| - | 自定义显示内容 |
| title | 自定义标题 |
| icon | 自定义图标 |
