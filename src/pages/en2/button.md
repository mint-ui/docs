# Button

> Buttons with configurable type, size and customized icons.

------------

## Import

```javascript
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
```

## Example

Configure color

```html
<mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>
```

Configure size

```html
<mt-button size="small">small</mt-button>
<mt-button size="large">large</mt-button>
<mt-button size="normal">normal</mt-button>
```

Disabled

```html
<mt-button disabled>disabled</mt-button>
```

Ghost button

```html
<mt-button plain>plain</mt-button>
```

With icon
```html
<mt-button icon="back">back</mt-button>
<mt-button icon="more">more</mt-button>
```

With custom icon
```html
<mt-button>
  <img src="../assets/100x100.png" height="20" width="20" slot="icon">
  icon
</mt-button>
```

## API

| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| plain | if the button is a ghost button | Boolean | | false |
| disabled | if the button is disabled | Boolean | | false |
| type | type of the button | String |  default, primary, danger | default |
| size | size of the button | String | small, normal, large | normal |
| icon | button icon | String | more, back | |

## Slot
| name | description |
|------|--------|
| - | displayed text |
| icon | custom icon |

