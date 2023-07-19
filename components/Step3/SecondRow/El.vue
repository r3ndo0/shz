<script setup lang="ts">
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
  const selectedPerson = ref<typeof people>([])
  const listLength = computed(() => selectedPerson.value.length)
  const remove = (n:string) => {
    selectedPerson.value =selectedPerson.value.filter(p => p.name !== n)
  }
const fileEmit = defineEmits(["selected-file"]);
const selectedFile = ref(null);
const fileInput = ref<HTMLInputElement | null>(null);


async function handleFileUpload(event: any) {
  const input = event.target;
  if (input.files && input.files[0]) {
    selectedFile.value = input.files[0];

  }

  if (!selectedFile.value) {
    return;
  }

console.log(selectedFile.value)
  fileEmit("selected-file", selectedFile.value);

}


</script>


<template>
  <div class="md:px-8 flex gap-12 justify-center items-center w-full py-8  ">
    <div class="relative  w-full">
      <p>انتخاب فایل</p>

      <div class=" rounded-lg w-full h-full border-dashed border-gray-500  border-2  ">
        <input
          ref="fileInput"
          @change="handleFileUpload"
          accept="image/*"
          type="file"
          class="hidden"
          name="image"
          id="myFile"
        />
        <label for="myFile" class="cursor-pointer flex w-full text-gray-200">
          <IconsUpload class="m-auto"/>
        </label>
      </div>
    </div>
    <div class="max-w-full min-w-[50%] relative ">
        <p class="">نوع فایل</p>
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
  </div>
</template>