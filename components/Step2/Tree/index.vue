<template>


<div dir="" class="w-full  bg-gray-200">
  <ClientOnly>

    <el-tree-select

    placeholder="درخت فناوری"
    v-model="value"
    :data="data"
    multiple
    :render-after-expand="true"
    show-checkbox
    :filter-node-method="filterNodeMethod"
    filterable
    />
  </ClientOnly>
</div>

  </template>
  
  <script  setup>
  import { ref } from 'vue'
  
  const value = ref()
  
  const sourceData = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
]
const data = ref(sourceData)

const filterMethod = (value) => {
  data.value = [...sourceData].filter((item) => item.label.includes(value))
}

const filterNodeMethod = (value, data) => data.label.includes(value)
  </script>