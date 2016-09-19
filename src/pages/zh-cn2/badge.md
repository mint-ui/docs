# Badge

> 徽章，可指定颜色和尺寸。

-----------

## 引入

```javascript
import { Badge } from 'mint-ui';

Vue.component(Badge.name, Badge);
```

## 例子

指定尺寸
```html
<mt-badge size="small">30</mt-badge>
<mt-badge size="normal">10</mt-badge>
<mt-badge size="large">10</mt-badge>
```

指定类型
```html
<mt-badge type="primary">30</mt-badge>
<mt-badge type="error">10</mt-badge>
<mt-badge type="success">10</mt-badge>
<mt-badge type="warning">10</mt-badge>
```

指定颜色
```html
<mt-badge size="small" color="#888">自定义颜色</mt-badge>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| type | 显示类型 | String | primary, error, success, warning | primary|
| color | 自定义颜色值| String | | type 的颜色 |
| size | 尺寸 | String | normal, large, small | normal |
## Slot
| name | 描述 |
|------|--------|
| - | 显示内容 |