import { defaultFormatResult } from '@/utils/utils';
import { intersection, union, find, isEmpty } from 'lodash';
import type { FormValuesType } from './index';
import city from '@/assets/json/city';
import type { OptionType, SelectProps } from 'antd/lib/select';

export interface IBasicInfo {
  sex?: string;
  nation: number;
  livingStatus: string;
  maritalStatus: string;
  educationDegree: string;
  medicalInsuranceType: string;
  income: string;
  nationTitle: string;
  city: string[];
}

export const formatBasicInfoToFormValues: (res: API.ApiResult_Patient_) => IBasicInfo = (res) => {
  const d = defaultFormatResult(res);
  const { sex, livingStatus, maritalStatus, educationDegree, medicalInsuranceType, income } = d;
  const city = d?.city?.split(',');
  const [nation, nationTitle] = d?.nation?.split(',');
  return {
    ...d,
    sex: String(sex),
    nation: Number(nation),
    livingStatus: String(livingStatus),
    maritalStatus: String(maritalStatus),
    educationDegree: String(educationDegree),
    medicalInsuranceType: String(medicalInsuranceType),
    income: String(income),
    nationTitle,
    city,
  };
};

export const formatFormValuesToBasicInfo: (value: FormValuesType) => API.Patient = (values) => {
  return {
    ...values,
    city: values.city?.join(','),
    nation: `${values.nation},${values.nationTitle}`,
  };
};

export const formatLifeStyleInfo: (
  res: API.ApiResult_List_PatientLifestyle__,
) => API.PatientLifestyle = (res) => {
  const d = defaultFormatResult(res)[0];

  return Object.assign(d, { smokingType: d.smokingType.split(',') });
};

export const formatPastHistoryInfo: (
  res: API.ApiResult_PatientMedicalHistory_,
) => API.PatientMedicalHistory = (res) => {
  const d = defaultFormatResult(res)[0];
  const { diabetes, hypertension } = d;
  return Object.assign(d, {
    priorStrokeType: d?.priorStrokeType?.split(','),
    diabetes: diabetes !== 0 ? 1 : 0,
    diabetesType: diabetes,
    hypertension: hypertension !== 0 ? 1 : 0,
    hypertensionType: hypertension,
  });
};

export const formatResToPatientFamilyFormValues: (
  res: API.ApiResult_PatientFamilyHistory_,
) => API.PatientFamilyHistory = (res) => {
  const d = defaultFormatResult(res)[0];

  return {
    ...d,
    priorStrokePatient: d?.priorStrokePatient?.split(',')?.map((v: string) => Number(v)),
    hypertensionPatient: d?.hypertensionPatient?.split(',')?.map((v: string) => Number(v)),
    diabetesPatient: d?.diabetesPatient?.split(',')?.map((v: string) => Number(v)),
    hyperlipemiaPatient: d?.hyperlipemiaPatient?.split(',')?.map((v: string) => Number(v)),
    cardiovascularPatient: d?.cardiovascularPatient?.split(',')?.map((v: string) => Number(v)),
    dementiaPatient: d?.dementiaPatient?.split(',')?.map((v: string) => Number(v)),
    migrainePatient: d?.migrainePatient?.split(',')?.map((v: string) => Number(v)),
    immunityPatient: d?.migrainePatient?.split(',')?.map((v: string) => Number(v)),
    otherPatient: d?.otherPatient?.split(',')?.map((v: string) => Number(v)),
  };
};

export const formatFormValuesToPatientFamilyInfo: (
  value: FormValuesType,
) => API.PatientFamilyHistory = (values) => {
  return {
    ...values,
    priorStrokePatient: values.priorStrokePatient?.join(','),
    hypertensionPatient: values.hypertensionPatient?.join(','),
    diabetesPatient: values.diabetesPatient?.join(','),
    hyperlipemiaPatient: values.hyperlipemiaPatient?.join(','),
    cardiovascularPatient: values.cardiovascularPatient?.join(','),
    dementiaPatient: values.dementiaPatient?.join(','),
    migrainePatient: values.migrainePatient?.join(','),
    immunityPatient: values?.migrainePatient?.join(','),
    otherPatient: values?.otherPatient?.join(','),
  };
};

