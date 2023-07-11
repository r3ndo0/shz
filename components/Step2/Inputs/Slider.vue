<template>
    <div class="slider-demo-block p-6 relative w-full">
        <IconsAsterisk class="absolute top-8 right-3 " />

        <p>بازه TRL</p>
      <el-slider v-model="value" range size="small" :max="9" />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const value = ref([2, 8])
watch(value,v => console.log(v))
  </script>
  <style scoped>
  .slider-demo-block {
    display: flex;
    flex-direction: column;
 gap: 3px;
    justify-content: center;
  }

  .el-slider__runway {
    --el-color-primary:#FED235;
    background-color: #ff0000 !important; /* Replace with your desired color */
  }
  .el-slider {
    --el-slider-main-bg-color:#FED235;
    --el-slider-runway-bg-color:#808080

  }
  </style>