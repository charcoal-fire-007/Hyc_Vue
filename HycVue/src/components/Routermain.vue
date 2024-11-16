<template>
  <el-row class="home" :gutter="20">
    <!-- 左侧列，包含用户信息卡片和表格 -->
    <el-col :span="8" style="margin-top: 20px">
      <div class="card">
        <div class="bg"></div> <!-- 卡片背景 -->
        <div class="blob"></div> <!-- 动画球体 -->
        <el-card>
          <div class="user">
            <img :src="getImageUrl('logo_o')" class="logo_o" /> <!-- 用户Logo -->
            <div class="user-info">
              <p>未知领域</p>
              <p style="color:#0B0F2B">超级管理员</p> <!-- 用户角色 -->
            </div>
          </div>
        </el-card>
      </div>

      <!-- 用户数据表格 -->
      <el-card class="user-table">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
            align="center"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <!-- 右侧列，包含欢迎信息和图表 -->
    <el-col :span="16" style="margin-top:20px">
      <el-card class="body-style e-card">
        <div class="wave"></div> <!-- 波浪动画效果 -->
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="infotop">未知领域</div> <!-- 标题 -->
        <div class="name">欢迎来到未知领域</div> <!-- 欢迎信息 -->
      </el-card>

      <!-- ECharts图表容器 -->
      <div :class="className" :style="{ height: height, width: width }" ref="chartRef"></div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import * as echarts from 'echarts';

// 获取图片URL的方法
const getImageUrl = (logo_o) => {
  console.log("Generating image URL for:", logo_o);
  const url = new URL(`../../img/${logo_o}.png`, import.meta.url).href;
  console.log("Generated URL:", url);
  return url;
};

// 表格数据
const tableData = ref([
  {
    name: "JAVA",
    todayBuy: 999,
    monthBuy: 999,
    totalbuy: 999,
  },
  {
    name: "VUE3",
    todayBuy: 999,
    monthBuy: 999,
    totalbuy: 999,
  },  {
    name: "VUE3",
    todayBuy: 999,
    monthBuy: 999,
    totalbuy: 999,
  },  {
    name: "VUE3",
    todayBuy: 999,
    monthBuy: 999,
    totalbuy: 999,
  },  {
    name: "VUE3",
    todayBuy: 999,
    monthBuy: 999,
    totalbuy: 999,
  },  {
    name: "VUE3",
    todayBuy: 999,
    monthBuy: 999,
    totalbuy: 999,
  },  {
    name: "VUE3",
    todayBuy: 999,
    monthBuy: 999,
    totalbuy: 999,
  },  {
    name: "VUE3",
    todayBuy: 999,
    monthBuy: 999,
    totalbuy: 999,
  },
  
]);

// 表格列标签
const tableLabel = ref({
  name: "领域",
  todayBuy: "今日领域",
  monthBuy: "本月领域",
  totalbuy: "总购买",
});

// 图表相关配置
const className = ref('chart'); // 图表类名
const width = ref('100%'); // 图表宽度
const height = ref('480px'); // 图表高度

// X轴数据
const xAxisData = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
// 系列数据
const seriesData = ref([{
  name: 'JAVA',
  type: 'line',
  stack: '总量',
  emphasis: {
    focus: 'series'
  },
  areaStyle: {
     color: 'rgba(55, 162, 218, 0.5)' // 区域填充颜色
  },
    itemStyle: {
    color: '#37A2DA' // 线条颜色
  },
    lineStyle: {
    width: 3 // 线条宽度
  },
  symbol: 'circle', // 数据点形状
  symbolSize: 8, // 数据点大小
  smooth: true, // 平滑曲线
  data: [67, 3213, 66, 67, 3228, 32, 1410, 2552, 3512, 555]
}, {
  name: 'VUE3',
  type: 'line',
  stack: '总量',
  areaStyle: {},
  emphasis: {
    focus: 'series'
  },
      lineStyle: {
    width: 3 // 线条宽度
  },
      itemStyle: {
    color: '#3F51B5' 
  },
    symbol: 'circle', // 数据点形状
  symbolSize: 8, // 数据点大小
  smooth: true, // 平滑曲线
  data: [120, 2232, 101, 800, 20, 230, 210, 5466, 67, 36]
}]);

// 图表引用
const chartRef = ref(null); // 图表DOM元素引用
let chartInstance = null; // 图表实例

