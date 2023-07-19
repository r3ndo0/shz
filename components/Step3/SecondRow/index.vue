<template>
  <div
    class="flex gap-12 justify-between items-start border-b-2 border-yellow-200"
  >
   <div class=" w-full ">
    <Step3SecondRowEl />

    
   </div>
    <button class="bg-[#FFCC1F] gap-2 justify-center items-center pr-1 pl-[1px] flex w-[25%] py-[2px] mt-16 rounded-lg">
        <IconsPlus class=""/>
<p class="grow bg-yellow-300 rounded-l-lg p-1 text-sm">
    افزودن فایل

</p>    </button>
  </div>
</template>

<script setup lang="ts">

const numberOfFiles = ref(1)


</script>