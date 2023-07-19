import * as yup from "yup"

export const stepOneSchema = yup.object({
    submitted_by:yup.string().required(),
    w_p_b : yup.string().oneOf(['13','strategic']),
    notify:yup.bool(),
    dateRange : yup.string()
})


export const stepTwoSchema = yup.object({
    enTitle : yup.string().required('لطفا عنوان انگلیسی را وارد کنید').matches(/^[a-zA-Z\s]+$/, "لطفا از حروف انگلیسی استفاده کنید"),
    faTitle:yup.string().required('لطفا عنوان فارسی را وارد کنید').matches(/^[\u0600-\u06FF\s]+$/, "لطفا از حروف فارسی استفاده کنید"),
    budget:yup.string().required('لطفا بودجه مورد نظر را وارد کنید'),
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