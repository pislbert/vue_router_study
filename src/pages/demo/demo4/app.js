import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import bar from "@/components/bar.vue"
import foo from "@/components/foo.vue"
import jee from "@/components/jee.vue"

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
        {
            path: "/named1",
            components: {
                default: bar,
                a: foo,
                b: jee
            }
        },
        {
            path: "/named2",
            components: {
                default: jee,
                a: bar,
                b: foo
            }
        }
    ]
})

// 命名路由

new Vue({
    render: h => h(App),
    router
}).$mount("#app")
