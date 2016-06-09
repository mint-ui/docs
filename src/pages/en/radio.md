# Radio

> Radio list, dependency <a v-link="{path:'/' + $route.language + '/cell'}">cell</a>.

-------------

## Import

```javascript
import { Radio } from 'mint-ui';

Vue.component(Radio.name, Radio);
```

## Usage

Basic usage.

```html
<mt-radio
  title="radio list"
  :value.sync="value"
  :options="['optionA', 'optionB', 'optionC']">
</mt-radio>
```

Disable option.

```javascript
this.options = [
  {
    label: 'disabled option',
    value: 'valueF',
    disabled: true
  },
  {
    label: 'optionA',
    value: 'valueA'
  },
  {
    label: 'optionB',
    value: 'valueB'
  }
];
```

```html
<mt-radio
  title="radio list"
  :value.sync="value"
  :options="options">
</mt-radio>
```

Align right.

```html
<mt-radio
  align="right"
  :value.sync="value"
  :options="options">
</mt-radio>
```

## API
| option | description | type | Optional | default |
|------|-------|---------|-------|--------|
| options | Allowed array of strings or array of objects. | Array | |
|value | value | Array | | |
|title | The list of title. | string | | |
|align| Checkboxes position. | String | left, right | left |

