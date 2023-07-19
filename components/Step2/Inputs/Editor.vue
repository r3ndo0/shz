<template>
  <div class="p-6 ">
    <p>چکیده</p>
    <div class="flex p-4  justify-center items-center gap-5">

      <button
        type="button"
        class="border border-gray-900 p-1  hover:scale-105 ease-in-out duration-300 "
        @click="editor.chain().focus().redo().run()"
      ><IconsEditorRedo /></button>
      <button
        type="button"
        class="border border-gray-900 p-1  hover:scale-105 ease-in-out duration-300 "
        @click="editor.chain().focus().undo().run()"
      ><IconsEditorUndo /></button>
      <button
        type="button"
        class="border border-gray-900 p-1  hover:scale-105 ease-in-out duration-300 "
        @click="editor.chain().focus().toggleHighlight().run()"
      ><IconsEditorHH /></button>
      <button
        type="button"
        class="border border-gray-900 p-1  hover:scale-105 ease-in-out duration-300 "
        @click="editor.chain().focus().toggleItalic().run()"
      ><IconsEditorItalic /></button>
      <button
        type="button"
        class="border border-gray-900 p-1  hover:scale-105 ease-in-out duration-300 "
        @click="editor.chain().focus().toggleBold().run()"
      ><IconsEditorBold /></button>
    </div>
    <editor-content v-model="output" class=" overflow-y-scroll h-[350px] bg-white p-4" :editor="editor" />
    <!-- <button type="button"
      class="border border-gray-900 p-1  hover:scale-105 ease-in-out duration-300 " @click="get()">get</button> -->

  </div>
</template>

<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Highlight from '@tiptap/extension-highlight'
const output = ref()
const editor = useEditor({
  content: "hello world",
  extensions: [StarterKit,Highlight],
});
const get = () => {
  const html = editor.value.getHTML()
  console.log(html)
}
</script>


<style >
 .ProseMirror {
    outline: none;
    padding: 12px;

}

</style>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #f3d361; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #FED235; 
}


</style>
