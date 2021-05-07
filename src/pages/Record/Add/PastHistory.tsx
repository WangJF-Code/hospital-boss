import { Divider, Form } from 'antd';
import type { Store } from 'antd/es/form/interface';
import type { FormInstance } from 'antd/lib/form';
import {
  ProFormText,
  ProFormRadio,
  ProFormCheckbox,
  ProFormDatePicker,
} from '@ant-design/pro-form';
import React, { Fragment } from 'react';

type FormValuesType = Store;

const strokeTypes = [
  { label: '脑梗塞', value: '1' },
  { label: '脑出血', value: '2' },
  { label: '蛛网膜下腔出血', value: '3' },
  { label: '其他未分类卒中', value: '4' },
];

const diabetesType = [
  { label: 'Ⅰ型', value: 1 },
  { label: 'Ⅱ型', value: 2 },
  { label: 'Ⅲ型', value: 3 },
];

const hypertensionType = [
  { label: 'Ⅰ型', value: 1 },
  { label: 'Ⅱ型', value: 2 },
  { label: 'Ⅲ型', value: 3 },
];

const strokeTimes = [
  { label: '1次或2次', value: 1 },
  { label: '大于2次', value: 2 },
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

const remarkPlaceholder = '在此处录入备注信息';

interface PageHistoryFormProps {
  readonly?: boolean;
}
const PageHistoryForm: React.FC<PageHistoryFormProps> = ({ readonly }) => {
  const commonProps = { readonly };

  return (
    <Fragment>
      <ProFormRadio.Group
        name="priorStroke"
        label="既往卒中史"
        options={isOrNot}
        initialValue={0}
        {...defaultFormItemLayout}
        {...commonProps}
      />
      <ProFormText
        name="priorStrokeText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
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
              name="priorStrokeType"
              label="类型"
              options={strokeTypes}
              {...defaultFormItemLayout}
              {...commonProps}
            />
          ) : null;
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.priorStroke !== prev.priorStroke
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('priorStroke') === 1 ? (
            <ProFormRadio.Group
              name="priorStrokeNum"
              {...commonProps}
              label="次数"
              options={strokeTimes}
              {...defaultFormItemLayout}
            />
          ) : null;
        }}
      </Form.Item>
      <Divider />
      <ProFormRadio.Group
        name="transientCerebralIchemia"
        label="短暂性脑缺血发作史"
        {...commonProps}
        options={isOrNot}
        initialValue={0}
      />
      <ProFormText
        name="transientCerebralIchemiaText"
        {...noLabelFormItemLayout}
        {...commonProps}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Form.Item
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.transientCerebralIchemia !== prev.transientCerebralIchemia
        }
        noStyle
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('transientCerebralIchemia') === 1 ? (
            <ProFormDatePicker
              name="transientCerebralIchemiaTime"
              label="最后一次发病时间"
              {...commonProps}
              {...defaultFormItemLayout}
            />
          ) : null;
        }}
      </Form.Item>
      <Divider />
      <ProFormRadio.Group
        name="coronaryHeartDisease"
        label="冠心病史"
        options={isOrNot}
        {...commonProps}
        initialValue={0}
      />
      <ProFormText
        name="coronaryHeartDiseaseText"
        {...noLabelFormItemLayout}
        {...commonProps}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Divider />
      <ProFormRadio.Group
        name="atrialFibrillation"
        label="心房颤动史"
        options={isOrNot}
        {...commonProps}
        initialValue={0}
      />
      <ProFormText
        name="atrialFibrillationText"
        {...noLabelFormItemLayout}
        {...commonProps}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Divider />
      <ProFormRadio.Group
        name="heartFailure"
        label="心力衰竭史"
        {...commonProps}
        options={isOrNot}
        initialValue={0}
      />
      <ProFormText
        name="heartFailureText"
        {...noLabelFormItemLayout}
        {...commonProps}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Divider />
      <ProFormRadio.Group
        name="coronaryStent"
        label="冠状动脉支架成形术或搭桥术史"
        {...commonProps}
        options={isOrNot}
        initialValue={0}
      />
      <ProFormText
        name="coronaryStentText"
        {...commonProps}
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
      />
      <Divider />

      <ProFormRadio.Group
        name="diabetes"
        label="糖尿病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="diabetesText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.diabetes !== prev.diabetes
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('diabetes') === 1 ? (
            <ProFormRadio.Group
              name="diabetesType"
              label="类型"
              options={diabetesType}
              {...defaultFormItemLayout}
              {...commonProps}
            />
          ) : null;
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.diabetes !== prev.diabetes
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('diabetes') === 1 ? (
            <ProFormDatePicker
              name="diabetesTime"
              label="患病时间"
              {...defaultFormItemLayout}
              {...commonProps}
            />
          ) : null;
        }}
      </Form.Item>
      <Divider />
      <ProFormRadio.Group
        name="hypertension"
        label="高血压病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="hypertensionText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev: FormValuesType, current: FormValuesType) =>
          current.hypertension !== prev.hypertension
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('hypertension') === 1 ? (
            <ProFormRadio.Group
              name="hypertensionType"
              label="类型"
              options={hypertensionType}
              {...defaultFormItemLayout}
              {...commonProps}
            />
          ) : null;
        }}
      </Form.Item>
      <Divider />
      <ProFormRadio.Group
        name="dyslipidemia"
        label="脂代谢紊乱史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="dyslipidemiaText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="peripheralArtery"
        label="周围动脉病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="peripheralArteryText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="renalFailure"
        label="肾功能衰竭病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="renalFailureText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="intracranialArterystent"
        label="颅内动脉支架成形术病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="intracranialArterystentText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="internalCarotidArteryStent"
        label="颈内动脉支架成形术病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="internalCarotidArteryStentText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="internalCarotidArteryEndarterectomy"
        label="颈内动脉内膜剥脱术病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="internalCarotidArteryEndarterectomyText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="intravenousThrombolysis"
        label="静脉溶栓病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="intravenousThrombolysisText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="arterialThrombectomy"
        label="动脉取栓术病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="arterialThrombectomyText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="metabolism"
        label="代谢性疾病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="metabolismText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="immunity"
        label="免疫性病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="immunityText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="migraine"
        label="偏头痛病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="migraineText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="sleepApnea"
        label="呼吸睡眠暂停病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="sleepApneaText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="homocysteineemia"
        label="同型半胱氨酸血症病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="homocysteineemiaText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="hyperuricAcidemia"
        label="高尿酸血症病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />
      <ProFormText
        name="hyperuricAcidemiaText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
      <ProFormRadio.Group
        name="chronicObstructivePulmonaryDisease"
        label="慢性阻塞性肺疾病病史"
        options={isOrNot}
        initialValue={0}
        {...commonProps}
      />

      <ProFormText
        name="chronicObstructivePulmonaryDiseaseText"
        {...noLabelFormItemLayout}
        placeholder={remarkPlaceholder}
        label="备注"
        {...commonProps}
      />
      <Divider />
    </Fragment>
  );
};

export default PageHistoryForm;
