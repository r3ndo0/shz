import * as yup from "yup"

export const stepOneSchema = yup.object({
    submitted_by:yup.string().required(),
    w_p_b : yup.string().oneOf(['13','strategic']),
    notify:yup.bool(),
    dateRange : yup.string()
})


export const stepTwoSchema = yup.object({
    reqTitle : yup.string().required(),
    TRL_range:yup.number().required(),
    req_budget:yup.number().required(),
    tags:yup.array().of(yup.string()),
    summary : yup.string().required()
})


interface Image {
    name: string;
    type: string;
    size: number;
    data: any;
  }
export const stepThreeSchema= yup.object({
    output_type:yup.array().of(yup.string()),
    months_needed:yup.number().required(),
    reward_type:yup.string(),
    
})