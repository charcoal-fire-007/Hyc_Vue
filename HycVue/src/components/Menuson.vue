<template>
<!-- 根据Vue 3的规范，模板根节点不能包含多个根元素，并且v-for指令不能直接用于<template>标签上。 
  但是是可以使用的-->
  <template
    v-for="(item, index) in props.menuData"
    :key="`${props.index}-${item.meta.id}`"
  >
    <el-menu-item
      @click="handleClick(item, `${props.index}-${item.meta.id}`)"
      v-if="!item.children || item.children.length === 0"
      :index="`${props.index}-${item.meta.id}`"
      class="elmenuitem"
    >
      <el-icon size="20">
        <component :is="item.meta.icon">
        </component>
      </el-icon>
      <span>{{ item.meta.name }}</span>
    </el-menu-item>

    <el-sub-menu
      v-else
      :index="`${props.index}-${item.meta.id}`"
      class="elsubmenu"
    >
      <template #title>
        <el-icon size="20">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.name }}</span>
      </template>
      <menuson
        :menuData="item.children"
        :index="`${props.index}-${item.meta.id}`"
      />
    </el-sub-menu>
  </template>
 </template>



<script setup>
import { useRouter } from 'vue-router'

const props = defineProps(["menuData", "index"]);

// 创建router实例
const router = useRouter();

// 点击菜单处理函数
const handleClick = (item, active) => {
  console.log(item, 'item');
  // 这里可以添加导航逻辑，例如：
  // router.push({ path: item.path });
  router.push(item.meta.path)
};
</script>
<style lang = "less" scoped>


</style>