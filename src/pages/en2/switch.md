# Switch

> Switch button.

---------------

## Import

```javascript
import { Switch } from 'mint-ui';

Vue.component(Switch.name, Switch);
```

## Usage

```html
<mt-switch v-model="value"></mt-switch>
```

With extra text

```html
<mt-switch v-model="value">Switch</mt-switch>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| value | value of the switch | Boolean | | |

## Event
| name | return |
| ---- | ----- |
| change | checked: Boolean |

## Slot

| name | description |
|------|--------|
| - | text content |