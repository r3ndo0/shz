<script setup >

function toArabicNumeral(en) {
  return ("" + en).replace(/[0-9]/g, function (t) {
    return "٠١٢٣٤٥٦٧٨٩".slice(+t, +t + 1);
  });
}
const stepIdx = inject('step')


const completedClass = (n) => {
  if (stepIdx.value >= n) {
    return 'completed'
  }
}
</script>

<template>
  <div class="w-full flex justify-center ">
    <div
      class="stepper-wrapper font-bold shadow shadow-gray-300 rounded-lg py-4"
    >
      <div class="stepper-item completed" >
        <div class="step-counter"><IconsCheck color='#ffffff'/></div>
        <div class="step-name">شروع</div>
      </div>
      <div class="stepper-item " :class="completedClass(2)">
        <div class="step-counter">2</div>
        <div class="step-name font-bold text-[#7A7A7A]">اطلاعات اصلی</div>
      </div>
      <div class="stepper-item active" :class="completedClass(3)">
        <div class="step-counter">3</div>
        <div class="step-name font-bold text-[#7A7A7A]">جزییات</div>
      </div>
      <div class="stepper-item" :class="completedClass(4)">
        <div class="step-counter">4</div>
        <div class="step-name font-bold text-[#7A7A7A]">تایید اطلاعات</div>
      </div>
      <div class="stepper-item" :class="completedClass(5)">
        <div class="step-counter">5</div>
        <div class="step-name font-bold text-[#7A7A7A]">دریافت گواهی</div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.stepper-wrapper {
  position: absolute;
  width: 80%;
  margin: auto;
  top: -5%;
  background-color: white;

  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.stepper-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.stepper-item::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  border-bottom: 3px solid #ccc;
  width: 70%;
  top: 20px;
  left: -35%;
  z-index: 2;
}

.stepper-item .step-counter {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #d9d9d9;
  color: #7b7a7a;
  margin-bottom: 6px;
}

.stepper-item.active {
  font-weight: bold;
}

.stepper-item.completed .step-counter {
  background-color: #8bc34a;
  color: #ffffff;
}

.stepper-item.completed::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #8bc34a;
  width: 70%;
  top: 20px;
  left: -35%;
  z-index: 2;
}

.stepper-item:first-child::before {
  content: none;
}
.stepper-item:last-child::after {
  content: none;
}
</style>