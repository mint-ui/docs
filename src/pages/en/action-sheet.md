# Action sheet

> A menu sheet that slides from the bottom of the screen.

-------------

## Import

```javascript
import { Actionsheet } from 'mint-ui';

Vue.component(Actionsheet.name, Actionsheet);
```

## Example

`actions` is an array of objects. Each object has two keys: `name` and `method`. `name` is the text showing on the sheet, and `method`(optional) is the callback when clicked.

Sync `visible` with one of your vue instance variables. Toggle it to switch on/off the action sheet.

```html
<mt-actionsheet
  :actions="actions"
  :visible.sync="sheetVisible">
</mt-actionsheet>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| actions | array of actions | Array | | |
| visible | visibility of the action sheet | Boolean | | false |
| cancelText | text of the cancel button. If this is an empty string, no cancel button will show  | String | | '取消' |
| closeOnClickModal | if the action sheet turns off when the modal is clicked | Boolean | | true |
