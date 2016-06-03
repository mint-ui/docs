<template>
  <main
    class="row main"
    :class="{'slide-in-left': navbarShow}">
    <button class="navbar-toggle" @click="navbarShow = !navbarShow">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <section
      class="col-2 is-scrollable navbar">
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

    data() {
      return {
        navbarShow: false
      };
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
    padding: 0 10px;
    min-width: 960px;
    transition: transform .3s ease-in-out;

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

  .navbar-toggle {
    background-color: #fff;
    border-radius: 4px;
    border: 1px dashed #ccc;
    display: none;
    height: 45px;
    margin: 10px;
    outline: none;
    width: 45px;
    position: fixed;
    z-index: 10;

    span {
      display: block;
      width: 100%;
      height: 2px;
      margin: 4px auto;
      background-color: #444;
    }
  }

  @media screen and (max-width: 768px) {
    .main {
      min-width: 0;
    }

    .demo {
      display: none;
    }

    .content {
      width: 100%;
    }

    .navbar {
      left: 0;
      margin-left: -60%;
      margin-right: 0;
      opacity: 1;
      position: absolute;
      top: 0;
      transition: opacity .3s;
      width: 60%;
      z-index: 10;
      min-width: auto;
    }

    .slide-in-left {
      transform: translate3d(60%, 0, 0);

      .navbar {
        opacity: 1;
      }
    }

    .navbar-toggle {
      display: block;
    }
  }
</style>
