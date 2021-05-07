import { StepsForm } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { message } from 'antd';
import type { FormInstance } from 'antd';
import PastHistory from './PastHistory';
import BasicInfoForm from './BasicInfoForm';
import LifestyleForm from './LifestyleForm';
import FamilyHistoryForm from './FamilyHistoryForm';
import MedicineHistoryForm from './MedicineHistoryForm';
import {
  get_lifestyle_list_$patientId$,
  get_medicalHistory_list_$patientId$,
  get_patient_$id$,
  post_lifestyle,
  post_medicalHistory,
  post_patient,
  put_lifestyle,
  put_medicalHistory,
  put_patient,
} from '@/services/api';
import type { Store } from 'antd/es/form/interface';
import { useRef, useState } from 'react';
import { useRequest } from 'ahooks';
import {
  formatBasicInfoToFormValues,
  formatFormValuesToBasicInfo,
  formatFormValuesToPatientDrugHistory,
  formatFormValuesToPatientFamilyInfo,
  formatLifeStyleInfo,
  formatPastHistoryInfo,
  formatPatientDrugHistoryToFormValues,
  formatResToPatientFamilyFormValues,
} from './utils';

import moment from 'moment';
import {
  get_familyHistory_list_$patientId$,
  post_familyHistory,
  put_familyHistory,
} from '../../../services/api/家族病史相关接口';
import { history } from '@/.umi/core/history';

export type FormValuesType = Store;

