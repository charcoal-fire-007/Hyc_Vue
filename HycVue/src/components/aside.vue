<template>
  <el-menu
    
    :style="{width: !isCollapse ? '230px' : '80px'}"
    class="aside-container"
    :class="{ 'collapsed': isCollapse }" 
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :collapse-transition="true"
  >
    <div class="logo_main">
      <img src="../../img/logo_o.png" alt="Logo" class="logo_img" />
      <p>{{isCollapse ? '' :'未知领域'}}</p>
    </div>
    <menuson index="1" :menuData="menuData" />
    <div class="return-home-btn">
      <el-link @click="goToHome" class="home-link">
        <el-icon><Back /></el-icon>
        <span v-if="!isCollapse">返回主页</span>
      </el-link>
    </div>
  </el-menu>
</template>

<script setup>
import menuson from "./Menuson.vue";
import { useRouter } from "vue-router";
import { reactive, computed } from "vue";
import { HomeFilled } from "@element-plus/icons-vue"; // 导入图标组件
import { useStore } from 'vuex';

const router = useRouter();
const menuData = reactive(router.options.routes[0].children);
const store = useStore();
const isCollapse = computed(() => store.state.menu.isCollapse);

const handleOpen = () => {};
const handleClose = () => {};

// 添加一个方法用于返回主页
const goToHome = () => {
  router.push("/");
};
</script>

<style lang="less" scoped>
.aside-container {
  height: 85vh;
  width: 230px;
  background-color: #ffffff;
  border-right: 2px solid rgba(0, 0, 0, 0.3);
  margin-top: 50px;
  transition: width 0.2s ease; 

  &.collapsed {
    width: 80px;  
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
      margin-bottom: -70px; /* 图标与文字之间的间距 */
      max-width: 50%; /* 使图片适应容器宽度 */
      height: auto; /* 维持原始宽高比 */
    }
  }

  // 修改悬停时的背景颜色和字体颜色
  :deep(.el-menu-item:hover),
  :deep(.el-sub-menu__title:hover)
   {
    background-color: #3f51b5 !important;
    color: #ffffff !important; // 修改为您想要的悬停字体颜色
    font-weight: bold;
  }

  // 修改默认的字体颜色
  :deep(.el-menu-item),
  :deep(.el-sub-menu__title)
   {
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
        margin-right: 8px; // 图标和文本之间的间距
      }

      &:hover {
        background-color: #ff0000 !important;
        color: #ffffff !important;
      }
    }
  }
}
</style>