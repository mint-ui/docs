# Index List

> An indexed list, can be navigated by index.

-------------

## Import

```javascript
import { IndexList, IndexSection } from 'mint-ui';

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
```

## Example

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

Each `mt-index-section` corresponds with one of the index in the index navigator. The `index` attribute of `mt-index-section` is the display text of its corresponding index. Any custom content can be nested inside `mt-index-section`.

When your finger moves on the index navigator, an index indicator will be displayed at the center of the list. If the indicator is not desired, simply set `show-indicator` to `false`.

```html
<mt-index-list :show-indicator="false">
  ...
</mt-index-list>
```

## API
### mt-index-list
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| height | height of the component. Automatically extends to the bottom of the viewport if not specified | Number | | |
| showIndicator | if an index indicator is created | Boolean | | true |

### mt-index-section
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| index | index value(required) | String | | |

## Slot
### mt-index-list
| name | description |
|------|--------|
| - | one or more `mt-index-section` components |

### mt-index-section
| name | description |
|------|--------|
| - | the content of a single `mt-index-section` |