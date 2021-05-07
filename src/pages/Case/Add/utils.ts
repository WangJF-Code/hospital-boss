/* eslint-disable prefer-destructuring */
import { formatFormValuesToAntiplatele } from './../Checks/utils';
import { sexOptions } from '@/utils/options';
import type { FormValuesType } from '@/pages/Record/Add';
import { defaultFormatResult } from '@/utils/utils';
import { find, pick, isEmpty } from 'lodash';
import type { RequestOptionsType } from '@ant-design/pro-utils';
import moment from 'moment';
import { eventType } from './BloodVesselForm';

export const formatPatientList: (res: API.ApiResult_List_Patient__) => void = (res) => {
  const data = defaultFormatResult(res);
  //   console.log(data);
  return data?.map((v) => ({ value: v.id, label: [v.id, v.userName, v.age].join(',') }));
};

export const formatHospitalCheckBodyInfo: (
  res: API.ApiResult_List_HospitalCheckBodyDTO__,
) => API.HospitalCheckBodyDTO = (res) => {
  const d = defaultFormatResult(res)[0];
  return d;
};

export const formatFormValuesToHospitalCheckBody: (
  value: FormValuesType,
) => API.HospitalCheckBodyCreateDTO = (value) => {
  const bodyIndex = pick(value, [
    'abdominalCircumference',
    'bmi',
    'checkTime',
    'heartRate',
    'height',
    'horizontalLeftDiastolic',
    'horizontalLeftSystolic',
    'horizontalRightDiastolic',
    'horizontalRightSystolic',
    'leftAndRight',
    'urinaryIncontinence',
    'verticalLeftSystolic',
    'verticalLeftDiastolic',
    'verticalRightDiastolic',
    'verticalRightSystolic',
    'weight',
  ]);

  const evaluationIndex = pick(value, [
    'abcd2',
    'adl',
    'avlt',
    'balance',
    'bladderHyperactivityDisorder',
    'bnt',
    'cdr',
    'checkTime',
    'constipation',
    'ctt',
    'drinkingWater',
    'ds',
    'eq5D',
    'fingers',
    'hamdanxiety',
    'hamddepression',
    'mmse',
    'moCA',
    'mrs',
    'nihss',
    'nutritionScreening',
    'oneStepExperiment',
    'prostate',
    'quickSitUp',
    'rey',
    'sixMeterWalking',
    'stroop',
    'vft',
  ]);

  return { bodyIndex, evaluationIndex, ...value };
};

export const formatHospitalCheckBodyToFormValues: (
  res: API.ApiResult_HospitalCheckBodyDTO_,
) => FormValuesType = (res) => {
  const data = defaultFormatResult(res);
  const { bodyIndex, evaluationIndex } = data;

  return { ...bodyIndex, ...evaluationIndex, ...data };
};

export const formatFormValuesToDiagnoseRecord: (
  value: FormValuesType,
) => API.HospitalDiagnosticRecordsCreateDTO = (v) => {
  return {
    ...v,
    cerebralInfarctionPossibility: v?.cerebralInfarctionPossibility?.join(','),
    cerebralInfarctionTOAST: v?.cerebralInfarctionTOAST?.join(','),
    cerebralInfarction: v?.ngs ? v?.cerebralInfarction : 0,
    cerebralCerebrovascularDisease: v?.ncx ? v?.cerebralCerebrovascularDisease : 0,
    vascularCognitiveImpairment: v?.xgxrzza ? v?.vascularCognitiveImpairment : 0,
    atrialFibrillation: v?.nxxgb ? v?.atrialFibrillation : 0,
    hyperuricAcidemia: v?.lndmxz ? v?.hyperuricAcidemia : 0,
    cervicalArteryStenosis: v?.jdmxz ? v?.cervicalArteryStenosis : 0,
    coronaryHeartDisease: v?.gxb ? v?.coronaryHeartDisease : 0,
    angina: v?.fc ? v?.angina : 0,
    hypertension: v?.gxy ? v?.hypertension : 0,
    diabetes: v?.tnb ? v?.diabetes : 0,
    hyperlipidemia: v?.gzx ? v?.hyperlipidemia : 0,
    homocysteineemia: v?.txbgasxz ? v?.homocysteineemia : 0,
    chronicObstructivePulmonaryDisease: v?.mxzsxfjb ? v?.chronicObstructivePulmonaryDisease : 0,
  };
};

export const formatDiagnoseRecordToFormValues: (
  res: API.ApiResult_HospitalDiagnosticRecordsDTO_,
) => FormValuesType = (v) => {
  const data = defaultFormatResult(v);
  return {
    ...data,
    ngs: data.cerebralInfarction > 0,
    ncx: data.cerebralCerebrovascularDisease > 0,
    xgxrzza: data.vascularCognitiveImpairment > 0,
    nxxgb: data.atrialFibrillation > 0,
    lndmxz: data.hyperuricAcidemia > 0,
    jdmxz: data.cervicalArteryStenosis > 0,
    zdmxz: data.vascularCognitiveImpairment > 0,
    gxb: data.coronaryHeartDisease > 0,
    fc: data.angina > 0,
    gxy: data.hypertension > 0,
    tnb: data.diabetes > 0,
    gzx: data.hyperlipidemia > 0,
    txbgasxz: data.homocysteineemia > 0,
    gnsxz: data.hyperuricAcidemia > 0,
    mxzsxfjb: data.chronicObstructivePulmonaryDisease > 0,
  };
};

