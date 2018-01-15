# Datetime picker

> A datetime picker.

-------------

## Import

```javascript
import { DatetimePicker } from 'mint-ui';

Vue.component(DatetimePicker.name, DatetimePicker);
```

## Example

The `v-model` attribute is the picked date / time.

The `type` attribute configures the type of the component, and it has three options:
*  `datetime`: datetime picker with 5 slots: year, month, date, hour and minute. In this case, `value` is a `Date` object
*  `date`: date picker with 3 slots: year, month and date. In this case, `value` is a `Date` object
*  `time`: time picker with 2 slots: hour and minute. In this case, `value` is a string formatted as `HH:mm`

`datetime-picker` provides two methods you can execute: `open` and `close`. They open and close the picker respectively.

```html
<template>
  <mt-datetime-picker
    ref="picker"
    type="time"
    v-model="pickerValue">
  </mt-datetime-picker>
</template>

<script>
  export default {
    methods: {
      openPicker() {
        this.$refs.picker.open();
      }
    }
  };
</script>
```

You can configure a custom template for slot options. The template should be a string containing `{value}`, and `{value}` will be parsed to the corresponding value of the option.

```html
<mt-datetime-picker
  v-model="pickerVisible"
  type="date"
  year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日">
</mt-datetime-picker>
```

When the confirm button is tapped, the `confirm` event triggers with `value` as its parameter.

```html
<mt-datetime-picker
  v-model="pickerVisible"
  type="time"
  @confirm="handleConfirm">
</mt-datetime-picker>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| type | type of the picker | String | 'datetime', 'date', 'time' | 'datetime' |
| cancelText | text of the cancel button | String | | '取消' |
| confirmText | text of the confirm button | String | | '确定' |
| startDate | minimum possible date | Date | | Jan. 1st a decade ago |
| endDate | maximal possible date | Date | | Dec. 31st a decade after |
| startHour | minimum possible value for hour | Number | | 0 |
| endHour | maximal possible value for hour | Number | | 23 |
| yearFormat | custom template for year | String | | '{value}' |
| monthFormat | custom template for month | String | | '{value}' |
| dateFormat | custom template for date | String | | '{value}' |
| hourFormat | custom template for hour | String | | '{value}' |
| minuteFormat | custom template for minute | String | | '{value}' |
| closeOnClickModal | if the popup turns off when the modal is clicked | Boolean | | true |
## Events
| event name | description | parameters |
|------|-------|---------|
| confirm | callback when the confirm button is clicked | current value of the picker |
| changeVisible | callback when pop open or close | current value of pop visible |
