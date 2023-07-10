<template>
  <form @submit.prevent="handler('next')" class="pt-24">
    <Step1Dp />
    <Step1RadioButton />
    <Step1Toggle />
    <Step1Date />
    
    <div class="w-full justify-center items-center flex">

      <button :class="!notifyReq && 'my-8'" class="px-16 py-5 border border-[#FFCC1F] bg-white" >گام بعد</button>

    </div>
  </form>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {step1Data} from '~/store/firstStep'

const emit = defineEmits(["next-step"])

const store =step1Data()
const {notifyReq,submittedBy,budProg,dateRange} = storeToRefs(store) 
const handler = (t:string) => {

  if(submittedBy.value && budProg.value) {
    if(!notifyReq.value || dateRange.value) {
      console.log(submittedBy,budProg)
      emit('next-step',t)

    } else {
      alert('تاریخ را وارد کنید')
    }
  } else {
    alert('فیلد های مورد نیاز را پر کنید')
  }
}
</script>