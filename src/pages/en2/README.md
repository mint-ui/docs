# Mint UI documentation

-------------

# Installation

```shell
npm install mint-ui@next --save
```

# Usage

Import all components

```javascript
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);
```

Or import on demand

```javascript
import Cell from 'mint-ui/lib/cell';
import 'mint-ui/lib/cell/style.css';

import Button from 'mint-ui/lib/button';
import 'mint-ui/lib/button/style.css';

Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
```

## Use [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)

Style sheet will be automatically imported

```javascript
import Vue from 'vue';
import MintUI from 'mint-ui';

Vue.use(MintUI);
```

import on demand
```javascript
import Vue from 'vue';
import { Cell, Button } from 'mint-ui';

Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
```

Equals to
```javascript
var Vue = require('vue');
var Cell = require('mint-ui/lib/cell');
require('mint-ui/lib/cell/style.css');

var Button = require('mint-ui/lib/button');
require('mint-ui/lib/button/style.css');

Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
```

## Install `babel-plugin-component`
```shell
npm i babel-plugin-component -D
```

Configure .babelrc like this
```json
{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "mint-ui", "style": true }
  ]]]
}
```


