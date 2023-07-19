<template>
    <div class="slider-demo-block px-6 pt-9 flex items-start justify-start  relative w-full">
        <IconsAsterisk class="absolute top-6 right-3 " />

        <p>بازه TRL</p>
      <el-slider class="" v-model="value" range size="small" :max="9" />
    </div>
  </template>
  
  <script lang="ts" setup>
  import {step2Data} from '~/store/secondStep'
  const {setter,allData} = step2Data()

  const value = ref([2, 8])
watch(value,v => setter('trlRange',v))
  </script>
  <style scoped>
  .slider-demo-block {
    display: flex;
    flex-direction: column;
 gap: 3px;

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