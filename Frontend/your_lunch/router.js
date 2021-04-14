import { createWebHistory, createRouter } from 'vue-router';

import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";


const routes = [
    {
        path: "/signup",
        component: SignUpPage,
    },
    {
        path: "/login",
        component: LoginPage
    }
    
];


const history = createWebHistory();
const router = createRouter({
    history,
    routes
})

export default router;