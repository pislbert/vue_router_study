<template>
    <div>
        <h1>{{ $route.params.id }}</h1>
        <!-- <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active -->
        <router-view></router-view>
        <!--  如果是子模块，只对子模块有效 -->
    </div>
</template>

<script>
</script>

<style>
.router-link-active {
    color: red;
}
</style>
