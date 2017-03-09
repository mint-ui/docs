# Message box

> 弹出式提示框，有多种交互形式。

-------------
## 引入

```javascript
import { MessageBox } from 'mint-ui';
```

## 例子

以标题与内容字符串为参数进行调用

```javascript
MessageBox('提示', '操作成功');
```

或者传入一个对象

```javascript
MessageBox({
  title: '提示',
  message: '确定执行此操作?',
  showCancelButton: true
});
```

此外，`MessageBox` 还提供了 `alert`、`confirm` 和 `prompt` 三个方法，它们都返回一个 Promise
```javascript
MessageBox.alert(message, title);
```
```javascript
MessageBox.alert('操作成功').then(action => {
  ...
});
```
```javascript
MessageBox.confirm(message, title);
```
```javascript
MessageBox.confirm('确定执行此操作?').then(action => {
  ...
});
```
```javascript
MessageBox.prompt(message, title);
```
```javascript
MessageBox.prompt('请输入姓名').then(({ value, action }) => {
  ...
});
```
在 prompt 中，若用户点击了取消按钮，则 Promise 的状态会变为 rejected

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| title | 提示框的标题 | String | | |
| message | 提示框的内容 | String | | |
| showConfirmButton | 是否显示确认按钮 | Boolean | | true |
| showCancelButton | 是否显示取消按钮 | Boolean | | false |
| confirmButtonText | 确认按钮的文本 | String | | |
| confirmButtonHighlight | 是否将确认按钮的文本加粗显示 | Boolean | | false |
| confirmButtonClass | 确认按钮的类名 | String | | |
| cancelButtonText | 取消按钮的文本 | String | | |
| cancelButtonHighlight | 是否将取消按钮的文本加粗显示 | Boolean | | false |
| cancelButtonClass | 取消按钮的类名 | String | | |
| closeOnClickModal | 是否在点击遮罩时关闭提示光 | Boolean | true (alert 为 false) | |
| showInput | 是否显示一个输入框 | Boolean | | false |
| inputType | 输入框的类型 | String | | 'text' |
| inputValue | 输入框的值 | String | | |
| inputPlaceholder | 输入框的占位符 | String | | |
