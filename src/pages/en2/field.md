# Field

> Form field.

----------

## Import

```javascript
import { Field } from 'mint-ui';

Vue.component(Field.name, Field);
```

## Usage

Basic usage

```html
<mt-field label="username" placeholder="Input username"></mt-field>
<mt-field label="email" placeholder="Input email" type="email"></mt-field>
<mt-field label="password" placeholder="Input password" type="password"></mt-field>
<mt-field label="phone" placeholder="Input tel" type="tel"></mt-field>
<mt-field label="website" placeholder="Input website" type="url"></mt-field>
<mt-field label="number" placeholder="Input number" type="number"></mt-field>
<mt-field label="birthday" placeholder="Input birthday" type="date"></mt-field>
<mt-field label="introduction" placeholder="introduction" type="textarea" rows="4"></mt-field>
```


Configure validation results

```html
<mt-field label="email" state="success"></mt-field>
<mt-field label="email" state="error"></mt-field>
<mt-field label="email" state="warning"></mt-field>
```

Custom content
```html
<mt-field label="captcha">
  <img src="../assets/100x100.png" height="45px" width="100px">
</mt-field>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| type | type of the input | String | text, number, email, url, tel, date, datetime, password, textarea | text |
| label| label for the input | String | | |
| value| value for the input | String | | |
| rows | rows attribute of textarea | Number | | |
| placeholder | place holder for the input |String | | |
| disableClear | disable the clear button | Booean | | false |
| readonly | readonly |Boolean | | false |
| disabled | disabled |Boolean | | false |
| state | validation result | String | error, success, warning | |
| attr | set native attributes. e.g. `:attr="{ maxlength: 10 }"` | Object | |

## Slot
| name | description |
|------|--------|
| - | displayed text |
