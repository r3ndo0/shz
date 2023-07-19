<template>


  <div dir="ltr" class="w-full   flex justify-end p-12">
    <ClientOnly >

    <el-tree
    :data="data"
    class="w-full bg-rose-400"
    show-checkbox
    node-key="id"
    :props="defaultProps"
    :render-content="renderContent"
  />
  </ClientOnly>
</div>

  </template>
  
<script setup >
const defaultProps = {
  children: 'children',
  label: 'label',
}

const loading = ref(false)
  const value = ref()

const {trees,pending} = await getAll()

const _ = buildHierarchy(trees)
console.log(_)
const renderContent = (h, { data }) => {
  return h(
    'span',
    {
      style: {
        color: '#626AEF',
      },
    },
    data.value.label
  )
}

const data = ref(buildHierarchy(trees))
function buildHierarchy(arry) {
loading.value = true
var roots = [], children = {};

// find the top level nodes and hash the children based on parent
for (var i = 0, len = arry.length; i < len; ++i) {
    var item = arry[i],
        p = item.parentId,
        target = !p ? roots : (children[p] || (children[p] = []));

    target.push({ value:item });
}

// function to recursively build the tree
var findChildren = function(parent) {
    if (children[parent.value.value]) {
        parent.children = children[parent.value.value];
        for (var i = 0, len = parent.children.length; i < len; ++i) {
            findChildren(parent.children[i]);
        }
    }
};

// enumerate through to handle the case where there are multiple roots
for (var i = 0, len = roots.length; i < len; ++i) {
    findChildren(roots[i]);
}
loading.value = false

return roots;
}




</script>


<style scoped>

</style>