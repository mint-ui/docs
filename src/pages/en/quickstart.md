# Quick start

This part walks you through the process of using Mint UI in a webpack project.

-----------
## Use vue-cli

```bash
npm install -g vue-cli

vue init webpack projectname
```

## Install Mint UI

```bash
npm install --save mint-ui
```
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
  components: { App }
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
  components: { App }
})
```

## Start coding

Now you have implemented Vue and Mint UI to your project, and it's time to write your code. Start development mode:

```bash
npm run dev
```

Build:

```bash
npm run build
```
Please refer to each component's documentation to learn their usage.
