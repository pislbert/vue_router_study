<template>
    <div id="app">
        <router-link to="/helloworld">Go to HelloWorld</router-link>
        <router-link to="/foo">Go to Foo</router-link>
        <!-- <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active -->
        <router-link to="/bar">Go to Bar</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "app"
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.router-link-active {
    color: red;
}
</style>