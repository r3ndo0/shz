<template>
  <div class="flex gap-4 m-auto w-[50%] items-center justify-center">
    <IconsAsterisk />
    <h2>ثبت کننده تقاضا</h2>
    <Listbox v-model="selectedPerson">
      <div class="relative">
        <ListboxButton
        :class="selectedPerson ? 'py-3' : 'py-5'"
          class="relative w-[200px] cursor-default rounded-lg text-right pr-4 bg-white  shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <span class="truncate">{{ selectedPerson.name }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pr-2"
          >
            <IconsArrowDown />
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
                <IconsCheck color='#64748b'/>
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
  
  <script setup>
import {step1Data} from '~/store/firstStep'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const people = [
  { name: "لورم ایپسوم" },
  { name: "ایپسوم1" },
  { name: "ایپسوم2" },
  { name: "ایپسوم3" },
  { name: "ایپسوم4" },
  { name: "ایپسوم5" },
];
const {setSubmittedBy} = step1Data()
const selectedPerson = ref('');

watch(selectedPerson,v => {
  setSubmittedBy(v.name)
})
</script>
  