<script setup>
</script>
<template>
  <el-header class="head-nav">
    <div class="head-nav-left">
      <img
        style="width: 35px"
        src="../../../assets/img/logo.svg"
        alt="Element logo"
      />
      <fout style="margin: 0 10px; color: white; font-size: 22px"
        >后台管理系统</fout
      >
      <el-tooltip
        class="box-item"
        effect="dark"
        content="收起"
        placement="bottom"
      >
        <el-icon
          class="custom"
          color=" #ccc"
          style="margin-left: 40px"
          size="22px"
          ><Fold
        /></el-icon>
      </el-tooltip>
    </div>
    <div class="head-nav-right">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="设置主题"
        placement="bottom"
      >
        <el-icon
          class="custom"
          color="#ccc"
          size="22px"
          style="margin-right: 15px"
          ><BrushFilled
        /></el-icon>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="有未读消息"
        placement="bottom"
      >
        <el-icon
          class="custom"
          color="#ccc"
          size="22px"
          style="margin-right: 15px"
        >
          <el-badge is-dot>
            <Bell />
          </el-badge>
        </el-icon>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="全屏"
        placement="bottom"
      >
        <el-icon
          class="custom"
          color="#ccc"
          size="22px"
          style="margin-right: 35px"
          ><FullScreen
        /></el-icon>
      </el-tooltip>
      <el-avatar :icon="UserFilled" />
      <div style="color: white; margin: 0 7px">xmh</div>
      <el-dropdown :hide-on-click="false" style="margin-right: 30px">
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right" color="white"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>项目仓库</el-dropdown-item>
            <el-dropdown-item>官方文档</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<style lang="scss" scoped>
.head-nav {
  background-color: #242f42;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;

  .head-nav-left {
    display: flex;
    align-items: center;
  }
  .head-nav-right {
    display: flex;
    align-items: center;
  }
}
.custom {
  cursor: pointer;
  transition: background-color 0.3s;
  :hover {
    color: white;
  }
}
</style>