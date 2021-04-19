import { createWebHistory, createRouter } from 'vue-router';

import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";


 const routes = [
    {
        path: "/signup",
        component: SignUpPage,
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/",
        component: Home,
    },
    {
        path: "/menu",
        component: Menu,
    },

    
];


const history = createWebHistory();
const router = createRouter({
    history,
    routes
});

export default router;
