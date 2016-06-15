# Badge

> Highlight new items/unread notifications.

-----------

## Import

```javascript
import { Badge } from 'mint-ui';

Vue.component(Badge.name, Badge);
```

## Usage


Configure size

```html
<mt-badge size="small">30</mt-badge>
<mt-badge size="normal">10</mt-badge>
<mt-badge size="large">10</mt-badge>
```

And type

```html
<mt-badge type="primary">30</mt-badge>
<mt-badge type="error">10</mt-badge>
<mt-badge type="success">10</mt-badge>
<mt-badge type="warning">10</mt-badge>
```

Even color

```html
<mt-badge size="small" color="#888">custom color</mt-badge>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| type | type of the badge | String | primary, error, success, warning | primary|
| color | CSS color value | String | | |
| size | size of the badge | String | normal, large, small | normal |
## Slot
| name | description |
|------|--------|
| - | test content |
