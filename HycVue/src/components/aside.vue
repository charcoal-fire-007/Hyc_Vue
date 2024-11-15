<template>
  <el-menu
    :style="{ width: !isCollapse ? '230px' : '80px' }"
    class="aside-container"
    :class="{ 'collapsed': isCollapse }"
    default-active="2" 
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :collapse-transition="false"
  >
    <div class="logo_main">
      <img src="../../img/logo_o.png" alt="Logo" class="logo_img" /> <!-- 显示 logo 图片 -->
      <p>{{ isCollapse ? '' : '未知领域' }}</p> <!-- 根据是否折叠显示或隐藏公司名称 -->
    </div>
    <menuson index="1" :menuData="menuData" /> <!-- 渲染子菜单组件 -->
    <div class="return-home-btn">
      <el-link @click="goToHome" class="home-link"> <!-- 返回主页链接 -->
        <el-icon><Back /></el-icon> <!-- 返回主页图标 -->
        <span v-if="!isCollapse">返回主页</span> <!-- 根据是否折叠显示或隐藏文字 -->
      </el-link>
    </div>
  </el-menu>
</template>

<script setup>
import menuson from "./Menuson.vue"; // 引入子菜单组件
import { useRouter } from "vue-router"; // 引入路由实例
import { reactive, computed } from "vue"; // 引入 Vue 响应式 API
import { HomeFilled, Back, Fold } from "@element-plus/icons-vue"; // 导入 Element Plus 图标组件
import { useStore } from 'vuex'; // 引入 Vuex 存储实例

const router = useRouter(); // 创建路由实例
const menuData = reactive(router.options.routes[0].children); // 获取路由数据
const store = useStore(); // 创建存储实例
const isCollapse = computed(() => store.state.menu.isCollapse); // 计算属性，获取是否折叠的状态

// 处理菜单展开事件
const handleOpen = () => {};

// 处理菜单关闭事件
const handleClose = () => {};

// 添加一个方法用于返回主页
const goToHome = () => {
  router.push("/"); // 导航到主页
};
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

      &:hover {
        background-color: #3f51b5;
        color: #fff;
        cursor: pointer;
      }
    }
  }

  .header-right {
    height: 100%;
    .el-dropdown-link {
      display: flex;
      align-items: center;
      gap: 10px; // 可以根据需要调整间距

      .user-name {
        margin: 0; // 去除默认的段落间距
        font-weight: bold;
      }
    }
  }
}

.flex-box {
  display: flex;
  align-items: center;
}

.aside-container {
  height: 85vh;
  width: 230px;
  background-color: #ffffff;
  border-right: 2px solid rgba(0, 0, 0, 0.3);
  margin-top: 50px;
  transition: width 0.2s ease, margin-left 0.2s ease; /* 平滑过渡宽度和左边距 */
  overflow: hidden; /* 隐藏溢出的内容 */

  &.collapsed {
    width: 80px;
    margin-left: 0; /* 折叠时左边距为0 */
  }

  .logo_main {
    font-size: 25px;
    text-align: center;
    line-height: 150px;
    height: 150px;
    width: 100%;
    color: #000000;
    margin-bottom: 50px;
    margin-top: 0px;
    font-weight: bold;

    .logo_img {
      display: block;
      margin-left: 25%;
      margin-bottom: -70px;
      max-width: 50%;
      height: auto;
    }
  }

  // 修改悬停时的背景颜色和字体颜色
  :deep(.el-menu-item:hover),
  :deep(.el-sub-menu__title:hover) {
    background-color: #3f51b5 !important;
    color: #ffffff !important;
    font-weight: bold;
  }

  // 修改默认的字体颜色
  :deep(.el-menu-item),
  :deep(.el-sub-menu__title) {
    color: #000000 !important;
    font-size: 20px;
    font-weight: bold;
  }

  // 修改激活状态下的字体颜色
  :deep(.el-menu-item.is-active),
  :deep(.el-sub-menu__title.is-active) {
    color: #a200ff !important;
    font-weight: bold;
  }

  .el-menu-item,
  .el-sub-menu {
    text-align: center;
  }

  .return-home-btn {
    margin-top: 40px;
    text-align: center;

    .home-link {
      color: #000000;
      font-size: 20px;
      transition: color 0.3s;
      display: flex;
      align-items: left;
      justify-content: left;
      padding-left: 24px;
      height: 50px;
      font-weight: bold;

      .el-icon {
        margin-right: 8px;
      }

      &:hover {
        background-color: #ff0000 !important;
        color: #ffffff !important;
      }
    }
  }
}
</style>






