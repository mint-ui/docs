# Datetime picker

> A datetime picker.

-------------

## Import

```javascript
import { DatetimePicker } from 'mint-ui';

Vue.component(DatetimePicker.name, DatetimePicker);
```

## Example

The `value` attribute is the picked date / time.

The `type` attribute configures the type of the component, and it has three options:
*  `datetime`: datetime picker with 5 slots: year, month, date, hour and minute. In this case, `value` is a `Date` object
*  `date`: date picker with 3 slots: year, month and date. In this case, `value` is a `Date` object
*  `time`: time picker with 2 slots: hour and minute. In this case, `value` is a string formatted as `HH:mm`

Sync `visible` with one of your vue instance variables. Toggle it to switch on/off the picker.

```html
<mt-datetime-picker
  :visible.sync="pickerVisible"
  type="time"
  :value.sync="pickerValue">
</mt-datetime-picker>
```

You can configure a custom template for slot options. The template should be a string containing `{value}`, and `{value}` will be parsed to the corresponding value of the option.

```html
<mt-datetime-picker
  :visible.sync="pickerVisible"
  type="date"
  year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日">
</mt-datetime-picker>
```

When the confirm button is tapped, the `confirm` event triggers with `value` as its parameter.

```html
<mt-datetime-picker
  :visible.sync="pickerVisible"
  type="time"
  @confirm="handleConfirm">
</mt-datetime-picker>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| value | value of the picker | Date / String | | |
| visible | visibility of the picker | Boolean | | false |
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
