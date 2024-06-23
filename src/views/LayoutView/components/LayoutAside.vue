<script setup></script>
<template>
  <el-aside width="250px" class="layout-aside">
    <el-menu
      active-text-color="#409eff"
      background-color="#324157"
      class="el-menu-vertical-demo"
      default-active="1"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon><Odometer /></el-icon>
        <span>系统首页</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><HomeFilled /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-2">角色管理</el-menu-item>
        <el-menu-item index="1-3">菜单管理</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<style lang="scss" scoped>
.layout-aside {
  display: block;
  position: absolute;
  height: 100%;
  background-color: #324157;
}
</style>