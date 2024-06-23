<script setup>
import LayoutHead from "./components/LayoutHead.vue";
import LayoutAside from "./components/LayoutAside.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <LayoutHead></LayoutHead>
    </el-container>
    <el-container>
      <LayoutAside></LayoutAside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>