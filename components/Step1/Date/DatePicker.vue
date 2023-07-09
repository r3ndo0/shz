<template>
    <div class="my-2 md:mb-0" dir="rtl">
      <ClientOnly>
        <DatePicker
          color="#03DEDB"
          class="text-end text-gray-700"
          :placeholder="props.placeholder"
          simple
          v-model="date"
          :min="today"
          :options="options"
        ></DatePicker>
      </ClientOnly>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    placeholder: string;
  }>();
  import DatePicker from "vue3-persian-datetime-picker";
import {time} from '~/types/Datepicker'
  const { data, pending } = await useFetch<time>("https://api.keybit.ir/time/");
  
  
  const today = data.value?.date.full.official.usual.en;
  
  const date = ref("");
  </script>