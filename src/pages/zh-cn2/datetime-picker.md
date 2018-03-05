# Datetime picker

> 日期时间选择器，支持自定义类型。

-------------

## 引入

```javascript
import { DatetimePicker } from 'mint-ui';

Vue.component(DatetimePicker.name, DatetimePicker);
```

## 例子

`v-model` 属性为组件的绑定值。

`type` 属性表示 `datetime-picker` 组件的类型，它有三个可能的值：
*  `datetime`: 日期时间选择器，可选择年、月、日、时、分，`value` 值为一个 `Date` 对象
*  `date`: 日期选择器，可选择年、月、日，`value` 值为一个 `Date` 对象
*  `time`: 时间选择器，可选择时、分，`value` 值为一个格式为 `HH:mm` 的字符串

`datetime-picker` 提供了两个供外部调用的方法：`open` 和 `close`，分别用于打开和关闭选择器。

```html
<template>
  <mt-datetime-picker
    ref="picker"
    type="time"
    v-model="value">
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

可以为选项提供自定义模板。模板须为一个包含了 `{value}` 的字符串，`{value}` 会被解析为相应选项的值。

```html
<mt-datetime-picker
  v-model="value"
  type="date"
  year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日">
</mt-datetime-picker>
```

当点击确认按钮时会触发 `confirm` 事件，参数为当前 value 的值。

```html
<mt-datetime-picker
  v-model="value"
  type="time"
  @confirm="handleConfirm">
</mt-datetime-picker>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| value | 绑定值 | Date / String(如：2018-1-1 00:00:00 , 2018/1/1 00:00:00 或者 2018.1.1 00:00:00) | | |
| type | 组件的类型 | String | 'datetime', 'date', 'time' | 'datetime' |
| cancelText | 取消按钮文本 | String | | '取消' |
| confirmText | 确定按钮文本 | String | | '确定' |
| startDate | 日期的最小可选值 | Date | | 十年前的 1 月 1 日 |
| endDate | 日期的最大可选值 | Date | | 十年后的 12 月 31 日 |
| startHour | 小时的最小可选值 | Number | | 0 |
| endHour | 小时的最大可选值 | Number | | 23 |
| yearFormat | 年份模板 | String | | '{value}' |
| monthFormat | 月份模板 | String | | '{value}' |
| dateFormat | 日期模板 | String | | '{value}' |
| hourFormat | 小时模板 | String | | '{value}' |
| minuteFormat | 分钟模板 | String | | '{value}' |
| closeOnClickModal | 是否可以通过点击 modal 层来关闭 popup | Boolean | | true |

## Events
| 事件名称 | 说明 | 回调参数 |
|------|-------|---------|
| confirm | 点击确认按钮时的回调函数 | 目前的选择值(为Date类型) |
| changeVisible | 改变弹窗显示隐藏的回调函数 | 弹窗是否可见 |
