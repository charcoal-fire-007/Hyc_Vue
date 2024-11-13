<template>
  <div class="header-container">
    <div class="header-left flex-box">
      <el-icon class="icon" size="20" @click="store.commit('collapseMenu')"><Fold /></el-icon>
    <!-- </div> -->
    <!-- <div class="header-right"> -->
      <el-dropdown>
        <div class="el-dropdown-link flex-box">
          <el-avatar
            src="../../img/logo_o.png"
          />
          <p class="user-name">未知领域</p>
        </div>
        <template #dropdown>
          <el-dropdown-menu >
            <el-dropdown-item >未知领域</el-dropdown-item>
            <el-dropdown-item>未知领域</el-dropdown-item>
            <el-dropdown-item>未知领域</el-dropdown-item>
            <el-dropdown-item disabled>未知领域</el-dropdown-item>
            <el-dropdown-item divided>未知领域</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    </div>
  <!-- </div> -->
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();
</script>

<style lang="less" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: #fff;
  padding-right: 25px;

  .header-left {
    height: 100%;
    margin-left: 20px;

    .icon {
      width: 50px;
      height: 100%;
      transition: background-color 0.3s ease, color 0.3s ease;
      border-radius: 30%;
      
    }

    .icon:hover {
      background-color: #3f51b5;
      color: #fff;
      cursor: pointer;
    }
  }

  .header-right {
    height: 100%;
    .el-dropdown-link {
      display: flex;
      align-items: center;
      gap: 10px; // 可以根据需要调整间距

    }
    .user-name {
      margin: 0; // 去除默认的段落间距
      font-weight: bold;
    }
  }

}

.flex-box {
  display: flex;
  align-items: center;
}
</style>