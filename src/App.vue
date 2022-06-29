<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
//här vill vi få in våra pokemons från vår store
export default {
  created() {
    this.$store.dispatch('getPokemons');
  }
}
</script>

<style>
body {
  background-color: rgb(44, 39, 39)
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
