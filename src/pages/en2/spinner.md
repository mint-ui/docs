# Spinner

> A loading spinner with custom type, size and color.

-----------

## Import

```javascript
import { Spinner } from 'mint-ui';

Vue.component(Spinner.name, Spinner);
```

## Example

Custom type

```html
<mt-spinner type="snake"></mt-spinner>
<mt-spinner type="double-bounce"></mt-spinner>
<mt-spinner type="triple-bounce"></mt-spinner>
<mt-spinner type="fading-circle"></mt-spinner>

<!-- accepts a 0-3 number -->
<mt-spinner :type="0"></mt-spinner>
<mt-spinner :type="1"></mt-spinner>
<mt-spinner :type="2"></mt-spinner>
<mt-spinner :type="3"></mt-spinner>
```

Custom color

```html
<mt-spinner color="#26a2ff"></mt-spinner>
<mt-spinner color="rgb(100, 100, 100)"></mt-spinner>
<mt-spinner color="yellow"></mt-spinner>
```

Custom size

```html
<mt-spinner :size="60"></mt-spinner>
```


## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| type | type of the spinner. Accepts a name(String) or an index(Number) | String, Number| snake <br> double-bounce <br> triple-bounce <br> fading-circle | snake |
| color | color of the spinner. Hex and RGB format accepted  | String | | #ccc |
| size | size of the spinner(in pixel) | Number || 28 |