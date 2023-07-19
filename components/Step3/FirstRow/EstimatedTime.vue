<template>
    <div class="relative flex gap-2 w-full  flex-col justify-center  mx-6 items-start">
        <IconsAsterisk v-show="props.required" class="absolute top-[-5px] right-[-5px]"/>
        <label class="mx-4 my-1 tracking-wide">{{ props.label }}</label>
        <input  class="p-2 w-full rounded-lg"/>

    </div>
</template>


<script setup lang="ts">
interface Props {
    label:string;
    name:string;
    required:boolean
}
const props = defineProps<Props>()


</script>