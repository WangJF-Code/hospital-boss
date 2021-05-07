import { Divider, Form } from 'antd';
import { ProFormRadio, ProFormCheckbox, ProFormTextArea } from '@ant-design/pro-form';
import {
  anticoagulantDrugType,
  antiplateletDrugType,
  isOrNot,
  lipidRegulatorDrugType,
  isOrNotGive,
} from '@/utils/options';

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

const TreatmentFields: React.FC = () => {
  const readonly = false;

  return (
    <>
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
        shouldUpdate={(prev, current) => prev.thrombosisPrevention !== current.thrombosisPrevention}
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
    </>
  );
};

export default TreatmentFields;
