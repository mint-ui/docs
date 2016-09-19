# Cell

> A cell to display list, link or form.

----------


## Import

```javascript
import { Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);
```

## Example

Basic usage
```html
<mt-cell title="标题文字"></mt-cell>
<mt-cell title="标题文字" value="说明文字"></mt-cell>
```

Clickable link

```html
<mt-cell
  title="标题文字"
  href="//github.com"
  is-link
  value="带链接">
</mt-cell>
```

With icon

```html
<mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
```


With custom icon

```html
<mt-cell title="标题文字">
  <span>icon 是图片</span>
  <img slot="icon" src="../assets/100x100.png" width="24" height="24">
</mt-cell>
```

Custom content

```html
<mt-cell title="标题文字" is-link>
  <span style="color: green">这里是元素</span>
</mt-cell>
```

With description

```html
<mt-cell title="标题" label="描述信息" is-link></mt-cell>
```


## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
|   icon  |  cell icon   | String    |  back, more   |     |
| title | title of the cell | String | | |
| value | content of the cell | String | | |
| label | a description shown underneath the title | String | | |
| is-link | if the cell is a link, works with the href attribute | Boolean | | |

## Slot
| name | description |
|------|--------|
| - | custom content |
| title | custom title |
| icon | custom icon |
