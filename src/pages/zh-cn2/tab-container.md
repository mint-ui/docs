# tab-container

> 面板，可切换显示子页面。

----------

## 引入

```javascript
import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
```

## 例子

改变 ative 的值，与 `<tab-container-item>` 的 id 一致即显示对应页面。

```html
<mt-tab-container v-model="active">
  <mt-tab-container-item id="tab-container1">
    <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container2">
    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container3">
    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
  </mt-tab-container-item>
</mt-tab-container>
```

## API
### tab-container

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| value | 当前激活的 id | * | | |
| swipeable | 显示滑动效果 | Boolean | | false |

### tab-container-item

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| id | item 的 id | * | | |


## Slot
### tab-container
| name | 描述 |
|------|--------|
| - | 内容 |

### tab-container-item
| name | 描述 |
|------|--------|
| - | 内容 |
