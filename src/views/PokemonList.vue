<template>
  <main class="home">
    <Pokemon v-for="(pokemon, index) in pokemons" v-bind:key="index" v-bind:pokemon="pokemon"/>
  </main>
</template>

<script>
import Pokemon from '@/components/Pokemon.vue';

export default {
  name: 'PokemonList',
  components: {
    Pokemon
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemons;
    }
  }
}
</script>
