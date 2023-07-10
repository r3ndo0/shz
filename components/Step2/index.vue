<template>
  <form class="h-screen flex p-16">
    <Step2Inputs />
    <Step2Tree />
  </form>
</template>
<script setup lang="ts">
const emit = defineEmits(["next-step"]);

const handler = (t: string) => {
  emit("next-step", t);
};
</script>
