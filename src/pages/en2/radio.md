# Radio

> Radio list, depends on <a v-link="{path:'/' + $route.language + '/cell'}">cell</a>.

-------------

## Import

```javascript
import { Radio } from 'mint-ui';

Vue.component(Radio.name, Radio);
```

## Usage

Basic usage

```html
<mt-radio
  title="radio list"
  v-model="value"
  :options="['optionA', 'optionB', 'optionC']">
</mt-radio>
```

Can be disabled

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
  v-model="value"
  :options="options">
</mt-radio>
```

Alignment of the radio

```html
<mt-radio
  align="right"
  v-model="value"
  :options="options">
</mt-radio>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| options | array of options(string or object) | Array | |
|value | array of the selected option | Array | | |
|title | title of the list | string | | |
|align| alignment of the radio | String | left, right | left |

