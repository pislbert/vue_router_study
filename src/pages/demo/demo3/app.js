import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
        {
            path: "/nest/:id",
            component: () => import("./components/nest.vue"),
            children: [
                {
                    path: "bar",
                    component: () => import("@/components/bar.vue")
                },
                {
                    path: "foo",
                    component: () => import("@/components/foo.vue")
                }
            ]
        }
    ]
})

// 动态路由

new Vue({
    render: h => h(App),
    router
}).$mount("#app")
