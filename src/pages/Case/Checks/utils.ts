import type { FormValuesType } from '@/pages/Record/Add';
import { defaultFormatResult, formatDate } from '@/utils/utils';
import type { UploadFile } from 'antd/lib/upload/interface';
import { fromPairs, toPairs } from 'lodash';

export const formatFormValuesToBloodRoutine: (value: FormValuesType) => API.DetectBloodRoutine = (
  v,
) => {
  return Object.assign(v, {
    images: v?.images?.map((x: UploadFile) => x.url)?.join(','),
  });
};

export const formatFormValuesToESR: (value: FormValuesType) => API.DetectItemValueCreateDTO = (
  v,
) => {
  return Object.assign(v, {
    images: v?.images?.map((x: UploadFile) => x.url)?.join(','),
    checkTime: formatDate(v.checkTime, 'YYYY-MM-DD HH:mm:ss'),
  });
};

export const formatFormValuesToAntiplatele: (
  value: FormValuesType,
) => API.DetectAntiplateletDrugGenesUpdateDTO = (v) => {
  return Object.assign(v, {
    aspirinImages: v?.aspirinImages?.map((x: UploadFile) => x.url)?.join(','),
    clopidogrelImages: v?.clopidogrelImages?.map((x: UploadFile) => x.url)?.join(','),
    statinsImages: v?.statinsImages?.map((x: UploadFile) => x.url)?.join(','),
  });
};

export const formatFormValuesToECG: (value: FormValuesType) => API.DetectItemValueCreateDTO = (
  v,
) => {
  return Object.assign(v, {
    images: v?.images?.map((x: UploadFile) => x.url)?.join(','),
    errorType: v?.errorType?.join(','),
  });
};

export const formatFormValuesToCarotidDuplexInfo: (
  value: FormValuesType,
) => API.DetectItemValueCreateDTO = (v) => {
  return Object.assign(v, {
    images: v?.images?.map((x: UploadFile) => x.url)?.join(','),
    errorType: v?.errorType?.join(','),
  });
};

export const formatFormValuesToDetectItemMultipleSingle: (
  value: FormValuesType,
) => API.DetectItemMultipleSingleCreateDTO = (v) => {
  const { list } = v;
  const multipleSingle = list?.map((x: number, k: number) => `${k}-${x}`)?.join(';');
  return { ...v, multipleSingle, images: v?.images?.map((x: UploadFile) => x.url)?.join(',') };
};

export const formatDetectItemMultipleSingleToFormValues: (
  res: API.ApiResult_DetectItemMultipleSingleDTO_,
) => FormValuesType = (res) => {
  const data = defaultFormatResult(res);

  const multipleSingle = data.multipleSingle
    ?.split(';')
    ?.map((v) => v?.split('-'))
    ?.map((v) => v.map((x) => Number(x)))
    ?.map((x) => x[1]);

  return {
    ...data,
    list: multipleSingle,
    images: data?.images?.split(',')?.map((v) => ({ uid: v, url: v })),
  };
};

interface Item {
  id?: number;
  createTime?: string;
  updateTime?: string;
}

export const formatListToRecordCardData: (
  res: API.ApiResult_List_DetectBloodRoutineDTO__,
) => Item[] = (res) => {
  const data = defaultFormatResult(res);

  return data?.map((v) => ({
    id: v.id,
    checkTime: v.checkTime,
    createTime: formatDate(v.createTime, 'YYYY-MM-DD HH:mm:ss'),
  }));
};

export const formatCheckInfoToFormValues: (res: API.ApiResult) => FormValuesType = (res) => {
  const data = defaultFormatResult(res);
  const images = data?.images?.split(',')?.map((v) => ({ uid: v, url: v }));

  return { ...data, images };
};

export const formatAntiplateleInfoToFormValues: (res: API.ApiResult) => FormValuesType = (res) => {
  const data = defaultFormatResult(res);

  return {
    ...data,
    aspirinImages: data?.aspirinImages?.split(',')?.map((v) => ({ uid: v, url: v })),
    clopidogrelImages: data?.clopidogrelImages?.split(',')?.map((v) => ({ uid: v, url: v })),
    statinsImages: data?.statinsImages?.split(',')?.map((v) => ({ uid: v, url: v })),
  };
};

export const formatECGInfoToFormValues: (res: API.ApiResult) => FormValuesType = (res) => {
  const data = defaultFormatResult(res);
  const images = data?.images?.split(',')?.map((v) => ({ uid: v, url: v }));

  return { ...data, images, errorType: data?.errorType?.split(',')?.map((v) => Number(v)) };
};

export const formatFormValuesToAdvancedSearchHospitalDTO: (
  values: FormValuesType,
) => API.AdvancedSearchHospitalDTO = (values) => {
  const { recordRange } = values;
  const params: API.AdvancedSearchHospitalDTO = {};

  // 入院诊断
  if (recordRange === 0) {
    const diagnosticRecords = values?.diagnoseType
      ?.filter((v: string) => !!v)
      ?.map((v: string) => ({ [v]: 3 }));

    params.diagnosticRecords = diagnosticRecords;
  }

  return { ...values, ...params };
};
