<template>
  <form  @submit.prevent="handler('next')" class="pt-24">
    <Step1Dp />
    <Step1RadioButton />
    <Step1Toggle />
    <Step1Date />
    
    <div class="w-full justify-center items-center flex">

      <button  class="px-16 py-5 border border-[#FFCC1F] bg-white" >گام بعد</button>

    </div>
    <!-- <el-button :plain="true" @click="openError">error</el-button> -->

  </form>
</template>
<script setup lang="ts">
import { ElNotification } from 'element-plus'


import { storeToRefs } from 'pinia';
import {step1Data} from '~/store/firstStep'

const emit = defineEmits(["next-step"])

const store =step1Data()
const {notifyReq,submittedBy,budProg,dateRange} = storeToRefs(store) 
const openError = (m:string) => {
  ElNotification({
    title: 'خطا',
    message: m,
    position: 'bottom-right',
    type:'error'
  })
}
const handler = (t:string) => {

  if(submittedBy.value && budProg.value) {
    if(!notifyReq.value || dateRange.value) {

      emit('next-step',t)

    } else {
      openError('تاریخ را وارد کنید')
    }
  } else {
    openError('فیلد های مورد نیاز را پر کنید')
  }
}
</script>


<style scoped>
.toast {
  font-size: 25px;
}


</style>