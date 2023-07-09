import Vue from "vue";
import Vue3PersianDatetimePicker from "vue3-persian-datetime-picker";

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.use(Vue3PersianDatetimePicker);
});