# Mint UI documentation

This part introduces installation and basic usage of Mint UI.

-------------
### npm
Installing with npm is recommended, for it works seamlessly with [webpack](https://webpack.js.org/).

```shell
npm i mint-ui@1 -S
```

### CDN
Get the latest version from [unpkg.com/mint-ui@1](https://unpkg.com/mint-ui@1/), and import JavaScript and CSS file in your page.

```html
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/mint-ui@1/lib/style.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/mint-ui@1/lib/index.js"></script>
```


### Hello world
If you are using CDN, a Hello world page is easy to code with Mint UI.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/mint-ui@1/lib/style.css">
</head>
<body>
  <div id="app">
    <mt-button @click.native="handleClick">Button</mt-button>
  </div>
</body>
  <!-- import Vue before Mint UI -->
  <script src="https://unpkg.com/vue@1/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/mint-ui@1/lib/index.js"></script>
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

If you are using npm and wish to apply webpack, please continue to the next page: <router-link to="/en/quickstart">Quick Start</a>.
