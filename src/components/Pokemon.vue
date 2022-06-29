<template>
    <article v-on:click="showPokemonInfo" v-bind:style="{backgroundColor: color, color: '#fff'}">
        <section>
            <h2>{{name}}</h2>
            <h3>{{type}}</h3>
        </section>
    </article>
</template>
<script>
export default {
    name: "Pokemon",
    props: {
        pokemon: Object
    },
    computed: {
        name() {
            return this.pokemon.name;
        },
        type() {
            return this.pokemon.type;
        },
        color() {
            return this.pokemon.color;
        }
    },
    methods: {
        showPokemonInfo: function() {
            console.log(this.pokemon);
            this.$store.commit('addSelected', this.pokemon);
            this.$router.push('/pokemon');
        }
    }
}
</script>