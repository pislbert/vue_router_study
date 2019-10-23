<template>
<!-- 当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用 -->
	<div>
		<div>user2 id is {{ $route.params.id }} </div>
		<div>user2 post_id is {{ $route.params.post_id }} </div>
	</div>	
</template>

<script>
</script>

<style>
</style>
