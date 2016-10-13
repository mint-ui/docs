# Mint UI 使用文档

---------


## 安装

```shell
npm install mint-ui@1 -save
```

## 快速开始

引入全部组件
```javascript
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);
```

只引入需要的组件
```javascript
import Cell from 'mint-ui/lib/cell';
import 'mint-ui/lib/cell/style.css';

import Button from 'mint-ui/lib/button';
import 'mint-ui/lib/button/style.css';

Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
```


### 使用 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component) 可以自动导入样式文件及按需加载

自动引入样式
```javascript
import Vue from 'vue';
import MintUI from 'mint-ui';

Vue.use(MintUI);
```

按需加载
```javascript
import Vue from 'vue';
import { Cell, Button } from 'mint-ui';

Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
```

将会被翻译成
```javascript
var Vue = require('vue');
var Cell = require('mint-ui/lib/cell');
require('mint-ui/lib/cell/style.css');

var Button = require('mint-ui/lib/button');
require('mint-ui/lib/button/style.css');

Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
```

### babel-plugin-component 配置
.babelrc
```json
{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "mint-ui", "style": true }
  ]]]
}
```
