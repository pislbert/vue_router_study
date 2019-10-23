<template>
    <!-- 当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用 -->
    <div>user id is {{ $route.params.id }}</div>
</template>

<script>
import log from "@/util/log"

export default {
    name: "user",
    watch: {
        $route(to, from) {
            log("to:", to)
            log("from:", from)
            log("to id:", to.params.id)
            log("from id:", from.params.id)
        }
    }
}
</script>

<style>
</style>
