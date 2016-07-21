# Picker

> A picker with multi-slot interaction.

-------------

## Import

```javascript
import { Picker } from 'mint-ui';

Vue.component(Picker.name, Picker);
```

## Example

Configure `slots`. When any picked value changes，the `change` event triggers. `change` event has two parameters: the vue instance of the `picker` and an array made up of the picked values of each slot

```html
<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
```

```javascript
export default {
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
  },
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  }
};
```

## `change` event

In `change` event you can use some methods:
*  getSlotValue(index): get the picked value of a specific slot
*  setSlotValue(index, value): set the picked value of a specific slot. The second parameter `value` must be in this slot's `value` array
*  getSlotValues(index): get the `value` array of a specific slot
*  setSlotValues(index, values): set the `value` array of a specific slot
*  getValues(): returns an array made up of the picked values of each slot
*  setValues(values): set the picked values for each slot. `values` is an array and each value in `values` should be in the corresponding slot's `value` array

## `slots`

The `slots` array is made up of objects. Each object represents a slot

| key | description |
|------|--------|
| divider | if the corresponding slot is a divider |
| content | the text of the divider slot |
| values | array of acceptable values of the corresponding slot |
| defaultIndex | the index of the default picked value for the corresponding slot. Default is 0 |
| textAlign | alignment of the corresponding slot |
| flex | value of CSS `flex` for the corresponding slot |
| className | class name of the corresponding slot |

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| slots | the object array for slots | Array | | [] |
| showToolbar | if a toolbar is shown above the slots. Its content can be customized | Boolean | | false |
| visibleItemCount | the amount of visible values in each slot | Number | | 5 |

## Slot
| name | description |
|------|--------|
| - | the content of the toolbar when `showToolbar` is `true` |
