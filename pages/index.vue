<template>
  <div class="px-12">
    <FormComp
      > <component :is="compName" />
  </FormComp>
  </div>
</template>
<script setup lang="ts">

const stepIdx = ref('1')
const compName = computed(() => {return `Step${stepIdx.value}`})



</script>
