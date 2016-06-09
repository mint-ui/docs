# Field

> form fields.

----------

## Import

```javascript
import { Field } from 'mint-ui';

Vue.component(Field.name, Field);
```

## Usage

Basic usage.

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


Validation states.

```html
<mt-field label="email" state="success"></mt-field>
<mt-field label="email" state="error"></mt-field>
<mt-field label="email" state="warning"></mt-field>
```


## API
| option | description | type | Optional | default |
|------|-------|---------|-------|--------|
| type | input type, include textarea | String | text, number, email, url, tel, date, datetime, password, textarea | text |
| label| label | String | | |
| rows | rows attribute of the textarea | Number | | |
| placeholder | placeholder |String | | |
| state | validation states | String | error, success, warning | |
