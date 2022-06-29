<template>
  <main>
    <article
      class="pokemonframe"
      v-bind:style="{ backgroundColor: pokemon.color, color: '#fff' }"
    >
      <article>
        <a href="#" v-on:click="close">&leftarrow;</a>
      </article>
      <section>
        <aside>
          <p>{{ pokemon.id }}</p>
        </aside>
        <section>
          <section>
            <h2>{{ pokemon.name }}</h2>
            <h3>{{ pokemon.type }}</h3>
          </section>
        </section>
      </section>
      <section class="info">
        <h2>Info</h2>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: "PokemonInfo",
  computed: {
    pokemon() {
      return this.$store.state.selectedPokemon;
    },
  },
  methods: {
      close: function() {
          this.$router.push('/');
      }
  }
};
</script>