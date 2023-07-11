<template>
    <div class="relative flex gap-2 flex-col w-full justify-center  p-6 items-start">
        <IconsAsterisk v-show="props.required" class="absolute top-4 right-5"/>
        <label class="px-3 tracking-wide">{{ props.label }}</label>
        <input v-model="value" class="p-2 w-full rounded-lg"/>
        <p class="h-5">{{ value }}</p>
    </div>
</template>


<script setup lang="ts">
interface Props {
    label:string;

    required:boolean
}
const props = defineProps<Props>()
const value = ref('')

</script>