# Checklist

> Checkbox list, dependency <a v-link="{path:'/' + $route.language + '/cell'}">cell</a>.

-----------

## Import

```javascript
import { Checklist } from 'mint-ui';

Vue.component(Checklist.name, Checklist);
```

## Usage

Basic usage.

```html
<mt-checklist
  title="checkbox list"
  :value.sync="value"
  :options="['optionA', 'optionB', 'optionC']">
</mt-checklist>
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
    label: 'checked disabled',
    value: 'valueE',
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
<mt-checklist
  :value.sync="value"
  :options="options">
</mt-checklist>
```

Maximum number of optional.

```html
<mt-checklist
  :max="2"
  :value.sync="value"
  :options="options">
</mt-checklist>
```

Align right.

```html
<mt-checklist
  align="right"
  :value.sync="value"
  :options="options">
</mt-checklist>
```

## API
| option | description | type | Optional | default |
|------|-------|---------|-------|--------|
| options | Allowed array of strings or array of objects. | Array | |
|value | value | Array | | |
|title | The list of title. | string | | |
|max| Maximum number of optional. | Number | | |
|align| Checkboxes position. | String | left, right | left |
