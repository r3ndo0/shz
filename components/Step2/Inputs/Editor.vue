<template>
    <editor-content v-model="content" :editor="editor" />
  </template>
  
  <script setup>
  import { useEditor, EditorContent } from '@tiptap/vue-3'
  import StarterKit from '@tiptap/starter-kit'
  const content = ref('')
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
  })
  watch(content,c => console.log(c))
  </script>                                                