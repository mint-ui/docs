# Quick start

This part walks you through the process of using Mint UI in a webpack project.

-----------

## Use Starter Kit

We provide a general [project template](https://github.com/mint-ui/mint-ui-starter) for you. If you prefer not to use it, please read the following.

## Config files

Create a new project, and its structure should be
```text
|- src/  --------------------- source code
    |- App.vue
    |- main.js  -------------- entry
|- .babelrc  ----------------- babel config
|- index.html  --------------- HTML template
|- package.json  ------------- npm config
|- README.md  ---------------- readme
|- webpack.config.json  ------ webpack config
```

Typical configurations for these config files are:

**.babelrc**
```json
{
  "presets": [
    ["es2015", { "modules": false }]
  ]
}
```

<br>

**package.json**
```json
{
  "name": "my-project",
  "description": "A Vue.js and Mint UI project",
  "private": true,
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --inline --hot --port 8087",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
  },
  "dependencies": {
    "mint-ui": "^2.0.4",
    "vue": "^2.0.3"
  },
  "devDependencies": {
    "babel-core": "^6.0.0",
    "babel-loader": "^6.0.0",
    "babel-preset-es2015": "^6.13.2",
    "cross-env": "^1.0.6",
    "css-loader": "^0.23.1",
    "file-loader": "^0.8.5",
    "style-loader": "^0.13.1",
    "vue-loader": "^9.5.1",
    "webpack": "2.1.0-beta.22",
    "webpack-dev-server": "^2.1.0-beta.0"
  }
}
```

<br>

**webpack.config.js**
```javascript
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}

```

## Import Mint UI

You can import Mint UI entirely, or just import what you need. Let's first take a look at full import.

### Full import

In main.js:
```javascript
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.use(MintUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
The above imports Mint UI entirely. Note that CSS file needs to be imported separately.

### On demand

With the help of [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component), we can import components we actually need, making the project smaller than otherwise.

First install babel-plugin-component:

```bash
npm install babel-plugin-component -D
```

Then edit .babelrc:
```json
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]]
}
```

If you need Button and Cell, edit main.js:

```javascript
import Vue from 'vue'
import { Button, Cell } from 'mint-ui'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
/* or
 * Vue.use(Button)
 * Vue.use(Cell)
 */

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## Start coding

Now you have implemented Vue and Mint UI to your project, and it's time to write your code. Start development mode:

```bash
# visit localhost:8087
npm run dev
```

Build:

```bash
npm run build
```
Please refer to each component's documentation to learn their usage.
