import type { FormValuesType } from '@/pages/Record/Add';
import { defaultFormatResult } from '@/utils/utils';
// import { listUsingPOST_1 } from '@/services/api';
import useRequest from '@ahooksjs/use-request';
import type { FormInstance } from '@ant-design/pro-form';
import ProForm from '@ant-design/pro-form';
import { message } from 'antd';
import moment from 'moment';
import { useRef, useState } from 'react';
import CaseInfoForm from './CaseInfoForm';
import { formatPatientListToOptions } from './utils';
import type { RequestOptionsType } from '@ant-design/pro-utils';
import { formatBasicInfoToFormValues } from '@/pages/Record/Add/utils';
import { history } from '@/.umi/core/history';
import {
  get_hospitalRecords_$id$,
  get_patient_$id$,
  post_hospitalRecords,
  post_patient_list,
  put_hospitalRecords,
} from '@/services/api';

const Add = (props) => {
  // const searchPaientByName = async (name: string) => {
  // return await listUsingPOST_1({ userName: name });
  // return formatPatientList(res);
  // };
  const { params } = props.match;
  const { hospitalRecordsId } = params;
  const [patientId, setPatientId] = useState('');
  const [patients, setPatients] = useState<RequestOptionsType[]>([]);

  const caseInfoForm = useRef<FormInstance>();

  const { id } = params;

  useRequest(() => get_hospitalRecords_$id$({ id }), {
    formatResult: defaultFormatResult,
    ready: !!id,
    onSuccess: (d) => {
      setPatientId(d.patientId);
      caseInfoForm.current?.setFieldsValue({ ...d, sex: String(d.sex) });
    },
  });

  const submit = async (values: FormValuesType) => {
    try {
      const formParams = {
        ...values,
        dischargeTime: moment(values.dischargeTime).valueOf(),
        hospitalizationTime: moment(values.hospitalizationTime).valueOf(),
        toHospitalTime: moment(values.hospitalizattoHospitalTimeionTime).valueOf(),
        onsetTime: moment(values.onsetTime).valueOf(),
        status: 1,
        patientId: values.id,
      };

      if (id) {
        await put_hospitalRecords({ ...formParams, id: hospitalRecordsId, patientId, deleted: 0 });
      } else {
        const res = await post_hospitalRecords(formParams);

        if (res.code === 200) {
          message.success('提交成功');
        }
      }
      history.goBack();
    } catch (error) {
      return false;
    }

    return true;
  };

  const { run: searchList } = useRequest(
    (key) => {
      return post_patient_list({ userName: key.keyWords });
    },
    {
      manual: true,
      formatResult: formatPatientListToOptions,
      // formatResult: defaultFormatResult,
      // throttleInterval: 500,
      // debounceInterval: 500,
      onSuccess: (d) => {
        setPatients(d);
      },
    },
  );

  const { run: getBasicInfoById } = useRequest((key) => get_patient_$id$({ id: key }), {
    formatResult: formatBasicInfoToFormValues,
    manual: true,
  });

  const handleUserNameChange = async (key: string) => {
    const basicInfo = await getBasicInfoById(key);
    caseInfoForm.current?.setFieldsValue(basicInfo);
  };

  return (
    <ProForm onFinish={submit} formRef={caseInfoForm}>
      <CaseInfoForm
        handleUserNameSearch={searchList}
        patients={patients}
        handleUserNameChange={handleUserNameChange}
      />
    </ProForm>
  );
};

export default Add;