export const formatFormValuesToTreatmentRecord: (
  value: FormValuesType,
) => API.HospitalTreatmentRecordsDTO = (v) => {
  return {
    ...v,
    thrombosisPreventionTypes: v.thrombosisPreventionTypes?.join(','),
    antiplateletsDrugs: v.antiplateletsDrugs?.join(','),
    anticoagulantDrugs: v.anticoagulantDrugs?.join(','),
    lipidDrugs: v.lipidDrugs?.join(','),
  };
};

export const formatTreatmentRecordToFormValues: (
  res: API.ApiResult_HospitalTreatmentRecordsDTO_,
) => FormValuesType = (res) => {
  const v = defaultFormatResult(res);
  return {
    ...v,
    thrombosisPreventionTypes: v?.thrombosisPreventionTypes?.split(',')?.map((x) => Number(x)),
    antiplateletsDrugs: v?.antiplateletsDrugs?.split(',')?.map((x) => Number(x)),
    anticoagulantDrugs: v?.anticoagulantDrugs?.split(',')?.map((x) => Number(x)),
    lipidDrugs: v?.lipidDrugs?.split(',')?.map((x) => Number(x)),
  };
};

interface DiagnoseInfo {
  admitDiagnose?: API.HospitalTreatmentRecordsDTO;
  dischargeDiagnose?: API.HospitalTreatmentRecordsDTO;
}

interface TreatInfo {
  admitTreat?: API.HospitalTreatmentRecordsDTO;
  dischargeTreat?: API.HospitalTreatmentRecordsDTO;
}

export const formatTreatInfo: (
  res: API.ApiResult_List_HospitalTreatmentRecordsDTO__,
) => TreatInfo = (res) => {
  const d = defaultFormatResult(res);
  const admitTreat = find(d, ['type', 0]);
  const dischargeTreat = find(d, ['type', 1]);

  return { admitTreat, dischargeTreat };
};

export const formatDiagnosInfo: (
  res: API.ApiResult_List_HospitalDiagnosticRecordsDTO__,
) => DiagnoseInfo = (res) => {
  const d = defaultFormatResult(res);
  const admitDiagnose = find(d, ['type', 1]);
  const dischargeDiagnose = find(d, ['type', 2]);

  return { admitDiagnose, dischargeDiagnose };
};

export const formatPatientListToOptions: (
  res: API.ApiResult_List_Patient__,
) => RequestOptionsType[] = (res) => {
  const data = defaultFormatResult(res);

  return data?.map((v) => ({
    value: v.id,
    label: [v.id, v.userName, sexOptions[v.sex], v.age].join(','),
  }));
};

export const formatFormValuesToHospitalVascularDTO: (
  value: FormValuesType,
) => API.HospitalVascularCreateDTO = (v) => {
  const { eventList } = v;
  const data = eventList
    ?.map((x, k: number) => {
      const type = x?.checked ? k + 1 : 0;

      let onsetTimes: number | string = '';

      if (type === 4) {
        onsetTimes = x.allTimes?.map((y) => String(moment(y).valueOf()))?.join(',');
      } else {
        onsetTimes = String(moment(x.onsetTimes).valueOf());
      }

      return {
        eventType: type,
        onsetTimes,
      };
    })
    ?.filter((x) => !!x.eventType);

  return { ...v, eventList: data };
};

export const formatHospitalVascularDTOToFormValues: (
  res: API.ApiResult_HospitalVascularDTO_,
) => FormValuesType = (res) => {
  const data = defaultFormatResult(res);
  const { eventList } = data;
  const list = eventType?.map((v) => {
    const item = find(eventList, ['eventType', v.value]);
    if (!item) return { checked: false, onsetTimes: null, allTimes: null };

    if (v.value === 4 && item) {
      let allTimes: number[] = [];
      if (item.onsetTimes) {
        allTimes = item?.onsetTimes?.split(',')?.map((x) => Number(x));
      }
      return {
        checked: true,
        allTimes: !isEmpty(allTimes) ? allTimes : null,
        // allTimes: null,
        onsetTimes: null,
      };
    }
    return { checked: true, onsetTimes: Number(item.onsetTimes), allTimes: null };
  });
  // const list = eventList.map((v) => ({
  //   ...v,
  //   checked: true,
  //   allTimes: v.onsetTimes?.split(',')?.map((x) => Number(x)),
  //   onsetTimes: Number(v.onsetTimes),
  // }));

  return { ...data, eventList: list };
};

interface CheckInfo {
  admitCheck?: API.HospitalCheckBodyDTO;
  dischargeCheck?: API.HospitalCheckBodyDTO;
}

export const formatCheckInfo: (res: API.ApiResult_List_HospitalCheckBodyDTO__) => CheckInfo = (
  res,
) => {
  const d = defaultFormatResult(res);
  const admitCheck = find(d, ['type', 1]);
  const dischargeCheck = find(d, ['type', 2]);

  return { admitCheck, dischargeCheck };
};

export const formatFormValuesToMedicationRecord: (
  value: FormValuesType,
) => API.MedicationRecordDTO = (values) => {
  const drugRecordDTOList = values?.drugs?.map((v) => {
    const drugType = v?.drugType[0];
    const ordersDrug = Number(v?.ordersDrug);
    return { ...v, drugType, drug: v?.drugType?.join(','), ordersDrug };
  });

  return { ...values, drugRecordDTOList };
};

export const formatMedicationRecordToFormValues: (
  res: API.ApiResult_MedicationRecordDTO_,
) => FormValuesType = (res) => {
  const data = defaultFormatResult(res);

  const { drugRecordDTOList } = data;
  const drugs = drugRecordDTOList?.map((v) => ({ ...v, drugType: v.drug?.split(',') }));
  return { ...data, drugs };
};
