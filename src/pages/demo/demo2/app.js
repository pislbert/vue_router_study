import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
        { path: "/user/:id", component: () => import("@/components/user.vue") },
        {
            path: "/user2/:id/post/:post_id",
            component: () => import("@/components/user2.vue")
        }
    ]
})

// 动态路由

new Vue({
    render: h => h(App),
    router
}).$mount("#app")
