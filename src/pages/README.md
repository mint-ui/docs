# Choose a language

<style>
  .button-language {
    display: block;
    font-size: 20px;
    margin-bottom: 20px;
  }
</style>

<ul>
  <li v-for="item in $route.langs">
    <a
      class="button-language"
      v-link="{path: '/' + item.value}">
        {{ item.text + ($route.default_lang.text === item.text ? ' (default)' : '') }}
      </a>
  </li>
</ul>
