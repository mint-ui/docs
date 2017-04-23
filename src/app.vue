<template>
  <main
    class="row main"
    :class="{'slide-in-left': navbarShow}">
    <section
      class="col-2 is-scrollable navbar">
      <navbar></navbar>
    </section>
    <section class="col-6 is-scrollable content" ref="main" @click="navbarShow = false">
      <div class="navbar-toggle-container">
        <button class="navbar-toggle" @click="toggleNavbar">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <router-view></router-view>
    </section>
    <section class="col-4 demo">
      <phone></phone>
    </section>
  </main>
</template>

<script type="text/babel">
  import Navbar from './components/navbar';
  import Phone from './components/phone';

  export default {
    watch: {
      '$route.path'() {
        this.$refs.main.scrollTop = 0;
        setTimeout(() => {
          this.navbarShow = false;
        }, 200);
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
    },

    methods: {
      toggleNavbar(event) {
        event.stopPropagation();
        this.navbarShow = !this.navbarShow;
      }
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

  .content {
    padding-bottom: 2em;
  }

  .navbar {
    min-width: 140px;
    padding-left: 0;
  }

  .navbar-toggle-container {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .main {
      min-width: 0;
      box-sizing: border-box;
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .demo {
      display: none;
    }

    .content {
      width: 100%;
      padding: 45px 10px 0;
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
      padding: 0;
    }

    .slide-in-left {
      transform: translate3d(60%, 0, 0);

      .navbar {
        opacity: 1;
      }
    }

    .navbar-toggle-container {
      box-sizing: border-box;
      display: block;
      position: fixed;
      padding-left: 10px;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #26a2ff;
      z-index: 10;
    }

    .navbar-toggle {
      display: block;
      background-color: #26a2ff;
      border-radius: 4px;
      border: 1px solid #fff;
      height: 35px;
      margin: 10px 0;
      padding: 2px 6px;
      outline: none;
      width: 35px;
      z-index: 10;
      span {
        display: block;
        width: 100%;
        height: 2px;
        margin: 4px auto;
        background-color: #fff;
      }
    }
  }
</style>
