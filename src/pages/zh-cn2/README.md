# Mint UI 使用文档

本文将介绍 Mint UI 的安装方式和基本的用法。

---------


### npm 安装
推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm i mint-ui -S
```

### CDN
目前可以通过 [unpkg.com/mint-ui](https://unpkg.com/mint-ui/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/mint-ui/lib/style.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/mint-ui/lib/index.js"></script>
```


### Hello world
通过 CDN 的方式我们可以很容易地使用 Mint UI 写出一个 Hello world 页面。

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- 引入样式 -->
  <link rel="stylesheet" href="https://unpkg.com/mint-ui/lib/style.css">
</head>
<body>
  <div id="app">
    <mt-button @click.native="handleClick">按钮</mt-button>
  </div>
</body>
  <!-- 先引入 Vue -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- 引入组件库 -->
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
<iframe width="100%" height="300" src="//jsfiddle.net/cinwell_li/Lr75y28t/1/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：<router-link to="/zh-cn2/quickstart">快速上手</a>。

<br>

**关于事件绑定**

在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 `.native` 修饰符：
```html
<my-component @click.native="handleClick">Click Me</my-component>
```
从易用性的角度出发，我们对 `Button` 组件进行了处理，使它可以监听 `click` 事件：
```html
<mt-button @click="handleButtonClick">Click Me</mt-button>
```
但是对于其他组件，还是需要添加 `.native` 修饰符。
