# Indicator

> 加载提示框，支持自定义文本和加载图标。

-------------
## 引入

```html
import { Indicator } from 'mint-ui';
```

## 例子

当需要显示加载提示框时，调用 `open` 方法

```html
Indicator.open();
```

在加载图标下方显示文本

```html
Indicator.open('加载中...');
```

也可以在调用时传入一个对象

```html
Indicator.open({
  text: '加载中...',
  spinnerType: 'fading-circle'
});
```

调用 `close` 方法将其关闭
```html
Indicator.close();
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| text | 文本内容 | String | | |
| spinnerType | 加载图标的类型 | String | 'snake' 'fading-circle' 'double-bounce' 'triple-bounce' | 'snake' |
