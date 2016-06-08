# Checklist

> Checkbox list, dependency <a v-link="{path:'/' + $route.language + '/cell'}">cell</a>.

-----------

## Install

```javascript
import { Checklist } from 'mint-ui';

Vue.component(Checklist.name, Checklist);
```

## Usage

```html
<mt-checklist
  title="checkbox list"
  :value.sync="value"
  :options="['optionA', 'optionB', 'optionC']">
</mt-checklist>
```

Disable option

```javascript
this.options = [
  {
    label: 'disable',
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

设置最大可选数

```html
<mt-checklist
  :max="2"
  :value.sync="value"
  :options="options">
</mt-checklist>
```

选择框右对齐

```html
<mt-checklist
  align="right"
  :value.sync="value"
  :options="options">
</mt-checklist>
```

## API
| param | description | type | Optional | default |
|------|-------|---------|-------|--------|
| options | 选择项 | Array | |
|value | 绑定值 | Array | | |
|title | 标题，显示在列表上方 | string | | |
|max| 最多可选个数，超过后其他未选择的选项变成禁用状态 | Number | | |
|align| 复选框对其位置| String | left, right | left |
