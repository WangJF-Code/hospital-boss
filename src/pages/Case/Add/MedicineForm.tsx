import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormText, ProFormCheckbox, ProFormTextArea } from '@ant-design/pro-form';
import { Space, Cascader } from 'antd';
import type { FormInstance } from 'antd/es/form/Form';
import { Form } from 'antd';

import FormList from 'antd/lib/form/FormList';
import type { Rule } from 'rc-field-form/lib/interface';
import { useRef } from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { FormValuesType } from '@/pages/Record/Add';
import { formatFormValuesToMedicationRecord, formatMedicationRecordToFormValues } from './utils';
import {
  get_medicationRecord_$id$,
  post_medicationRecord,
  put_medicationRecord,
} from '@/services/api';
import { submitAndGoback } from '@/utils/utils';
import useRequest from '@ahooksjs/use-request';

const drugType = [
  {
    label: '抗血小板',
    value: 1,
    children: [
      { value: 1, label: '阿司匹林' },
      { value: 2, label: '西洛他唑' },
      { value: 3, label: '氯吡格雷' },
      { value: 4, label: '替格瑞洛' },
      { value: 5, label: '双嘧达莫' },
    ],
  },
  {
    label: '抗凝',
    value: '2',
    children: [
      { value: '1', label: '华法林' },
      { value: '2', label: '达比加群' },
      { value: '3', label: '利伐沙班' },
    ],
  },
  {
    label: '降脂',
    value: '3',
    children: [
      { value: '1', label: '阿托伐他汀' },
      { value: '2', label: '瑞舒伐他汀' },
      { value: '3', label: '辛伐他汀' },
      { value: '4', label: '普伐他汀' },
      { value: '5', label: '依折麦布' },
      { value: '6', label: '普罗布考' },
    ],
  },
  {
    label: '降压',
    value: '4',
    children: [
      { value: '1', label: '钙离子拮剂' },
      { value: '2', label: 'ACEI类' },
      { value: '3', label: 'ARB类' },
      { value: '4', label: 'β受体拮抗剂' },
      { value: '5', label: '利尿剂' },
    ],
  },
  {
    label: '降糖',
    value: '5',
    children: [
      { value: '1', label: '胰岛素' },
      { value: '2', label: '磺酰尿类' },
      { value: '3', label: '双胍类' },
      { value: '4', label: 'α糖苷酶抑制剂' },
      { value: '5', label: '胰岛素增敏剂' },
      { value: '6', label: '非磺酰尿类促胰岛素分泌剂' },
      { value: '7', label: '其他' },
    ],
  },
  {
    label: '促进侧支循环建立',
    value: '6',
    children: [
      { value: '1', label: '丁苯酞氯化钠注射液' },
      { value: '2', label: '丁苯酞软胶囊' },
      { value: '3', label: '己酮可可碱注射液' },
      { value: '4', label: '己酮可可碱缓释片' },
    ],
  },
  {
    label: '扩张冠脉',
    value: '7',
    children: [
      {
        value: '1',
        label: '硝酸酯类',
        children: [
          { value: '1', label: '硝酸甘油' },
          { value: '2', label: '硝酸异山梨酯' },
          { value: '3', label: '单硝酸异山梨酯' },
        ],
      },
      {
        value: '2',
        label: '钾通道开放剂',
        children: [{ value: '3', label: '尼可地尔' }],
      },
      {
        value: '2',
        label: '钙通道阻滞剂',
        children: [
          { value: '4', label: '维拉帕米' },
          { value: 5, label: '地尔硫卓' },
        ],
      },
      { value: '3', label: '其他', children: [{ value: 6, label: '曲美他嗪' }] },
    ],
  },
  {
    label: '降纤',
    value: '8',
    children: [
      { value: '1', label: '巴曲酶' },
      { value: '2', label: '降纤酶' },
    ],
  },
  {
    label: '抑酸',
    value: '1',
    children: [
      {
        value: '1',
        label: '质子泵抑制剂',
        children: [
          { value: '1', label: '奥美拉唑' },
          { value: '2', label: '兰索拉唑' },
          { value: '3', label: '雷贝拉唑' },
          { value: '4', label: '泮托拉唑' },
        ],
      },
      {
        value: '2',
        label: '组织H2受体抑制剂',
        children: [
          { value: '1', label: '雷尼替丁' },
          { value: '2', label: '西咪替丁' },
          { value: '3', label: '莫替丁' },
        ],
      },
      { value: '3', label: '抗胆碱能药', children: [{ value: 1, label: '哌吡氮平' }] },
      {
        value: '4',
        label: '胃泌素受体拮抗剂',
        children: [
          { value: '1', label: '胃泌素' },
          { value: '2', label: '西咪替丁' },
        ],
      },
      {
        value: '5',
        label: '碱性抗酸药',
        children: [
          { value: '1', label: '氢氧化铝' },
          { value: '2', label: '碳酸氢钠' },
          { value: '3', label: '胃舒平' },
        ],
      },
    ],
  },
];

const MedicineForm = (props) => {
  const { params } = props.match;
  const { hospitalRecordsId, patientId, id } = params;

  const resultRules: Rule[] = [{ required: true }];
  const form = useRef<FormInstance>();

  useRequest(() => get_medicationRecord_$id$({ id }), {
    ready: !!id,
    formatResult: formatMedicationRecordToFormValues,
    onSuccess: (d) => {
      form.current?.setFieldsValue(d);
    },
  });

  const submit = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToMedicationRecord(values);
      formParams.type = '1';
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;

      let res: API.ApiResult;
      if (id) {
        res = await put_medicationRecord({ ...formParams, id });
      } else {
        res = await post_medicationRecord(formParams);
      }
      submitAndGoback(res);
    } catch (error) {
      return false;
    }

    return true;
  };

  return (
    <ProCard>
      <ProForm
        initialValues={{ drugs: [null] }}
        layout="horizontal"
        formRef={form}
        onFinish={submit}
      >
        <FormList name="drugs">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: 'flex', marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item name={[field.name, 'drugType']} label="药物类型" rules={resultRules}>
                    <Cascader options={drugType} style={{ width: 400 }} />
                  </Form.Item>
                  <ProFormText name={[field.name, 'dosage']} rules={resultRules} label="剂量" />
                  <ProFormText
                    name={[field.name, 'frequency']}
                    rules={resultRules}
                    label="使用频次"
                  />
                  <ProFormCheckbox name={[field.name, 'ordersDrug']} rules={resultRules}>
                    医嘱药物
                  </ProFormCheckbox>
                  {field.key === 0 && <PlusCircleOutlined onClick={() => add()} />}
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
            </>
          )}
        </FormList>
        <ProFormTextArea name="description" label="备注" />
      </ProForm>
    </ProCard>
  );
};

export default MedicineForm;
