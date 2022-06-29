import { createStore } from 'vuex'

export default createStore({
    state: {
        pokemons: [],
        selectedPokemon: {}
    },
    mutations: {
        //en mutation för att få in våra pokemons i statet
        addPokemons(state, pokemons) {
            state.pokemons = pokemons;
        }
        //en mutation för att få in vald pokemon i statet (selectedPokemon)
    },
    actions: {
        //fetcha från vår json och som kallar på vår "lägga till pokemons"-mutation
        async getPokemons(ctx) {
            const response = await fetch('../../assets/pokemons.json');
            const data = await response.json();
            ctx.commit('addPokemons', data.pokemons);
            console.log('Pokemons: ', data);
        }
    }
})