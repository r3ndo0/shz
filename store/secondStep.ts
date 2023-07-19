import { defineStore } from "pinia";

type Step2Data = {
    reqTitleEn: string;
    reqTitleFa: string;
    trlRange: number[];
    budget: string;
    tags: string[];
    summary: string;
    tree: string[];
};

export const step2Data = defineStore('step2', () => {
    const allData = ref<Step2Data>({
        reqTitleEn:'',
        reqTitleFa:'',
        trlRange:[2,8],
        budget:'',
        tags:[],
        summary:'',
        tree:[]
    });

    const setter = <K extends keyof Step2Data>(key: K, v: Step2Data[K]) => {
        allData.value[key] = v;
    };

    return {
        allData,
        setter
    }
});