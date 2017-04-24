# Palette Button


## Import

```javascript
import { PaletteButton } from 'mint-ui';

Vue.component(PaletteButton.name, PaletteButton);
```

## Example

basic usage
```html
    <mt-palette-button content="+">
      <div class="my-icon-button"></div>
      <div class="my-icon-button"></div>
      <div class="my-icon-button"></div>
    </mt-palette-button>
```

set option, event and trigger event menually

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


## Option
| Option | Desc. | Type | acceptable values | default |
|------|-------|---------|-------|--------|
|content | the text content of the main button | String | |
|offset | the offset arc of the fan-shaped area | Number | | Math.PI / 4 |
|direction | the direction of the fan-shaped area | string | lt, t, rt, r, rb, b, lb, l | lt
|radius| the radius of the fan-shaped area | Number | | 90 |
|mainButtonStyle| set the style of the main button | String |  |  |

![One picture worth thousands of word](/docs/static/palette-button.png)

## Method
| Method | Desc. |
|------|-------|
|toggle | toggle between expand and collapse |
|expand | expand all sub buttons |
|collapse | collapse all sub buttons |

## Event
| Event | Desc. |
|------|-------|
|expand | begin expand sub buttons |
|expanded | all sub buttons has been expanded(after animation end) |
|collapse | begin collapse sub buttons |
