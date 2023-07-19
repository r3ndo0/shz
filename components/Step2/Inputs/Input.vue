<template>
    <div class="relative flex gap-2 w-full  flex-col justify-center mt-4 mx-6 items-start">
        <IconsAsterisk v-show="props.required" class="absolute top-[-5px] right-[-5px]"/>
        <label class="px-3 tracking-wide">{{ props.label }}</label>
        <input v-model="value" class="p-2 w-full rounded-lg"/>
        <span class="text-[10px] h-6 text-rose-600" >
            {{ errorMessage }}
        </span>
    </div>
</template>


<script setup lang="ts">
interface Props {
    label:string;
    name:string;
    required:boolean
}
const props = defineProps<Props>()

const { value, errorMessage } = useField<string>(props.name, {
  validateOnValueUpdate: false,
});
</script>