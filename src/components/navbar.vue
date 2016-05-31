<template>
  <nav class="nav">
    <ul>
      <li>
        <a
          class="nav-link"
          v-link="'/'">首页</a>
      </li>

      <template v-for="group in navs">
        <li>
          <label
            class="nav-label"
            v-text="group.title">
          </label>
        </li>
        <li v-for="item in group.list">
          <a
            class="nav-link"
            v-link="{ path: item.path, activeClass: 'is-active' }"
            v-text="item.name">
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
  import { navs } from '../route';

  export default {
    data() {
      return {
        navs: navs
      };
    }
  };
</script>

<style lang="css" scoped>
  .nav {
    background-color: #f9fafb;
    color: #4c555a;
    font-size: 14px;
    height: 100%;
    padding-left: 20px;
    padding-top: 30px;
  }

  .nav-label {
    color: #9da5b3;
    font-weight: bold;
    padding: 8px;
    display: block;
  }

  .nav-link {
    padding: 8px;
    display: block;
    text-decoration: none;
    color: inherit;

    &.is-active {
      color: #4078c0;
      border-right: 2px solid;
    }

    &:hover {
      color: #4078c0;
    }
  }
</style>
