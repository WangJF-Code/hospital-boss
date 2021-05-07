import ProCard from '@ant-design/pro-card';
import BasicInfoForm from '../Add/BasicInfoForm';
import LifestyleForm from '../Add/LifestyleForm';
import PastHistoryForm from '../Add/PastHistory';
import { useRef, useState } from 'react';
import useRequest from '@ahooksjs/use-request';
import {
  findCityByIds,
  formatBasicInfoToFormValues,
  formatLifeStyleInfo,
  formatPastHistoryInfo,
  formatPatientDrugHistoryToFormValues,
  formatResToPatientFamilyFormValues,
} from '../Add/utils';
import {
  get_familyHistory_list_$patientId$,
  get_lifestyle_list_$patientId$,
  get_medicalHistory_list_$patientId$,
  get_patient_$id$,
} from '@/services/api';
import type { FormInstance } from 'antd';
import ProForm from '@ant-design/pro-form';
import FamilyHistoryForm from '../Add/FamilyHistoryForm';
import MedicineHistoryForm from '../Add/MedicineHistoryForm';

const patient = {
  id: 'ID202104120021',
};

const Detail = (props) => {
  const [tab, setTab] = useState('1');
  const { params } = props.match;
  const patientId = params.id;

  const basicInfoForm = useRef<FormInstance>();
  const lifeStyleForm = useRef<FormInstance>();
  const pastHistoryForm = useRef<FormInstance>();
  const familyHistoryForm = useRef<FormInstance>();
  const medicineHistoryForm = useRef<FormInstance>();

  useRequest(() => get_patient_$id$({ id: params.id }), {
    formatResult: formatBasicInfoToFormValues,
    ready: !!patientId && tab === '1',
    onSuccess: (d) => {
      const cityText = findCityByIds(d?.city);
      console.log(cityText);
      basicInfoForm.current?.setFieldsValue(d);
    },
  });

  useRequest(() => get_lifestyle_list_$patientId$({ patientId }), {
    formatResult: formatLifeStyleInfo,
    ready: !!patientId && tab === '2',
    onSuccess: (d) => {
      lifeStyleForm.current?.setFieldsValue(d);
    },
  });

  useRequest(() => get_medicalHistory_list_$patientId$({ patientId }), {
    formatResult: formatPastHistoryInfo,
    ready: !!patientId && tab === '3',
    onSuccess: (d) => {
      pastHistoryForm.current?.setFieldsValue(d);
    },
  });

  useRequest(() => get_familyHistory_list_$patientId$({ patientId }), {
    formatResult: formatResToPatientFamilyFormValues,
    ready: !!patientId && tab === '4',
    onSuccess: (d) => {
      familyHistoryForm.current?.setFieldsValue(d);
    },
  });
  useRequest(() => get_medicalHistory_list_$patientId$({ patientId }), {
    formatResult: formatPatientDrugHistoryToFormValues,
    ready: !!patientId && tab === '5',
    onSuccess: (d) => {
      medicineHistoryForm.current?.setFieldsValue(d);
    },
  });

  return (
    <ProCard
      tabs={{
        type: 'card',
        activeKey: tab,
        onChange: setTab,
      }}
      title={`患者ID:${patient.id}`}
    >
      <ProCard.TabPane key="1" tab="基本信息">
        <ProForm formRef={basicInfoForm} layout="horizontal">
          <BasicInfoForm readonly />
        </ProForm>
      </ProCard.TabPane>
      <ProCard.TabPane key="2" tab="生活方式">
        <ProForm formRef={lifeStyleForm} layout="horizontal">
          <LifestyleForm readonly />
        </ProForm>
      </ProCard.TabPane>
      <ProCard.TabPane key="3" tab="既往病史">
        <ProForm formRef={pastHistoryForm} layout="horizontal">
          <PastHistoryForm readonly />
        </ProForm>
      </ProCard.TabPane>

      <ProCard.TabPane key="4" tab="家族病史">
        <ProForm formRef={familyHistoryForm} layout="horizontal">
          <FamilyHistoryForm readonly />
        </ProForm>
      </ProCard.TabPane>
      <ProCard.TabPane key="5" tab="个人用药史">
        <ProForm formRef={medicineHistoryForm} layout="horizontal">
          <MedicineHistoryForm readonly />
        </ProForm>
      </ProCard.TabPane>
      <ProCard.TabPane key="6" tab="入院记录">
        内容二
      </ProCard.TabPane>
      <ProCard.TabPane key="7" tab="随访记录">
        内容二
      </ProCard.TabPane>
    </ProCard>
  );
};

export default Detail;
