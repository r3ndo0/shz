<template>
<div class="w-full">
  <div class=" ">
<div class="flex w-full justify-center">
  <Step2InputsInput :required="true" label="عنوان تقاضا (فارسی)" />   
    <Step2InputsInput :required="true" label="عنوان تقاضا (انگلیسی)" /> 
</div>  
  <div class="flex">
    <Step2InputsBudget :required="true" label="بودجه مورد نیاز" />  
    <Step2InputsSlider />
  </div>
  </div>
<Step2InputsTags />
<Step2InputsEditor />
</div>

</template>

