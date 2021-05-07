import type { FormInstance } from 'antd';
import { Divider, Form } from 'antd';
import { useRef } from 'react';
import ProForm, {
  ProFormText,
  ProFormRadio,
  ProFormCheckbox,
  ProFormTextArea,
} from '@ant-design/pro-form';
import {
  anticoagulantDrugType,
  antiplateletDrugType,
  isOrNot,
  lipidRegulatorDrugType,
  isOrNotGive,
} from '@/utils/options';
import { formatFormValuesToTreatmentRecord, formatTreatmentRecordToFormValues } from './utils';
import type { FormValuesType } from '@/pages/Record/Add';
import {
  get_hospitalTreatment_$id$,
  post_hospitalTreatment,
  put_hospitalTreatment,
} from '@/services/api';
import useRequest from '@ahooksjs/use-request';
import ProCard from '@ant-design/pro-card';
import { submitAndGoback } from '@/utils/utils';

const isOrNotCan = [
  { value: 0, label: '不可以' },
  { value: 1, label: '可以' },
  { value: 2, label: '未测试' },
];

const isOrNotProcessing = [
  { value: 0, label: '未进行' },
  { value: 1, label: '已进行' },
];

const guardType = [
  { value: 0, label: '气压治疗' },
  { value: 1, label: '预防性抗凝药物治疗' },
];

const TreatmentForm: React.FC = (props) => {
  const { params } = props.match;
  const { hospitalRecordsId, patientId, id } = params;
  const form = useRef<FormInstance>();
  // const {readonly} = props;
  const readonly = false;

  const submit = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToTreatmentRecord(values);
      formParams.hospitalRecordsId = hospitalRecordsId;
      formParams.patientId = patientId;
      let res: API.ApiResult;

      if (id) {
        res = await put_hospitalTreatment({ ...formParams, id });
      } else {
        res = await post_hospitalTreatment(formParams);
      }
      submitAndGoback(res);
    } catch (error) {
      return false;
    }

    return true;
  };

  useRequest(() => get_hospitalTreatment_$id$({ id }), {
    ready: !!id,
    formatResult: formatTreatmentRecordToFormValues,
    onSuccess: (d) => {
      form.current?.setFieldsValue(d);
    },
  });

  return (
    <ProCard>
      <ProForm layout="horizontal" onFinish={submit} formRef={form}>
        <ProFormRadio.Group
          label="入院 48 小时内患者能否行走"
          name="walk"
          options={isOrNotCan}
          readonly={readonly}
        />
        <ProFormRadio.Group
          label="是否进行深静脉血栓预防"
          name="thrombosisPrevention"
          options={isOrNotProcessing}
          readonly={readonly}
        />
        <Form.Item
          noStyle
          shouldUpdate={(prev, current) =>
            prev.thrombosisPrevention !== current.thrombosisPrevention
          }
        >
          {({ getFieldValue }) => {
            return (
              getFieldValue('thrombosisPrevention') === 1 && (
                <ProFormCheckbox.Group
                  label="预防种类和措施"
                  name="thrombosisPreventionTypes"
                  options={guardType}
                  readonly={readonly}
                ></ProFormCheckbox.Group>
              )
            );
          }}
        </Form.Item>
        <Divider />
        <ProFormRadio.Group
          label=" 入院后是否给予抗血小板治疗"
          name="antiplatelets"
          options={isOrNotGive}
          readonly={readonly}
        />
        <Form.Item
          noStyle
          shouldUpdate={(prev, current) => prev.antiplatelets !== current.antiplatelets}
        >
          {({ getFieldValue }) => {
            return (
              getFieldValue('antiplatelets') === 1 && (
                <ProFormCheckbox.Group
                  name="antiplateletsDrugs"
                  label="抗血小板药物名称"
                  options={antiplateletDrugType}
                  readonly={readonly}
                />
              )
            );
          }}
        </Form.Item>

        <Divider />

        <ProFormRadio.Group
          label="入院后是否给予抗凝治疗"
          name="anticoagulant"
          options={isOrNotGive}
          readonly={readonly}
        />

        <Form.Item
          noStyle
          shouldUpdate={(prev, current) => prev.anticoagulant !== current.anticoagulant}
        >
          {({ getFieldValue }) => {
            return (
              getFieldValue('anticoagulant') === 1 && (
                <ProFormCheckbox.Group
                  name="anticoagulantDrugs"
                  label="抗凝药物名称"
                  options={anticoagulantDrugType}
                  readonly={readonly}
                />
              )
            );
          }}
        </Form.Item>

        <Divider />

        <ProFormRadio.Group
          label="入院后是否调脂治疗"
          name="lipid"
          options={isOrNot}
          readonly={readonly}
        />

        <Form.Item noStyle shouldUpdate={(prev, current) => prev.lipid !== current.lipid}>
          {({ getFieldValue }) => {
            return (
              getFieldValue('lipid') === 1 && (
                <ProFormRadio.Group
                  label="入院后是否强化调脂"
                  name="lipidStrengthen"
                  options={isOrNot}
                  readonly={readonly}
                />
              )
            );
          }}
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prev, current) => prev.lipidStrengthen !== current.lipidStrengthen}
        >
          {({ getFieldValue }) => {
            return (
              getFieldValue('lipidStrengthen') === 1 && (
                <ProFormCheckbox.Group
                  name="lipidDrugs"
                  label="调脂药物名称"
                  options={lipidRegulatorDrugType}
                  readonly={readonly}
                />
              )
            );
          }}
        </Form.Item>

        <Divider />

        <ProFormRadio.Group
          label="是否留置胃管"
          name="gastricTube"
          options={isOrNot}
          readonly={readonly}
        />

        <ProFormRadio.Group
          label="是否留置尿管"
          name="ureter"
          options={isOrNot}
          readonly={readonly}
        />
        <ProFormText label="吞咽功能评价" name="swallowingFunction" />
        <ProFormTextArea label="备注" name="description" />
      </ProForm>
    </ProCard>
  );
};

export default TreatmentForm;
