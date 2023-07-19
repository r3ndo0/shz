<template>
    <div class="relative flex gap-2 flex-col w-full justify-center  m-6 items-start">
        <IconsAsterisk v-show="props.required" class="absolute top-[-5px] right-[-5px]"/>
        <label class="px-3 tracking-wide">{{ props.label }}</label>
        <input type="number" v-model="value" class="p-2 w-full rounded-lg"/>
        <div  class="h-5">
            
            <p v-if="!errorMessage" class="text-[12px]">{{ value?.toLocaleString() }} {{ value && 'تومان' }}</p>
        </div>
        <span class="text-[10px] h-6 text-rose-600" >{{ errorMessage }}</span>
    </div>
</template>


<script setup lang="ts">
interface Props {
    label:string;
name:string
    required:boolean
}
// const currencyFormatter = (number:any) => new Intl.NumberFormat(' en-US' ).format( number )
const props = defineProps<Props>()

    const { value, errorMessage } = useField<string>(props.name, {
  validateOnValueUpdate: false,
});
</script>