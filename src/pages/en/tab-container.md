# tab-container

> A switching panel.

----------

## Import

```javascript
import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
```

## Example

Only the `<mt-tab-container-item>` whose `id` equals the `active` attribute in `mt-tab-container` will be displayed.

```html
<mt-tab-container :active.sync="active">
  <mt-tab-container-item id="tab-container1">
    <mt-cell v-for="n in 10" :title="'tab-container1 ' + $index"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container2">
    <mt-cell v-for="n in 5" :title="'tab-container2 ' + $index"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container3">
    <mt-cell v-for="n in 7" :title="'tab-container3 ' + $index"></mt-cell>
  </mt-tab-container-item>
</mt-tab-container>
```

## API
### tab-container

| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| active | the `id` of the active tab | * | | |
| swipeable | swipe effect | Boolean | | false |

### tab-container-item

| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| id | id of each item | * | | |


## Slot
### tab-container
| name | description |
|------|--------|
| - | content of the container. Made up of several `tab-container-item`s |

### tab-container-item
| name | description |
|------|--------|
| - | content of each item |
