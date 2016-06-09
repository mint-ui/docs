# Tabbar

> Bottom tab bar.

-------------

## Import

```javascript
import { Tabbar, TabbarItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabbarItem.name, TabbarItem);
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
| option | description | type | Optional | default |
|------|-------|---------|-------|--------|
| fixed | fixed bottom | Boolean | | false |
| selected | tab-item id | * | |  |


### tab-item
| option | description | type | Optional | default |
|------|-------|---------|-------|--------|
| id | When `selected` equal to the id, this component displays. | * | |  |

## Slot

### tabbar
| name | 描述 |
|------|--------|
| - | HTML content |

### tab-item
| name | 描述 |
|------|--------|
| - | HTML content |
|icon | icon content |
