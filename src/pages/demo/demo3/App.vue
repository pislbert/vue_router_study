<template>
    <div id="app">
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
