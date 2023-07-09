<template>
  <div dir="rtl" class="sansx">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
.sansx {
  font-family: sansx;
}

@font-face {
  font-family: sansx;
  font-weight: 400;
  src: local("sansx"), url("~/assets/medium.ttf") format("truetype");
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>