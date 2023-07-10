<template>
  <div>
    <Nav />
    <div  class="px-12">

      <FormComp
      > <Step1 @next-step="(t) => nextOrPrev(t)" v-if="stepIdx === 1"/>
        <Step2 @next-step="(t) => nextOrPrev(t)" v-if="stepIdx === 2" />
          <Step3 v-if="stepIdx=== 3" />
          <Step4 v-if="stepIdx === 4" />
          <Step5 v-if="stepIdx === 5" />
        </FormComp>
      </div>
  </div>
</template>
<script setup lang="ts">

const stepIdx = ref(1)

const nextOrPrev = (t:string) => {
 
  if(t === "next" && stepIdx.value !== 5) {
    stepIdx.value++
  } else if (t==="prev" && stepIdx.value !== 1) {
    stepIdx.value--
  } 
}


</script>
