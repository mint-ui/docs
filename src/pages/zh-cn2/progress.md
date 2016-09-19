# Progress

> 进度条。

-------------

## 引入

```javascript
import { Progress } from 'mint-ui';

Vue.component(Progress.name, Progress);
```

## 例子

传入 `value` 作为进度条的值。可自定义它的线宽

```html
<mt-progress :value="20" :bar-height="5"></mt-progress>
```

可在进度条两侧显示文字

```html
<mt-progress :value="60">
  <div slot="start">0%</div>
  <div slot="end">100%</div>
</mt-progress>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| value | 进度条的值（%） | Number | | |
| barHeight | 进度条的线宽（像素） | Number | | 1 |

## Slot
| name | 描述 |
|------|--------|
| start | 进度条左侧 DOM |
| end | 进度条右侧 DOM |
