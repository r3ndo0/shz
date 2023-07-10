<template>
  <div class="pt-24">
    <Step1Dp />
    <Step1RadioButton />
    <Step1Toggle />
    <Step1Date />
    
    <div class="w-full justify-center items-center flex">

      <button class="px-16 py-5 border border-[#FFCC1F] bg-white" @click="handler('next')">گام بعد</button>

    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(["next-step"])


const handler = (t:string) => {
  emit('next-step',t)
}



</script>