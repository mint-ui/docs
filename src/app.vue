<template>
  <main class="row main">
    <section class="col-2 is-scrollable navbar">
      <navbar></navbar>
    </section>
    <section class="col-6 is-scrollable content" v-el:main>
      <router-view></router-view>
    </section>
    <section class="col-4 demo">
      <phone></phone>
    </section>
  </main>
</template>

<script>
  import Navbar from './components/navbar';
  import Phone from './components/phone';

  export default {
    watch: {
      '$route.path'() {
        this.$els.main.scrollTop = 0;
      }
    },

    components: {
      Navbar,
      Phone
    }
  };
</script>

<style lang="css" scoped>
  .main {
    height: 100%;

    > section {
      height: inherit;
      overflow: hidden;

      &.is-scrollable {
        overflow: auto;
      }
    }
  }

  .navbar {
    min-width: 140px;
  }

  @media screen and (max-width: 960px) {
    .demo {
      display: none;
    }

    .content {
      width: 75%;
    }
  }
</style>
