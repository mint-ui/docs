# Choose a language

<style>
  .button-language {
    display: block;
    font-size: 20px;
    margin-bottom: 20px;
  }
</style>

<ul>
  <li v-for="item in $route.meta.langs">
    <router-link
      class="button-language"
      :to="{path: '/' + item.value}">
        {{ item.text + ($route.meta.default_lang.text === item.text ? ' (default)' : '') }}
    </router-link>
  </li>
</ul>
