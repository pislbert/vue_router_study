import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
        {
            path: "/helloworld",
            component: () => import("@/components/HelloWorld.vue")
        },
        { path: "/foo", component: () => import("@/components/foo.vue") },
        { path: "/bar", component: () => import("@/components/bar.vue") }
    ]
})

// 普通跳转

new Vue({
    render: h => h(App),
    router
}).$mount("#app")
