# Choose a language

<style>
  .button-language {
    display: block;
    font-size: 20px;
    margin-bottom: 20px;
  }
</style>
<a class="button-language" v-link="{path: '/' + item.value}" v-for="item in $route.langs" v-text="item.text + ($route.default_lang.text === item.text ? ' (default)' : '')"></a>
