# Switch

> 开关。

----------

## 引入

```javascript
import { Switch } from 'mint-ui';

Vue.component(Switch.name, Switch);
```

## 例子

```html
<mt-switch :value.sync="value"></mt-switch>
```

带显示内容
```html
<mt-switch :value.sync="value">开关</mt-switch>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| value | 绑定值 | Boolean | | |

## Slot

| name | 描述 |
|------|--------|
| - | 显示内容 |