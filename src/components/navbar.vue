<template>
  <nav class="nav">
    <ul>
      <li>
        <a class="nav-link edit-doc-btn" href="https://github.com/mint-ui/docs" target="_blank">
          {{ isZH ? '参与文档编辑' : 'Edit Documentation' }}
        </a>
      </li>
      <li>
        <router-link
          class="nav-link"
          active-class="is-active"
          exact
          :to="{ path: '/' + $route.meta.language }">Overview</router-link>
      </li>
      <li>
        <router-link
          class="nav-link"
          :to="{ path: '/' + $route.meta.language + '/quickstart' }">Quickstart</router-link>
      </li>
      <li>
        <router-link
          class="nav-link"
          active-class="is-active"
          exact
          :to="{ path: '/' + $route.meta.language + '/repositories' }">Repositories</router-link>
      </li>

      <template v-for="group in navs">
        <li>
          <a
            href="#"
            @click.prevent="group.visible = !group.visible"
            class="nav-label"
            v-text="group.title">
          </a>
        </li>
        <ul v-show="group.visible" transition="slidedown" :style="{
            maxHeight: group.list.length * 36 + 'px'
          }">
          <li v-for="item in group.list">
            <router-link
              class="nav-link"
              :to="{ path: '/' + $route.meta.language + item.path }"
              active-class="is-active"
              v-text="item.name">
            </router-link>
          </li>
        </ul>
      </template>
    </ul>
  </nav>
</template>

<script>
  import NavsConfig from '../nav.config.json';

  NavsConfig.map(item => {
    item.visible = true;
    return item;
  });

  export default {
    data() {
      return {
        navs: NavsConfig,
        isZH: /zh/.test(navigator.language)
      };
    }
  };
</script>

<style lang="css" scoped>
  .edit-doc-btn {
    color: red !important;
  }

  .slidedown-transition {
    transition: all .3s ease-in-out;
    overflow: hidden;
    opacity: 1;
  }

  .slidedown-enter,
  .slidedown-leave {
    max-height: 0 !important;
    opacity: 0.3;
  }

  .nav {
    background-color: #f9fafb;
    color: #4c555a;
    font-size: 14px;
    min-height: 100%;
    padding: 42px 0 42px 20px;
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
    transition: color .2s;

    &.is-active {
      color: #4078c0;
      border-right: 2px solid;
    }

    &:hover {
      color: #4078c0;
    }
  }
</style>
