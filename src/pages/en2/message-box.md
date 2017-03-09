# Message box

> A popup message box with multiple interacting forms.

-------------
## Import

```javascript
import { MessageBox } from 'mint-ui';
```

## Example

Open a message box with its `title` and `message`

```javascript
MessageBox('Notice', 'You clicked the button');
```

Or pass an object as its configuration

```javascript
MessageBox({
  title: 'Notice',
  message: 'Are you sure?',
  showCancelButton: true
});
```

Besides, `MessageBox` has three methods: `alert`, `confirm` and `prompt`. They all return a Promise
```javascript
MessageBox.alert(message, title);
```
```javascript
MessageBox.alert('Success!').then(action => {
  ...
});
```
```javascript
MessageBox.confirm(message, title);
```
```javascript
MessageBox.confirm('Are you sure?').then(action => {
  ...
});
```
```javascript
MessageBox.prompt(message, title);
```
```javascript
MessageBox.prompt('Please tell me your name').then(({ value, action }) => {
  ...
});
```
If the user clicks the cancel button in prompt, the returned Promise will be rejected

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| title | title of the message box | String | | |
| message | message of the message box | String | | |
| showConfirmButton | if a confirm button is displayed | Boolean | | true |
| showCancelButton | if a cancel button is displayed | Boolean | | false |
| confirmButtonText | text of the confirm button | String | | |
| confirmButtonHighlight | if the text of the confirm button is highlighted | Boolean | | false |
| confirmButtonClass | class name of the confirm button | String | | |
| cancelButtonText | text of the cancel button | String | | |
| cancelButtonHighlight | if the text of the cancel button is highlighted | Boolean | | false |
| cancelButtonClass | class name of the cancel button | String | | |
| closeOnClickModal | if message box will close when click on modal | Boolean | true (fasle for alert) | |
| showInput | if an input is displayed | Boolean | | false |
| inputType | type of the input | String | | 'text' |
| inputValue | value of the input | String | | |
| inputPlaceholder | place holder for the input | String | | |
