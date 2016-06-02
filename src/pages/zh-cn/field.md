# Field

> 表单编辑器。

----------

## 例子

基础用法
```html
<mt-field label="用户名" placeholder="请输入用户名"></mt-field>
<mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
<mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
<mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
<mt-field label="网站" placeholder="请输入网址" type="url"></mt-field>
<mt-field label="数字" placeholder="请输入数字" type="number"></mt-field>
<mt-field label="生日" placeholder="请输入生日" type="date"></mt-field>
<mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
```

设置校验状态
```html
<mt-field label="邮箱" state="success"></mt-field>
<mt-field label="邮箱" state="error"></mt-field>
<mt-field label="邮箱" state="warning"></mt-field>
```


## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| type | 输入框类型 | String | text, number, email, url, tel, date, datetime, password, textarea | text |
| label| 标签 | String | | |
| rows | 类型为 textarea 时可指定高度（显示行数）| Number | | |
| placeholder | 占位内容 |String | | |
| state | 校验状态 | String | error, success, warning | |
