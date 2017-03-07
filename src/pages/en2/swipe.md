# Swipe

> An image slider. Custom interval and animation duration supported.

-------------

## Import

```javascript
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
```

## Example

Basic usage

```html
<mt-swipe :auto="4000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
```

hide indicators

```html
<mt-swipe :show-indicators="false">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
```

cancel auto-play

```html
<mt-swipe :auto="0">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
```

`change` event

`change` event triggers every time swipe item switches, and the parameter is the index of the entering item

```html
<mt-swipe @change="handleChange">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
```

```javascript
methods: {
  handleChange(index) {
    ...
  }
}
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| speed | duration of the animation(in millisecond) | Number | | 300 |
| auto | interval of auto-play(in millisecond) | Number | | 3000 |
| defaultIndex | index of the initially visible slide | Number | | 0 |
| continuous | if an infinite slider without endpoints is created | Boolean | | true |
| showIndicators | visibility of indicators | Boolean | | true |
| prevent | if `preventDefault` is executed on `touchstart`. Useful for some lower version Android Browsers(4.2 etc.) | Boolean | | false |
| stopPropagation | if `stopPropagation` is executed on `touchstart`. | Boolean | | false |

## Slot

### mt-swipe
| name | description |
|------|--------|
| - | one or more `mt-swipe-item` components |

### mt-swipe-item
| name | description |
|------|--------|
| - | the content of a single slide |
