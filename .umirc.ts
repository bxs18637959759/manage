import { defineConfig } from "umi";

export default defineConfig({
    routes: [
        { path: "/", redirect: "/login" },
        {
            path: "/",
            component: "./Index",
            routes: [
                {
                    path: "/dashboard",
                    component: "./Index/Dashboard",
                },
                { path: "/form", component: "./Index/Form" },
            ],
        },
        { path: "/login", component: "./Login" },
        { path: "/reg", component: "./Login" },
        { path: "*", component: "./404" },
    ],
    npmClient: "npm",
});
