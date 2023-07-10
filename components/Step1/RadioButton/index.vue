<template>
  <div class="m-auto w-[50%] mt-12 ">
    <div class="flex gap-4 text-xl justify-center  mb-5">
      <IconsAsterisk />
      <p class="">
        شما تقاضای خود را برای کدام برنامه بودجه می خواهید ثبت کنید؟
      </p>
    </div>
    <div  class="flex justify-center flex-col items-start md:pr-[12rem]">
      
      <div class="inline-flex justify-center ">
    <label
      class="relative flex cursor-pointer items-center rounded-full px-3"
      for="13"
      data-ripple-dark="true"
    >
      <input
        id="13"
        name="type"
        type="radio"
        @change="selectedValue = '13'"
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-[#FFC500] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#FFC500] checked:before:bg-[#FFC500] hover:before:opacity-10"
      />
      <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#FFC500] opacity-0 transition-opacity peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </div>
    </label>
    <label
      class=" cursor-pointer select-none font-light text-gray-700"
      for="13"
    >
    ماده 13 نظام نامه پژوهش فناوری و تجاری سازی وزارت نفت    </label>
  </div>
  <div class="inline-flex items-center">
    <label
      class="relative flex cursor-pointer items-center rounded-full p-3"
      for="strategic"
      data-ripple-dark="true"
    >
      <input
        id="strategic"
        name="type"
        type="radio"
        @change="selectedValue = 'strategic'"

        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-[#FFC500] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#FFC500] checked:before:bg-[#FFC500] hover:before:opacity-10"
      />
      <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#FFC500] opacity-0 transition-opacity peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </div>
    </label>
    <label
      class="mt-px cursor-pointer select-none font-light text-gray-700"
      for="strategic"
    >
    سند برنامه راهبردی توسعه فناوری وزارت نفت
    </label>
  </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {step1Data} from '~/store/firstStep'
const selectedValue = ref('');
const emit = defineEmits(['radio-value'])
const {setBudProg} = step1Data()

watch(selectedValue, value => {
  setBudProg(value)

});

</script>