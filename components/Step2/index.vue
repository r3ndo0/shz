<template>
  <form @submit.prevent="onSubmit" class="min-h-screen  flex p-16">
    <Step2Inputs />
    <Step2Tree />

  </form>
</template>
<script setup lang="ts">
import { step2Data } from '~/store/secondStep';
import { stepTwoSchema } from 'f:/nuxt/shz/schemas/Step';
const emit = defineEmits(["next-step"]);
// const handler = (tg) => {
//   emit("next-step", t);
// };
const {setter,allData} = step2Data()
const { handleSubmit } = useForm({
  validationSchema: stepTwoSchema,
});
// console.log(JSON.parse(data.value).slice(0,2))
// const findlevel = (data,lvl) => {
//   if(!pending && data) {
//     const newD = data.find(d => d.id < 10)
//     console.log(newD)
//     return newD
//   }
// }
// const lvl1 = ref(findlevel(JSON.parse(data.value),1))

const onSubmit  = handleSubmit( (v) => {
  console.log(v)
})

</script>