export const formatPatientDrugHistoryToFormValues: (
  res: API.ApiResult_List_PatientDrugHistory__,
) => API.PatientDrugHistory = (res) => {
  const d = defaultFormatResult(res)[0];
  const jy = d?.lowerBloodPressureDrugType?.split(',')?.map((v) => Number(v));
  const jz = d?.lipidRegulatorDrugType?.split(',')?.map((v) => Number(v));
  const jt = d?.lipidRegulatorDrugType?.split(',')?.map((v) => Number(v));
  const acid = d?.acidSuppressionDrugType?.split(',')?.map((v) => Number(v));
  const expand = d?.expandTheCrownDrugType?.split(',')?.map((v) => Number(v));
  const acid0 = intersection(acid, [0, 1, 2, 3]);
  const acid1 = intersection(acid, [4, 5, 6]);
  const acid2 = intersection(acid, [7]);
  const acid3 = intersection(acid, [8, 9]);
  const acid4 = intersection(acid, [10, 11, 12]);
  const expand0 = intersection(expand, [0, 1, 2]);
  const expand1 = intersection(expand, [3]);
  const expand2 = intersection(expand, [4, 5]);
  const expand3 = intersection(expand, [6]);

  return Object.assign(d, {
    antiplateletDrugType: d?.antiplateletDrugType?.split(',')?.map((v) => Number(v)),
    anticoagulantDrugType: d?.anticoagulantDrugType?.split(',')?.map((v) => Number(v)),
    acidSuppressionDrugType: d?.acidSuppressionDrugType?.split(',')?.map((v) => Number(v)),
    expandTheCrownDrugType: d?.expandTheCrownDrugType?.split(',')?.map((v) => Number(v)),
    isNeedJyzl: d?.lowerBloodPressure === 0 ? 0 : 1,
    jyyNotTakeReason: d?.lowerBloodPressure === 1 && jy,
    jyMedicine: d?.lowerBloodPressure === 2 && jy,
    jyLeakageReason: d?.lowerBloodPressure === 3 ? d?.lowerBloodPressureDrugType : '',
    isNeedLipidRegulator: d?.lipidRegulator === 0 ? 0 : 1,
    jzyNotTakeReason: d?.lipidRegulator === 1 && jz,
    jzMedicine: d?.lipidRegulator === 2 && jz,
    jzLeakageReason: d?.lipidRegulator === 3 ? d?.lipidRegulatorDrugType : '',
    isNeedHypoglycemic: d?.hypoglycemic === 0 ? 0 : 1,
    notTakeHypoglycemicReason: d?.hypoglycemic === 1 && jt,
    jtMedicine: d?.hypoglycemic === 2 && jt,
    hypoglycemicLeakageReason: d?.hypoglycemic === 3 ? d?.hypoglycemicDrugType : '',
    acid0,
    acid1,
    acid2,
    acid3,
    acid4,
    expand0,
    expand1,
    expand2,
    expand3,
  });
};

export const formatFormValuesToPatientDrugHistory: (
  value: FormValuesType,
) => API.PatientDrugHistory = (v) => {
  let lowerBloodPressureDrugType = '';
  let lipidRegulatorDrugType = '';
  let hypoglycemicDrugType = '';
  const { acid0, acid1, acid2, acid3, acid4, expand0, expand1, expand2, expand3 } = v;
  const acidSuppressionDrugType = union([...acid0, ...acid1, ...acid2, ...acid3, ...acid4]).join(
    ',',
  );

  const expandTheCrownDrugType = union([...expand0, ...expand1, ...expand2, ...expand3]);

  switch (v.lowerBloodPressure) {
    case 1:
      lowerBloodPressureDrugType = v.jyyNotTakeReason?.join(',');
      break;
    case 2:
      lowerBloodPressureDrugType = v.jzMedicine?.join(',');
      break;
    case 3:
      lowerBloodPressureDrugType = v.jyLeakageReason;
      break;
    default:
      break;
  }

  switch (v.lipidRegulator) {
    case 1:
      lipidRegulatorDrugType = v.jzyNotTakeReason?.join(',');
      break;
    case 2:
      lipidRegulatorDrugType = v.jzMedicine?.join(',');
      break;
    case 3:
      lipidRegulatorDrugType = v.jzLeakageReason;
      break;
    default:
      break;
  }

  switch (v.lipidRegulator) {
    case 1:
      lipidRegulatorDrugType = v.jzyNotTakeReason?.join(',');
      break;
    case 2:
      lipidRegulatorDrugType = v.jzMedicine?.join(',');
      break;
    case 3:
      lipidRegulatorDrugType = v.jzLeakageReason;
      break;
    default:
      break;
  }

  switch (v.hypoglycemic) {
    case 1:
      hypoglycemicDrugType = v.notTakeHypoglycemicReason?.join(',');
      break;
    case 2:
      hypoglycemicDrugType = v.jtMedicine?.join(',');
      break;
    case 3:
      hypoglycemicDrugType = v.hypoglycemicLeakageReason;
      break;
    default:
      break;
  }

  return {
    ...v,
    antiplateletDrugType: v?.antiplateletDrugType?.join(','),
    anticoagulantDrugType: v?.anticoagulantDrugType?.join(','),
    lowerBloodPressure: v.lowerBloodPressure === 0 ? 0 : v.isNeedJyzl,
    lipidRegulator: v.isNeedLipidRegulator === 0 ? 0 : v.lipidRegulator,
    lowerBloodPressureDrugType,
    lipidRegulatorDrugType,
    hypoglycemicDrugType,
    acidSuppressionDrugType,
    expandTheCrownDrugType: expandTheCrownDrugType?.join(','),
  };
};

export const findCityByIds: (ids: string[], item?: SelectProps<any>['options']) => string = (
  ids,
  item = city,
) => {
  if (isEmpty(ids)) return '';

  const id = ids.shift();
  const target = find(item, ['value', id]);
  return target?.label + findCityByIds(ids, target?.children);
};
