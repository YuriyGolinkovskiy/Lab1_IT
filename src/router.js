import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('./pages/MainPage.vue'),
    },
    {
        path: '/catalog',
        component: () => import('./pages/CatalogPage.vue'),
    },
    {
        path: '/catalog/:title',
        component: () => import('./pages/ProductPage.vue'),
    },
    {
        path: '/product/:id',
        component: () => import('./pages/ProductInfoPage.vue'),
    },
    {
        path: '/feedBack',
        component: () => import('./pages/FeedBackPage.vue'),
    },
    {
        path: '/cart',
        component: () => import('./pages/CartPage.vue'),
    },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
