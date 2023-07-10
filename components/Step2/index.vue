<template>
    <div>

        <h2>step2</h2>
    <button @click="handler('prev')">prev</button></div>
</template>
<script setup lang="ts">
const emit = defineEmits(["next-step"])


const handler = (t:string) => {
  emit('next-step',t)
}



</script>