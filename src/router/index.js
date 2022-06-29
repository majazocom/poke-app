import { createRouter, createWebHistory } from 'vue-router'
import PokemonList from '../views/PokemonList.vue'
import PokemonInfo from '../views/PokemonInfo.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: PokemonList
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: PokemonInfo
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router