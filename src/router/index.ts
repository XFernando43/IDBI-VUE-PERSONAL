import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/homePage.vue";
import LoginPage from "../views/loginPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component:HomePage,
        },
        {
            path:'/',
            name:'home',
            component: LoginPage
        }

    ]
})

export default router;