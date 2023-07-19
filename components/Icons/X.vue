
<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="wNh" :height="wNh" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.5.5l-13 13m0-13l13 13"></path></svg>
  </template>
  
  <script setup lang="ts">

  const props = defineProps<{size:string}>()
  const wNh = computed(() => `${props.size}em`)
  </script>