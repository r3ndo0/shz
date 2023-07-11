<template>
    <div class="m-auto w-[50%] mt-12 " >
        <p  class="mb-2 text-center">انتخاب بازه زمانی</p>

        <div class="flex justify-center ">
            <Step1DatePicker />
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {step1Data} from '/nuxt/shz/store/firstStep'

const store =step1Data()
const {notifyReq} = storeToRefs(store) 





</script>