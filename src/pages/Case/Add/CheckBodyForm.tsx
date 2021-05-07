import CheckEvaluationForm from '@/components/Form/CheckEvaluationForm';
import HospitalCheckBodyForm from '@/components/Form/HospitalCheckBodyForm';
import type { FormValuesType } from '@/pages/Record/Add';
import {
  get_hospitalCheckBody_$id$,
  post_hospitalCheckBody,
  put_hospitalCheckBody,
} from '@/services/api';
import { submitAndGoback } from '@/utils/utils';
import useRequest from '@ahooksjs/use-request';
import ProForm, { ProFormTextArea } from '@ant-design/pro-form';
import type { FormInstance } from 'antd';
import { useRef } from 'react';
import { formatFormValuesToHospitalCheckBody, formatHospitalCheckBodyToFormValues } from './utils';

export default (props) => {
  const { params } = props.match;
  const { hospitalRecordsId, patientId, id } = params;
  const form = useRef<FormInstance>();

  useRequest(() => get_hospitalCheckBody_$id$({ id }), {
    ready: !!id,
    formatResult: formatHospitalCheckBodyToFormValues,
    onSuccess: (d) => {
      form.current?.setFieldsValue(d);
    },
  });

  const submit = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToHospitalCheckBody(values);
      formParams.type = 1;
      formParams.hospitalRecordsId = hospitalRecordsId;
      formParams.patientId = patientId;

      let res: API.ApiResult;
      if (id) {
        res = await put_hospitalCheckBody({ ...formParams, id });
      } else {
        res = await post_hospitalCheckBody(formParams);
      }
      submitAndGoback(res);
    } catch (error) {
      return false;
    }

    return true;
  };

  return (
    <ProForm onFinish={submit} formRef={form}>
      <HospitalCheckBodyForm />
      <CheckEvaluationForm />
      <ProFormTextArea name="description" label="备注" />
    </ProForm>
  );
};
