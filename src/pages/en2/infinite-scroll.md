# Infinite scroll

> An infinite scroll directive.

-------------

## Import

```javascript
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
```

## Example

To use infinite scroll, simply add `v-infinite-scroll` to the HTML element. Scroll this element until the distance between its bottom and the bottom of the scrollable container is within the `infinite-scroll-distance` threshold, the method appointed as `v-infinite-scroll` will run.

```html
<ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in list">{{ item }}</li>
</ul>
```

```javascript
loadMore() {
  this.loading = true;
  setTimeout(() => {
    let last = this.list[this.list.length - 1];
    for (let i = 1; i <= 10; i++) {
      this.list.push(last + i);
    }
    this.loading = false;
  }, 2500);
}
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| infinite-scroll-disabled | if `true`, infinite scroll will not be triggered | Boolean | | false |
| infinite-scroll-distance | distance threshold to trigger the load-method | Number | | 0 |
| infinite-scroll-immediate-check | if `true`, the directive will check immediately after binding. Useful if it's possible that the content is not tall enough to fill up the scrollable container. | Boolean | | true |
| infinite-scroll-listen-for-event | infinite scroll will check again when the event is emitted in a Vue instance | Function | | |
