# Tabbar

> Bottom tab bar.

-------------

## Import

```javascript
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
```

## Usage

```html
<mt-tabbar :selected.sync="selected">
  <mt-tab-item id="tab1">
    <img slot="icon" src="../assets/100x100.png">
    tab1
  </mt-tab-item>
  <mt-tab-item id="tab2">
    <img slot="icon" src="../assets/100x100.png">
    tab2
  </mt-tab-item>
  <mt-tab-item id="tab3">
    <img slot="icon" src="../assets/100x100.png">
    tab3
  </mt-tab-item>
  <mt-tab-item id="tab4">
    <img slot="icon" src="../assets/100x100.png">
    tab4
  </mt-tab-item>
</mt-tabbar>
```

## API

### tabbar
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| fixed | if the tab bar is fixed on bottom | Boolean | | false |
| selected | id of the selected tab item | * | |  |


### tab-item
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| id | id of the tab item. The item shows when its id equals to `selected` | * | |  |

## Slot

### tabbar
| name | description |
|------|--------|
| - | HTML content |

### tab-item
| name | description |
|------|--------|
| - | HTML content |
|icon | icon content |
