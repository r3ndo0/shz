<template>
  <div class="m-auto w-[50%] mt-12">
    <div class="flex gap-4 text-xl justify-center font-bold mb-5">
      <IconsAsterisk class="" />
      <p class="">
        شما تقاضای خود را برای کدام برنامه بودجه می خواهید ثبت کنید؟
      </p>
    </div>
    <form class="flex justify-center flex-col items-center">
      
      <div>
        <div class="my-3">
           
          <input
            type="radio"
            class="bg-yellow-600"
            id="html"
            name="fav_language"
          />
           
          <label for="html" class="text-lg  "
            >ماده 13 نظام نامه پژوهش فناوری و تجاری سازی وزارت نفت</label
          >
        </div>
        <div class="my-3">
           
          <input
            type="radio"
            class="bg-yellow-600"
            id="css"
            name="fav_language"
          />
           
          <label class="text-lg  " for="css"
            >سند برنامه راهبردی توسعه فناوری وزارت نفت</label
          >
        </div>
      </div>
    </form>
  </div>
</template>


<style scoped>

/* Style the radio button */
/* Style the radio button */
input[type="radio"] {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */
  transform: scale(1.5);
}
</style>