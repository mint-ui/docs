# Lazy load

> A lazy load directive for images.

-------------

## Import

```javascript
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
```

## Example

Add the `v-lazy` directive to `img` elements with its value set to the URL of an image. And remember to configure the style of the loading image.

```html
<ul>
  <li v-for="item in list">
    <img v-lazy="item">
  </li>
</ul>
```

```css
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
```

If the image list is not scrolling on `window`, you'll have to pass the `id` of the scrolled element to `v-lazy` as its modifier

```html
<div id="container">
  <ul>
    <li v-for="item in list">
      <img v-lazy.container="item">
    </li>
  </ul>
</div>
```
