import { defineStore } from "pinia";

export const step1Data = defineStore("step1", () => {
  const submittedBy = ref<string>("");
  const budProg = ref<string>("");
  const notifyReq = ref<boolean>(true);
  const dateRange = ref<string[] | string | undefined>();

  function setSubmittedBy(s: string) {
    submittedBy.value = s;
  }
  function setBudProg(s: string) {
    budProg.value = s;
  }
  function setNotifyReq(s: boolean) {
    notifyReq.value = s;
  }
  function setDateRange(s: string[] | string) {

    dateRange.value = s;
  }

  return {
    submittedBy,
    budProg,
    notifyReq,
    dateRange,
    setSubmittedBy,
    setBudProg,
    setNotifyReq,
    setDateRange,
  };
});
