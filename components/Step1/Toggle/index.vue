<template>
  <div
    class="m-auto w-[50%] flex flex-col gap-8 justify-center items-center mt-12"
  >
    <p class="text-[17px] ">
      آیا می خواهید تقاضای شما در سامانه اطلاع رسانی شود؟
      <span class="text-[#7A7A7A] font-normal text-base">
        (لطفا تاریخ مورد نظر خود را انتخاب کنید)
      </span>
    </p>
    <div class="" dir="ltr">
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-[#42ED67]' : ' bg-[#747272]'"
      class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <span class="sr-only">Use setting</span>

      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-9' : 'translate-x-0'"
        class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />
    </Switch>
  </div>
  </div>
</template>


<script setup>

import { Switch } from "@headlessui/vue";
import {step1Data} from '~/store/firstStep'
const enabled = ref(true);
const emit = defineEmits(['toggle-value'])
const {setNotifyReq} = step1Data()
watch(enabled,e => {
  setNotifyReq(e)
})
</script>
  