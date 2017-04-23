# Mint UI 使用文档

本文将介绍 Mint UI 的安装方式和基本的用法。

---------


### npm 安装
推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm i mint-ui@1 -S
```

### CDN
目前可以通过 [unpkg.com/mint-ui@1](https://unpkg.com/mint-ui@1/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/mint-ui@1/lib/style.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/mint-ui@1/lib/index.js"></script>
```


### Hello world
通过 CDN 的方式我们可以很容易地使用 Mint UI 写出一个 Hello world 页面。

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- 引入样式 -->
  <link rel="stylesheet" href="https://unpkg.com/mint-ui@1/lib/style.css">
</head>
<body>
  <div id="app">
    <mt-button @click.native="handleClick">按钮</mt-button>
  </div>
</body>
  <!-- 先引入 Vue -->
  <script src="https://unpkg.com/vue@1/dist/vue.js"></script>
  <!-- 引入组件库 -->
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


如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：<router-link to="/zh-cn/quickstart">快速上手</a>。
