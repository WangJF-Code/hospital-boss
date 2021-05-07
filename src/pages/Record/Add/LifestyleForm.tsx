import { Form } from 'antd';

import type { FormInstance } from 'antd/lib/form';
import { includes } from 'lodash';
import { Fragment } from 'react';
import { ProFormDigit, ProFormRadio, ProFormCheckbox } from '@ant-design/pro-form';

const activity = [
  { value: 1, label: '久坐，活动受限' },
  { value: 2, label: '久坐，非活动受限' },
  { value: 3, label: '部分体力劳动' },
  { value: 4, label: '大量体力劳动' },
];

const smokingStatus = [
  { value: '0', label: '从不吸烟' },
  { value: '1', label: ' 现在吸烟' },
  { value: '2', label: '已戒烟' },
];

const drinkingStatus = [
  { value: 0, label: '从不饮酒' },
  { value: 1, label: ' 现在饮酒' },
  { value: 2, label: '偶尔饮酒' },
];

const defaultFormItemLayout = {
  // labelCol: { span: 6 },
  // wrapperCol: { span: 18 },
};

export interface LifestyleFormProps {
  readonly?: boolean;
}

const LifestyleForm: React.FC<LifestyleFormProps> = ({ readonly }) => {
  return (
    <Fragment>
      <ProFormCheckbox.Group
        readonly={readonly}
        name="smokingType"
        label="是否吸烟"
        options={smokingStatus}
        initialValue={0}
      />
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, curValues) => prevValues.smokingType !== curValues.smokingType}
      >
        {({ getFieldValue }: FormInstance) => {
          return includes(getFieldValue('smokingType'), '1') ? (
            <ProFormDigit
              name="smokingNum"
              label="平均每天吸烟数量（支）"
              {...defaultFormItemLayout}
              fieldProps={{ precision: 0 }}
              readonly={readonly}
            />
          ) : null;
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, curValues) => prevValues.smokingType !== curValues.smokingType}
      >
        {({ getFieldValue }: FormInstance) => {
          return includes(getFieldValue('smokingType'), '1') ? (
            <ProFormDigit
              name="smokingYear"
              label="已吸烟时间（年）"
              {...defaultFormItemLayout}
              fieldProps={{ precision: 0 }}
              readonly={readonly}
            />
          ) : null;
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, curValues) => prevValues.smokingType !== curValues.smokingType}
      >
        {({ getFieldValue }: FormInstance) => {
          return includes(getFieldValue('smokingType'), '2') ? (
            <ProFormDigit
              name="quitSmokingYear"
              label="已戒烟时间（年）"
              {...defaultFormItemLayout}
              fieldProps={{ precision: 0 }}
              readonly={readonly}
            />
          ) : null;
        }}
      </Form.Item>
      <ProFormRadio.Group
        readonly={readonly}
        name="drinkingType"
        label="是否饮酒"
        options={drinkingStatus}
        initialValue={0}
      />
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, curValues) => prevValues.drinkingType !== curValues.drinkingType}
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('drinkingType') === 1 ? (
            <ProFormDigit
              name="drinkingNum"
              label="平均每天饮酒数量（克）"
              {...defaultFormItemLayout}
              readonly={readonly}
            />
          ) : null;
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, curValues) => prevValues.drinkingType !== curValues.drinkingType}
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('drinkingType') === 1 ? (
            <ProFormDigit
              name="drinkingYear"
              label="已饮酒时间（年）"
              {...defaultFormItemLayout}
              readonly={readonly}
            />
          ) : null;
        }}
      </Form.Item>
      <ProFormRadio.Group
        readonly={readonly}
        name="averageExercise"
        label="每天运动情况"
        options={activity}
        initialValue={0}
      />
    </Fragment>
  );
};

export default LifestyleForm;
