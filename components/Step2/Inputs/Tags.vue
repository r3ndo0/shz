<template>
<div class="relative mx-6 justify-start ">
    <IconsAsterisk class="absolute  right-0 top-[-12px]"/>
    <p class="my-3 mr-4">کلمات کلیدی</p>
    <div dir="rtl" class="bg-white w-full rounded-lg pt-4 pb-12 px-4">

        <el-tag
        v-for="tag in dynamicTags"
        :key="tag"
        class="mx-1 "
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
        >
        {{ tag }}
    </el-tag>
    <el-input
    v-if="inputVisible"
    ref="InputRef"
    v-model="inputValue"
    class="ml-1 py-2"
      size="small"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
      />
      <el-button v-else class="button-new-tag  ml-1" size="small" @click="showInput">
        افزودن مورد جدید
    </el-button>
</div>
</div>
  </template>
  
  <script lang="ts" setup>
  import { nextTick, ref } from 'vue'
  import { ElInput } from 'element-plus'
  
  const inputValue = ref('')
  const dynamicTags = ref(['تخصص', 'تخصص', 'تخصص'])
  const inputVisible = ref(false)
  const InputRef = ref<InstanceType<typeof ElInput>>()
  
  const handleClose = (tag: string) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
  }
  
  const showInput = () => {
    inputVisible.value = true
    nextTick(() => {
      InputRef.value!.input!.focus()
    })
  }
  
  const handleInputConfirm = () => {
    if (inputValue.value) {
      dynamicTags.value.push(inputValue.value)
    }
    inputVisible.value = false
    inputValue.value = ''
  }
  </script>


<style scoped>
.el-tag {
    --el-tag-hover-color:#FED235;
    gap: 5px;
    padding: 5px;
    --el-tag-border-color:#FED235;
    --el-tag-text-color:#393A3A;
    background-color:khaki;
    border-radius:9999px;
    
}
.el-button--small {
  border-radius: 999px;

}

</style>