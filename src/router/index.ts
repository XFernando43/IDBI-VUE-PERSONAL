import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/auth/loginPage.vue";
import UserHomePage from "../views/auth/userHomePage.vue";
import AdminPage from "../views/admin/adminPage.vue";
import IncidentDetailPage from "../views/commons/incidentDetailPage.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'login',
            component: LoginPage
        },
        {
            path: '/home',
            name: 'home',
            component:UserHomePage,
        },
        {
            path:'/admin',
            name:'admin',
            component: AdminPage
        },
        {
            path:'/incident/:id',
            name:'incidentReview',
            component: IncidentDetailPage
        }

    ]
})

export default router;