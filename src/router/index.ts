import { createRouter, createWebHashHistory } from 'vue-router';
import TheMatch from '../components/TheMatch.vue'
import TheRecentMatches from '../components/TheRecentMatches.vue';

const routes = [
    { path: '/', name: 'Recent matches', component: TheRecentMatches },
    { path: '/match/:id', name: 'Match', component: TheMatch }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;