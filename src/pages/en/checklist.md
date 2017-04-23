# Checklist

> Checkbox list, depends on <router-link to="cell">cell</a>.

-----------

## Import

```javascript
import { Checklist } from 'mint-ui';

Vue.component(Checklist.name, Checklist);
```

## Usage

Basic usage

```html
<mt-checklist
  title="checkbox list"
  :value.sync="value"
  :options="['optionA', 'optionB', 'optionC']">
</mt-checklist>
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

Configure the maximum amount of checked options

```html
<mt-checklist
  :max="2"
  :value.sync="value"
  :options="options">
</mt-checklist>
```

Alignment of the check box

```html
<mt-checklist
  align="right"
  :value.sync="value"
  :options="options">
</mt-checklist>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| options | array of options(string or object) | Array | |
|value | array of checked options | Array | | |
|title | title of the list | String | | |
|max| maximum amount of checked options | Number | | |
|align| alignment of the check box | String | left, right | left |
