# Badge

> Highlight new or unread items.

-----------

## Import

```javascript
import { Badge } from 'mint-ui';

Vue.component(Badge.name, Badge);
```

## Usage


Specify size.

```html
<mt-badge size="small">30</mt-badge>
<mt-badge size="normal">10</mt-badge>
<mt-badge size="large">10</mt-badge>
```

Specify type.

```html
<mt-badge type="primary">30</mt-badge>
<mt-badge type="error">10</mt-badge>
<mt-badge type="success">10</mt-badge>
<mt-badge type="warning">10</mt-badge>
```

Customize color.

```html
<mt-badge size="small" color="#888">customize color</mt-badge>
```

## API
| option | description | type | Optional | default |
|------|-------|---------|-------|--------|
| type | type | String | primary, error, success, warning | primary|
| color | CSS color value | String | | |
| size | size | String | normal, large, small | normal |
## Slot
| name | description |
|------|--------|
| - | Display content. |
