# Popup

> 弹出框，可自定义内容。

-------------

## 引入

```javascript
import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);
```

## 例子

`position` 属性指定了 `popup` 的位置。比如，`position` 为 'bottom' 时，`popup` 会从屏幕下方移入，并最终固定在屏幕下方。移入/移出的动效会根据 `position` 的不同而自动改变，无需手动配置。

将 `visible` 属性与一个本地变量同步，通过操作这个变量即可控制 `popup` 的显示与隐藏。

```html
<mt-popup
  :visible.sync="popupVisible"
  position="bottom">
  ...
</mt-popup>
```

若省略 `position` 属性，则 `popup` 会相对于屏幕居中显示（若不想让其居中，可通过 CSS 对其重新定位）。此时建议将动效设置为 `popup-fade`，这样在显示/隐藏时会有淡入/淡出效果。

```html
<mt-popup
  :visible.sync="popupVisible"
  popup-transition="popup-fade">
  ...
</mt-popup>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| visible | 是否显示 `popup` | Boolean | | false |
| position | `popup` 的位置。省略则居中显示 | String | 'top'<br>'right'<br>'bottom'<br>'left' | |
| pop-transition | 显示/隐藏时的动效，仅在省略 `position` 时可配置 | String | 'popup-fade' | |
| modal | 是否创建一个 modal 层 | Boolean | | true |
| closeOnClickModal | 是否可以通过点击 modal 层来关闭 `popup` | Boolean | | true |

## Slot
| name | 描述 |
|------|--------|
| - | 弹出框的内容 |