export default (props) => {
  const { params } = props.match;

  const [patientId, setPatientId] = useState(params.id);
  const [lifeStyleId, setLifeStyleId] = useState<number | undefined>();
  const [pastHistoryId, setPastHistoryId] = useState<number | undefined>();
  const [familyHistoryId, setFamilyHistoryId] = useState<number | undefined>();
  const [medicineHistoryId, setMedicineHistoryId] = useState<number | undefined>();
  const [current, setCurrent] = useState(0);

  const basicInfoForm = useRef<FormInstance>();
  const lifeStyleForm = useRef<FormInstance>();
  const pastHistoryForm = useRef<FormInstance>();
  const familyHistoryForm = useRef<FormInstance>();
  const medicineHistoryForm = useRef<FormInstance>();

  useRequest(() => get_patient_$id$({ id: params.id }), {
    formatResult: formatBasicInfoToFormValues,
    ready: !!patientId && current === 0,
    onSuccess: (d) => {
      basicInfoForm.current?.setFieldsValue(d);
    },
  });

  useRequest(() => get_lifestyle_list_$patientId$({ patientId }), {
    formatResult: formatLifeStyleInfo,
    ready: !!patientId && current === 1,
    onSuccess: (d) => {
      lifeStyleForm.current?.setFieldsValue(d);
      setLifeStyleId(d.id);
    },
  });

  useRequest(() => get_medicalHistory_list_$patientId$({ patientId }), {
    formatResult: formatPastHistoryInfo,
    ready: !!patientId && current === 2,
    onSuccess: (d) => {
      pastHistoryForm.current?.setFieldsValue(d);
      setPastHistoryId(d.id);
    },
  });

  useRequest(() => get_familyHistory_list_$patientId$({ patientId }), {
    formatResult: formatResToPatientFamilyFormValues,
    ready: !!patientId && current === 3,
    onSuccess: (d) => {
      familyHistoryForm.current?.setFieldsValue(d);
      setFamilyHistoryId(d.id);
    },
  });

  useRequest(() => get_medicalHistory_list_$patientId$({ patientId }), {
    formatResult: formatPatientDrugHistoryToFormValues,
    ready: !!patientId && current === 4,
    onSuccess: (d) => {
      medicineHistoryForm.current?.setFieldsValue(d);
      setMedicineHistoryId(d.id);
    },
  });

  const submitBasicInfo = async (values: FormValuesType) => {
    try {
      const basicInfoParams = formatFormValuesToBasicInfo(values);

      if (patientId) {
        await put_patient({ ...basicInfoParams, id: patientId });
      } else {
        const res = await post_patient(basicInfoParams);

        if (res.code === 200) {
          setPatientId(res.data);
        }
      }
    } catch (error) {
      return false;
    }
    setCurrent(1);
    return true;
  };

  const submitLifeStyle = async (values: FormValuesType) => {
    try {
      const lifeStyleParams = { patientId, ...values, smokingType: values?.smokingType?.join(',') };
      if (lifeStyleId) {
        await put_lifestyle({ ...lifeStyleParams, id: lifeStyleId });
      } else {
        const res = await post_lifestyle(lifeStyleParams);
        if (res.code === 200) {
          setLifeStyleId(res.data);
        }
      }
    } catch (error) {
      return false;
    }
    setCurrent(2);
    return true;
  };

  const submitPastHistory = async (values: FormValuesType) => {
    try {
      const pastHistoryParams: API.PatientMedicalHistory = {
        patientId,
        ...values,
        priorStrokeType: values.priorStrokeType?.join(','),
        diabetes: values.diabetes === 1 ? values.diabetesType : values.diabetes,
        hypertension: values.hypertension === 1 ? values.hypertensionType : values.hypertension,
      };

      if (values.transientCerebralIchemiaTime) {
        pastHistoryParams.transientCerebralIchemiaTime = moment(
          values.transientCerebralIchemiaTime,
        ).valueOf();
      }
      if (values?.diabetesTime) {
        pastHistoryParams.diabetesTime = moment(values.diabetesTime).valueOf();
      }
      if (pastHistoryId) {
        await put_medicalHistory({ ...pastHistoryParams, id: pastHistoryId });
      } else {
        const res = await post_medicalHistory({
          patientId,
          ...values,
          priorStrokeType: values.priorStrokeType?.join(','),
        });
        if (res.code === 200) {
          setPastHistoryId(res.data);
        }
      }
    } catch (error) {
      return false;
    }
    setCurrent(3);
    return true;
  };

  const submitFamilyHistory = async (values: FormValuesType) => {
    try {
      const pastHistoryParams = formatFormValuesToPatientFamilyInfo(values);
      pastHistoryParams.patientId = patientId;
      if (familyHistoryId) {
        await put_familyHistory({ ...pastHistoryParams, id: familyHistoryId });
      } else {
        const res = await post_familyHistory(pastHistoryParams);
        if (res.code === 200) {
          setFamilyHistoryId(res.data);
        }
      }
    } catch (error) {
      return false;
    }
    setCurrent(4);
    return true;
  };

  const submitMedicineHistory = async (values: FormValuesType) => {
    try {
      const medicineHistoryParams = formatFormValuesToPatientDrugHistory(values);
      medicineHistoryParams.patientId = patientId;
      if (medicineHistoryId) {
        await put_medicalHistory({ ...medicineHistoryParams, id: medicineHistoryId });
      } else {
        const res = await post_medicalHistory(medicineHistoryParams);
        if (res.code === 200) {
          setFamilyHistoryId(res.data);
        }
      }
    } catch (error) {
      return false;
    }
    setCurrent(4);
    return true;
  };

  const defaultFormItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  // const pastFormItemLayout = {
  //   labelCol: { span: 12 },
  //   wrapperCol: { span: 12 },
  // };

  return (
    <ProCard>
      <StepsForm<{
        name: string;
      }>
        current={current}
        onFinish={async () => {
          message.success('提交成功');
          history.goBack();
        }}
        formProps={{
          validateMessages: {
            required: '此项为必填项',
          },
        }}
        onCurrentChange={setCurrent}
      >
        <StepsForm.StepForm
          name="base"
          title="基本信息"
          onFinish={submitBasicInfo}
          layout="horizontal"
          formRef={basicInfoForm}
          {...defaultFormItemLayout}
        >
          <BasicInfoForm />
        </StepsForm.StepForm>
        <StepsForm.StepForm
          name="checkbox"
          title="生活方式"
          onFinish={submitLifeStyle}
          formRef={lifeStyleForm}
          layout="horizontal"
        >
          <LifestyleForm />
        </StepsForm.StepForm>
        <StepsForm.StepForm
          name="time"
          title="既往病史"
          layout="horizontal"
          formRef={pastHistoryForm}
          onFinish={submitPastHistory}
        >
          <PastHistory />
        </StepsForm.StepForm>
        <StepsForm.StepForm
          name="familyHistory"
          title="家族病史"
          layout="horizontal"
          formRef={familyHistoryForm}
          onFinish={submitFamilyHistory}
        >
          <FamilyHistoryForm />
        </StepsForm.StepForm>
        <StepsForm.StepForm
          name="medicianHistory"
          title="个人用药史"
          layout="horizontal"
          formRef={medicineHistoryForm}
          onFinish={submitMedicineHistory}
          labelCol={{ span: 6 }}
        >
          <MedicineHistoryForm />
        </StepsForm.StepForm>
      </StepsForm>
    </ProCard>
  );
};
