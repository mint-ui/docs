# Toast

> A brief toast box. Custom location, duration and style supported.

-------------
## Import

```javascript
import { Toast } from 'mint-ui';
```

## Example

Basic Usage

```javascript
Toast('Upload Complete');
```

To configure more options, invoke `Toast` with an object

```javascript
Toast({
  message: 'Upload Complete',
  position: 'bottom',
  duration: 5000
});
```

If you need to put an icon font above the text, just add another key named `iconClass` and set it to whatever icon class you wish to use(please prepare icon fonts your self)

```javascript
Toast({
  message: 'operation success',
  iconClass: 'mintui mintui-success'
});
```

The `Toast` function returns a `Toast` instance, which has a `close` method to close the `Toast` manually.

```javascript
let instance = Toast('Upload Complete');
setTimeout(() => {
  instance.close();
}, 2000);
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| message | toast text content | String | | |
| position | location of the toast | String | 'top'<br>'bottom'<br>'middle' | 'middle' |
| duration | time duration(in millisecond). Toast will not close automatically if set to -1 | Number | | 3000 |
| className | class name of the toast | String | | |
| iconClass | class name of the icon font | String | |  |
