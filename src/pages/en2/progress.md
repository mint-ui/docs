# Progress

> A progress bar

-------------

## Import

```javascript
import { Progress } from 'mint-ui';

Vue.component(Progress.name, Progress);
```

## Example

Set `value` as the value of the progress bar. The width of the bar is also configurable

```html
<mt-progress :value="20" :bar-height="5"></mt-progress>
```

Show texts on both sides of the progress bar

```html
<mt-progress :value="60">
  <div slot="start">0%</div>
  <div slot="end">100%</div>
</mt-progress>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| value | value of the progress bar(%) | Number | | |
| barHeight | width of the bar(pixel) | Number | | 1 |

## Slot
| name | description |
|------|--------|
| start | DOM on the left of the progress bar |
| end | DOM on the right of the progress bar |
