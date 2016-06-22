# Navbar

> A top navigation panel, similar to <a v-link="{path:'/tabbar'}">Tabbar</a>. Dependent on tab-item.

------------

## Import

```javascript
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
```

## Example
Works with <a v-link="{path:'/tab-container'}">tab-container</a>

```html
<mt-navbar class="page-part" :selected.sync="selected">
  <mt-tab-item id="1">选项一</mt-tab-item>
  <mt-tab-item id="2">选项二</mt-tab-item>
  <mt-tab-item id="3">选项三</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container :active.sync="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'内容 ' + n"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'选项 ' + n"></mt-cell>
  </mt-tab-container-item>
</mt-tab-container>
```

## API

### navbar

| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| fixed | if the component is fixed at the top | Boolean | | false |
| selected | id of the selected tab-item | * | |  |

### tab-item
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| id | id of tab-item | * | |  |

## Slot
### navbar
| name | description |
|------|--------|
| - | content |

### tab-item
| name | description |
|------|--------|
| - | displayed text |
|icon | icon |

