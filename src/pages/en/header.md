# Header

> Top navigation bar.

-------------

## Import

```javascript
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
```

## Usage

Fixed at the top of the page

```html
<mt-header fixed title="fixed top"></mt-header>
```

`left` or `right` slot

```html
<mt-header title="long long long long title">
  <mt-button v-link="'/'" icon="back" slot="left">back</mt-button>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
```

Multiple buttons

```html
<mt-header title="multiple button">
  <div slot="left">
    <mt-button v-link="'/'" icon="back">back</mt-button>
    <mt-button @click="handleClose">close</mt-button>
  </div>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| fixed | if the header is fixed on top | Boolean | | false |
| title | title of the header | String | | |

## Slot
| name | description |
|------|--------|
| left | HTML content on the left |
| right | HTML content on the right |
