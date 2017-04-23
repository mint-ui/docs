# Palette Button

> 调色板按钮

-------------

## 引入

```javascript
import { PaletteButton } from 'mint-ui';

Vue.component(PaletteButton.name, PaletteButton);
```

## 例子

基本用法
```html
    <mt-palette-button content="+">
      <div class="my-icon-button"></div>
      <div class="my-icon-button"></div>
      <div class="my-icon-button"></div>
    </mt-palette-button>
```

设置参数和事件，以及手动触发事件

```javascript
    methods: {
      main_log(val) {
        console.log('main_log', val);
      },
      sub_log(val) {
        console.log('sub_log', val);
        this.$refs.target_1.collapse();
      }
    }
```

```html
    <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
      direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
      style="left:30px;">
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
    </mt-palette-button>
```


## 选项
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
|content | 主按钮内容 | String | |
|offset | 角度偏移量 | Number | | Math.PI / 4 |
|direction | 按钮展开方向 | string | lt, t, rt, r, rb, b, lb, l | lt
|radius| 按钮展开半径 | Number | | 90 |
|mainButtonStyle| 主按钮样式| String |  |  |

![一图胜千言](/docs/static/palette-button.png)

## 方法
| 方法名 | 说明 |
|------|-------|
|toggle | 切换按钮展开/收起状态 |
|expand | 展开按钮 |
|collapse | 收起按钮 |

## 事件
| 事件名 | 说明 |
|------|-------|
|expand | 按钮开始展开 |
|expanded | 按钮完全展开（动画效果执行结束） |
|collapse | 按钮开始收起 |
