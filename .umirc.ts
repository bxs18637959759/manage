import { defineConfig } from "umi";

export default defineConfig({
    routes: [
        { path: "/", redirect: "/index/dashboard" },
        {
            path: "/index",
            component: "./Index",
            routes: [
                {
                    path: "/index/dashboard",
                    component: "./Index/Dashboard",
                },
                { path: "/index/form", component: "./Index/Form" },
            ],
        },
        { path: "/login", component: "./Login" },
        { path: "*", component: "./404" },
    ],
    npmClient: "npm",
});
