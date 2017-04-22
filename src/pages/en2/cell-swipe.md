# Cell Swipe

> a swipe cell based on cell。

----------


## Import

```javascript
import { CellSwipe } from 'mint-ui';

Vue.component(CellSwipe.name, CellSwipe);
```

## Example

Add button group on the right

```html
<mt-cell-swipe
  title="text"
  :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
  ]"></mt-cell-swipe>
```

`content` allowed HTML or text;

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
|   icon  |  cell icon   | String    |  back, more   |     |
| title | title of the cell | String | | |
| to    | link | String | | |
| value | content of the cell | * | | |
| label | a description shown underneath the title | String | | |
| is-link | if the cell is a link, works with the `to` attribute | Boolean | | |
| left | button group, `{ content, style, handler }` | Object[] | |
| right | button group, `{ content, style, handler }` | Object[] | |

## Slot
| name | description |
|------|--------|
| - | custom content |
| title | custom title |
| icon | custom icon |
