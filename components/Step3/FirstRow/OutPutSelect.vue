<template>

  
      <div class="max-w-full min-w-[30%] relative ">
        <p class="mx-4 my-2">نوع خروجی</p>
        <IconsAsterisk  class="absolute top-[-5px] right-[-5px]"/>
        <Listbox v-model="selectedPerson" multiple>
        <div class="relative mt-1">
          <ListboxButton
          class="relative w-full  cursor-default rounded-lg bg-white py-3 pl-3 pr-10  sm:text-sm"
          >
            <span class="block truncate">  <ul class="flex gap-2 " v-if="listLength">
      <li class="rounded-2xl text-[11px] bg-yellow-200 px-3 flex gap-2" v-for="s in selectedPerson" :key="s.name"><button @click="remove(s.name)"><IconsX size="0.8"/></button>{{ s.name }}</li>
    </ul>
  <p v-else>گزینه های مورد نظر خود را انتخاب کنید</p></span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
            <IconsArrowDown
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>
  
          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
  
            >
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="person in people"
                :key="person.name"
                :value="person"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-10 pr-4',
                  ]"
                >
                <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ person.name }}</span
                  >
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                  >
                    <IconsCheck class="h-5 w-5"  />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>
  

  </template>
  
  <script setup >
  import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'
  
  const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
  ]
  const selectedPerson = ref([])
  const listLength = computed(() => selectedPerson.value.length)
  const remove = (n) => {
    selectedPerson.value =selectedPerson.value.filter(p => p.name !== n)
  }
  </script>
  