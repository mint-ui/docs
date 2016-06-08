# mint-ui Docs

-------------

# Installation

```shell
npm install mint-ui --save
```

# Usage

Import all components.

```javascript
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);
```

Or import specified component.

```javascript
import Cell from 'mint-ui/lib/cell';
import 'mint-ui/lib/cell/style.css';

import Button from 'mint-ui/lib/button';
import 'mint-ui/lib/button/style.css';

Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
```

### Use [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)


