# Action sheet

> 操作表，从屏幕下方移入。

-------------

## 引入

```javascript
import { Actionsheet } from 'mint-ui';

Vue.component(Actionsheet.name, Actionsheet);
```

## 例子

`actions` 属性绑定一个由对象组成的数组，每个对象有 `name` 和 `method` 两个键，`name` 为菜单项的文本，`method` 为点击该菜单项的回调函数。

将 `v-model` 绑定到一个本地变量，通过操作这个变量即可控制 `actionsheet` 的显示与隐藏。

```html
<mt-actionsheet
  :actions="actions"
  v-model="sheetVisible">
</mt-actionsheet>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| actions | 菜单项数组 | Array | | |
| cancelText | 取消按钮的文本。若设为空字符串，则不显示取消按钮 | String | | '取消' |
| closeOnClickModal | 是否可以通过点击 modal 层来关闭 `actionsheet` | Boolean | | true |
