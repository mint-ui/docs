<template>
  <div class="language-picker">
    {{ $language }}
    <button
      @click="handleClick(item.value)"
      v-for="item in langs"
      v-text="item.text">
    </button>
  </div>
</template>

<script>
export default {
  name: 'language-picker',

  computed: {
    langs() {
      return this.$options.langs;
    }
  },

  methods: {
    handleClick(value) {
      this.$language = value;
    }
  }
};
</script>

<style lang="css">
</style>
