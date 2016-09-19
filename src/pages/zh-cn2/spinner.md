# Spinner

> 加载动画，可指定显示类型、尺寸和颜色。

-----------

## 引入

```javascript
import { Spinner } from 'mint-ui';

Vue.component(Spinner.name, Spinner);
```

## 例子

指定类型
```html
<mt-spinner type="snake"></mt-spinner>
<mt-spinner type="double-bounce"></mt-spinner>
<mt-spinner type="triple-bounce"></mt-spinner>
<mt-spinner type="fading-circle"></mt-spinner>

<!-- 或者接受传入类型的序号 -->
<mt-spinner :type="0"></mt-spinner>
<mt-spinner :type="1"></mt-spinner>
<mt-spinner :type="2"></mt-spinner>
<mt-spinner :type="3"></mt-spinner>
```

指定颜色
```html
<mt-spinner color="#26a2ff"></mt-spinner>
<mt-spinner color="rgb(100, 100, 100)"></mt-spinner>
<mt-spinner color="yellow"></mt-spinner>
```

指定尺寸
```html
<mt-spinner :size="60"></mt-spinner>
```


## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| type | 显示类型，提供四种风格，可以指定名称或者序号 | String、Number| snake <br> double-bounce <br> triple-bounce <br> fading-circle | snake |
| color | 颜色，接受 hex、rgb 等颜色值 | String | | #ccc |
| size | 尺寸，单位 px | Number || 28 |