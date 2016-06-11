# Indicator

> Loading indicator. Custom text and spinner supported.

-------------
## Import

```javascript
import { Indicator } from 'mint-ui';
```

## Example

Open an indicator

```javascript
Indicator.open();
```

Display text below the spinner

```javascript
Indicator.open('Loading...');
```

Open an indicator with an object

```javascript
Indicator.open({
  text: 'Loading...',
  spinnerType: 'fading-circle'
});
```

Then close it
```javascript
Indicator.close();
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| text | indicator text | String | | |
| spinnerType | type of the spinner | String | 'snake'<br>'fading-circle'<br>'double-bounce'<br>'triple-bounce' | 'snake' |
