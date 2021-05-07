import type { Store } from 'antd/es/form/interface';
import type { FormInstance } from 'antd/lib/form';
import { ProFormText, ProFormRadio, ProFormCheckbox } from '@ant-design/pro-form';
import React, { Fragment } from 'react';
import { Divider, Form } from 'antd';

type FormValuesType = Store;

const sufferer = [
  { label: '父亲', value: 1 },
  { label: '母亲', value: 2 },
  { label: '兄弟姐妹', value: 3 },
];

const defaultFormItemLayout = {
  // labelCol: { span: 6 },
  // wrapperCol: { span: 18 },
};

const noLabelFormItemLayout = {
  // wrapperCol: { offset: 6, span: 18 },
};

const isOrNot = [
  { value: 0, label: '否' },
  { value: 1, label: '是' },
];

export interface FamilyHistoryFormProps {
  readonly?: boolean;
}

const remarkPlaceholder = '在此处录入备注信息';
const FamilyHistoryForm: React.FC<FamilyHistoryFormProps> = ({ readonly }) => {
  const commonProps = { readonly };

  return (
    <Fragment>
      <ProFormRadio.Group
        {...commonProps}
        name="priorStroke"
        label="卒中家族史"
        options={isOrNot}
        initialValue={0}
        {...defaultFormItemLayout}
      />
      <ProFormText
        {...commonProps}
        name="priorStrokeText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.priorStroke !== prev.priorStroke
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('priorStroke') === 1 ? (
            <ProFormCheckbox.Group
              {...commonProps}
              name="priorStrokePatient"
              label="患病者"
              options={sufferer}
            />
          ) : null;
        }}
      </Form.Item>
      <Divider />
      <ProFormRadio.Group
        {...commonProps}
        name="hypertension"
        label="高血压病家族史"
        options={isOrNot}
        initialValue={0}
        {...defaultFormItemLayout}
      />
      <ProFormText
        {...commonProps}
        name="hypertensionText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.hypertension !== prev.hypertension
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('hypertension') === 1 ? (
            <ProFormCheckbox.Group
              {...commonProps}
              name="hypertensionPatient"
              label="患病者"
              options={sufferer}
            />
          ) : null;
        }}
      </Form.Item>
      <Divider />

      <ProFormRadio.Group
        {...commonProps}
        name="diabetes"
        label="糖尿病家族史"
        options={isOrNot}
        initialValue={0}
        {...defaultFormItemLayout}
      />
      <ProFormText
        {...commonProps}
        name="diabetesText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.diabetes !== prev.diabetes
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('diabetes') === 1 ? (
            <ProFormCheckbox.Group
              {...commonProps}
              name="diabetesPatient"
              label="患病者"
              options={sufferer}
            />
          ) : null;
        }}
      </Form.Item>
      <Divider />
      <ProFormRadio.Group
        {...commonProps}
        name="hyperlipemia"
        label="高脂血症家族史"
        options={isOrNot}
        initialValue={0}
        {...defaultFormItemLayout}
      />
      <ProFormText
        {...commonProps}
        name="hyperlipemiaText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.hyperlipemia !== prev.hyperlipemia
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('hyperlipemia') === 1 ? (
            <ProFormCheckbox.Group
              {...commonProps}
              name="hyperlipemiaPatient"
              label="患病者"
              options={sufferer}
            />
          ) : null;
        }}
      </Form.Item>
      <Divider />
      <ProFormRadio.Group
        {...commonProps}
        name="cardiovascular"
        label="心脑血管症家族史"
        options={isOrNot}
        initialValue={0}
        {...defaultFormItemLayout}
      />
      <ProFormText
        {...commonProps}
        name="cardiovascularText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.cardiovascular !== prev.cardiovascular
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('cardiovascular') === 1 ? (
            <ProFormCheckbox.Group
              {...commonProps}
              name="cardiovascularPatient"
              label="患病者"
              options={sufferer}
            />
          ) : null;
        }}
      </Form.Item>
      <Divider />
      <ProFormRadio.Group
        {...commonProps}
        name="dementia"
        label="痴呆家族史"
        options={isOrNot}
        initialValue={0}
        {...defaultFormItemLayout}
      />
      <ProFormText
        {...commonProps}
        name="dementiaText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.dementia !== prev.dementia
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('dementia') === 1 ? (
            <ProFormCheckbox.Group
              {...commonProps}
              name="dementiaPatient"
              label="患病者"
              options={sufferer}
            />
          ) : null;
        }}
      </Form.Item>
      <Divider />
      <ProFormRadio.Group
        {...commonProps}
        name="migraine"
        label="偏头痛症家族史"
        options={isOrNot}
        initialValue={0}
        {...defaultFormItemLayout}
      />
      <ProFormText
        {...commonProps}
        name="migraineText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.migraine !== prev.migraine
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('migraine') === 1 ? (
            <ProFormCheckbox.Group
              {...commonProps}
              name="migrainePatient"
              label="患病者"
              options={sufferer}
            />
          ) : null;
        }}
      </Form.Item>
      <Divider />
      <ProFormRadio.Group
        {...commonProps}
        name="immunity"
        label="免疫疾病家族史"
        options={isOrNot}
        initialValue={0}
        {...defaultFormItemLayout}
      />
      <ProFormText
        {...commonProps}
        name="immunityText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.immunity !== prev.immunity
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('immunity') === 1 ? (
            <ProFormCheckbox.Group
              {...commonProps}
              name="immunityPatient"
              label="患病者"
              options={sufferer}
            />
          ) : null;
        }}
      </Form.Item>
      <Divider />
      <ProFormRadio.Group
        {...commonProps}
        name="other"
        label="其他疾病家族史"
        options={isOrNot}
        initialValue={0}
        {...defaultFormItemLayout}
      />
      <ProFormText
        {...commonProps}
        name="otherText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.other !== prev.other
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('other') === 1 ? (
            <ProFormCheckbox.Group
              {...commonProps}
              name="otherPatient"
              label="患病者"
              options={sufferer}
            />
          ) : null;
        }}
      </Form.Item>
    </Fragment>
  );
};

export default FamilyHistoryForm;
