<template>
  <div class="common-layout">
    <el-container>
      <Aside />
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <Router />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Aside from "../components/aside.vue";
import Header from "../components/navHeader.vue";
import Router from "../components/Routermain.vue";
</script>

<style lang ="less" scoped>
.common-layout {
  height: 100vh;
  .el-container {
    height: 100vh;
  }
}
</style>