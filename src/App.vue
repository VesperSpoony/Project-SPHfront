<template>
  <div>
    <MyHeader></MyHeader>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- 只在Home和Search下显示 -->
    <MyFooter v-show="$route.meta.show"></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
  },
  mounted() {
    this.$store.dispatch("getCategoryList");
  },
};
</script>

<style>
</style>