// 监听X轴数据变化并更新图表
watch(xAxisData, (newVal) => {
  if (chartInstance) {
    chartInstance.setOption({
      xAxis: [
        {
          data: newVal
        }
      ]
    });
  }
}, { deep: true });

// 监听系列数据变化并更新图表
watch(seriesData, (newVal) => {
  if (chartInstance) {
    chartInstance.setOption({
      series: newVal
    });
  }
}, { deep: true });

// 初始化图表
const initChart = () => {
  chartInstance = echarts.init(chartRef.value); // 初始化图表实例
  drawChart(); // 绘制图表
};

// 销毁图表实例
const disposeChart = () => {
  if (chartInstance) {
    chartInstance.dispose(); // 销毁图表实例
    chartInstance = null;
  }
};

// 绘制图表
const drawChart = () => {
  chartInstance.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      left: 'center'
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: xAxisData.value
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: seriesData.value
  });
};

// 组件挂载时初始化图表
onMounted(() => {
  initChart();
});

// 组件卸载前销毁图表实例
onBeforeUnmount(() => {
  disposeChart();
});
</script>

<style lang="less" scoped>
.home {
  .el-col {
    margin-top: 20px;
  }

  .card {
    position: relative;
    width: 380px;
    height: 220px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; /* 卡片阴影 */
  }

  .bg {
    position: absolute;
    top: 8px;
    left: 12px;
    width: 354px;
    height: 203px;
    z-index: 2;
    background: rgba(255, 255, 255, 0.95); /* 背景半透明 */
    backdrop-filter: blur(24px); /* 背景模糊 */
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white; /* 白色边框 */
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px; 
    height: 150px;
    border-radius: 50%;
    background-color: #3f51b5; /* 蓝色圆点 */
    opacity: 1;
    filter: blur(12px); /* 模糊效果 */
    animation: blob-bounce 5s infinite ease; /* 弹跳动画 */
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(-10%, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(120%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(120%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(-20%, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(-10%, 0, 0);
    }
  }

  .el-card {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    background: transparent;

    .user {
      display: flex;
      align-items: center;

      .logo_o {
        width: 130px;
        height: 130px;
        margin-right: 30px;
      }

      .user-info {
        p {
            font-weight: bold;
          margin-top: 10px;
          font-size: 20px;
        }
      }
    }
  }

  .user-table {
    margin-top: 50px;
    width: 380px;
    height: 400px;
    border-radius: 14px;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; /* 表格阴影 */
  }

  /* 设置表格表头背景颜色为蓝色 */
  
  :deep(.el-table th)
  {
    background: linear-gradient(90deg, #3f51b5, #6e1ddf); /* 渐变背景色 */
    color: white; /* 文字颜色为白色 */
  }

  /* 新增样式，用于垂直居中表格内容 */
  .el-table .cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body-style{
    display: flex;
    padding: 0;
    height: 220px;
    position: relative;

    width: 100%;
    background: transparent;
    box-shadow: 0px 8px 28px -9px rgba(0,0,0,0.45); /* 卡片阴影 */
    border-radius: 16px;
    overflow: hidden;
  }

  .wave {
    position: absolute;
    width: 640px;
    height: 700px;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -55%;
    margin-top: -70%;
    background: linear-gradient(744deg,#af40ff,#5b42f3 60%,#00ddeb); /* 渐变背景色 */
  }

  .icon {
    width: 2em;
    margin-top: -1em;
    padding-bottom: 1em;
  }

  .infotop {
    text-align: center;
    font-size: 50px;
    position: absolute;
    top: 1.4em;
    left: 0;
    right: 0;
    color: rgb(255, 255, 255);
    font-weight: 600;
  }

  .name {
    font-size: 20px;
    font-weight: bold;
    position: relative;
    top: -10em;
    left: 12em;
    color: #00ddeb;
    text-transform: lowercase;
  }

  .wave:nth-child(2),
  .wave:nth-child(3) {
    position: relative;
    top: 310px;
    left: 350px;
  }

  .playing .wave {
    border-radius: 40%;
    animation: wave 3000ms infinite linear; /* 波浪动画 */
  }

  .wave {
    border-radius: 40%;
    animation: wave 55s infinite linear; /* 波浪动画 */
  }

  .playing .wave:nth-child(2) {
    animation-duration: 3000ms;
  }

  .wave:nth-child(2) {
    animation-duration: 50s;
  }

  .playing .wave:nth-child(3) {
    animation-duration: 5000ms;
  }

  .wave:nth-child(3) {
    animation-duration: 45s;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>






