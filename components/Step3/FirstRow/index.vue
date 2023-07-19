<template>
    <div class="flex gap-24 justify-between items-center border-b-2 pb-12 border-yellow-200">
        <Step3FirstRowOutPutSelect />
        <Step3FirstRowEstimatedTime :required="true" name="estimatedTime" label="زمان تخمینی مورد نیاز"/>
        <Step3FirstRowOutPutSelect />
    </div>
</template>