<template>
  <div class="mb-8 " dir="rtl">
    <ClientOnly>
      <div class="max-w-[200px] m-auto">
        <DatePicker
        color="#08C8F2"
        class="text-end text-[12px]  text-gray-700"
        v-model="date"
        range
      ></DatePicker>
      </div>
    </ClientOnly>
    <div v-if="showSt" class="mt-4 flex ga-4">
      <IconsCheck color="#08F23C" />
      <p class="m-auto">
        با تشکر از شما کاربر گرامی، از <span>{{ date[0] }}</span> تا
        <span>{{ date[1] }}</span> 
        عرضه های ارائه شده برای تقاضای شما اطلاع

        رسانی خواهد شد.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import DatePicker from "vue3-persian-datetime-picker";

const date = ref<string[] | string>("");
const showSt = ref(false);
watch(date, (d) => {
  showSt.value = true;
});
</script>
