# Range

> A slide block. Custom step, min value and max value supported.

-------------

## Import

```javascript
import { Range } from 'mint-ui';

Vue.component(Range.name, Range);
```

## Example

Sync `value` with one of your vue instance variables

```html
<mt-range v-model="rangeValue"></mt-range>
```

More configurable options

```html
<mt-range
  v-model="rangeValue"
  :min="10"
  :max="90"
  :step="10"
  :bar-height="5">
</mt-range>
```

Show texts on both sides of `mt-range`

```html
<mt-range v-model="rangeValue">
  <div slot="start">0</div>
  <div slot="end">100</div>
</mt-range>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| value | value of the range | Number | | |
| min | min possible value | Number | | 0 |
| max | max possible value | Number | | 100 |
| step | step of the range | Number | | 1 |
| disabled | if the range is disabled | Boolean | | false |
| barHeight | height of the slide bar | Number | | 1 |

## Slot
| name | description |
|------|--------|
| start | DOM on the left of the slide block |
| end | DOM on the right of the slide block |
