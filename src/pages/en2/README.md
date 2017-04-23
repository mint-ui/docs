# Mint UI documentation

This part introduces installation and basic usage of Mint UI.

-------------
### npm
Installing with npm is recommended, for it works seamlessly with [webpack](https://webpack.js.org/).

```shell
npm i mint-ui -S
```

### CDN
Get the latest version from [unpkg.com/mint-ui](https://unpkg.com/mint-ui/), and import JavaScript and CSS file in your page.

```html
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/mint-ui/lib/style.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/mint-ui/lib/index.js"></script>
```


### Hello world
If you are using CDN, a Hello world page is easy to code with Mint UI.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/mint-ui/lib/style.css">
</head>
<body>
  <div id="app">
    <mt-button @click.native="handleClick">Button</mt-button>
  </div>
</body>
  <!-- import Vue before Mint UI -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/mint-ui/lib/index.js"></script>
  <script>
    new Vue({
      el: '#app',
      methods: {
        handleClick: function() {
          this.$toast('Hello world!')
        }
      }
    })
  </script>
</html>
```
<iframe width="100%" height="300" src="//jsfiddle.net/leopoldthecuber/jd6on9vr/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

If you are using npm and wish to apply webpack, please continue to the next page: <router-link to="/en2/quickstart">Quick Start</a>.

<br>

**About event handlers**

In Vue 2.0, to listen for a native DOM event on a component, you'll need to use the `.native` modifier:
```html
<my-component @click.native="handleClick">Click Me</my-component>
```
For the sake of usability, we handled the `Button` component so that it can listen to `click` events:
```html
<mt-button @click="handleButtonClick">Click Me</mt-button>
```
But for other components, the `.native` modifier is still required.
