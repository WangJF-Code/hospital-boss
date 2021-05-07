import CheckEvaluationForm from '@/components/Form/CheckEvaluationForm';
import HospitalCheckBodyForm from '@/components/Form/HospitalCheckBodyForm';
import type { FormValuesType } from '@/pages/Record/Add';
import {
  get_hospitalCheckBody_$id$,
  post_hospitalCheckBody,
  put_hospitalCheckBody,
} from '@/services/api';
import { isOrNot } from '@/utils/options';
import { submitAndGoback } from '@/utils/utils';
import useRequest from '@ahooksjs/use-request';
import ProCard from '@ant-design/pro-card';
import ProForm, {
  ProFormTextArea,
  ProFormRadio,
  ProFormDateTimePicker,
  ProFormText,
} from '@ant-design/pro-form';
import type { FormInstance } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import moment from 'moment';
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
      formParams.type = 2;
      formParams.hospitalRecordsId = hospitalRecordsId;
      formParams.patientId = patientId;
      if (values.dischargeTime) {
        formParams.dischargeTime = moment(values.dischargeTime).valueOf();
      }

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
    <ProCard>
      <ProForm onFinish={submit} formRef={form} layout="horizontal">
        <ProForm.Group title="存活状态">
          <ProFormRadio.Group
            label="是否存活"
            name="survive"
            initialValue={1}
            options={isOrNot}
            width="md"
          />
          <FormItem
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.survive !== curValues.survive}
          >
            {({ getFieldValue }: FormInstance) => {
              return getFieldValue('survive') ? (
                <>
                  <ProFormDateTimePicker name="dischargeTime" label="出院时间" width="md" />
                  <ProFormText name="strokeEducation" label="卒中教育" width="md" />
                </>
              ) : null;
            }}
          </FormItem>
        </ProForm.Group>
        <HospitalCheckBodyForm />
        <CheckEvaluationForm />
        <ProFormTextArea name="description" label="备注" />
      </ProForm>
    </ProCard>
  );
};
