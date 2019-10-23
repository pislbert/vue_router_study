<template>
    <div id="app">
        <router-link to="/user">Go to user</router-link>
        <router-link to="/user2">Go to user 2</router-link>
        <!-- <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active -->
        <router-view></router-view>
        <!--  如果是子模块，只对子模块有效 -->
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
