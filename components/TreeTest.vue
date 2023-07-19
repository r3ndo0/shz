<template>
    <div class="w-full px-4 pt-16">
      <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure v-for="d in props.data" :key="d.id">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span>
              {{ d.categoryName }}
            </span>

          </DisclosureButton>
          <DisclosurePanel v-for="c in props.childData" :key="c.id"  class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <slot />
          </DisclosurePanel>
        </Disclosure>

      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  interface Node {
    id:number,
    parentId:number,
    categoryName:string,
    nsLevel:number
  }

 const props = defineProps<{data:Node[],childData?:Node[]}>()
 const {data,pending,error} = await topTwo()
 
 const getChildren = async(pid:string)=> {
  const {data:children} = await useTree(pid)
  return children
 }
console.log(data.value)

  </script>
  