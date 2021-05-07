import { Divider, Form } from 'antd';
import { Fragment } from 'react';
import { ProFormText, ProFormSelect, ProFormRadio, ProFormCheckbox } from '@ant-design/pro-form';

const isOrNot = [
  { value: 0, label: '否' },
  { value: 1, label: '是' },
];
const isOrNotNeed = [
  { value: 0, label: '不需要' },
  { value: 1, label: '需要' },
];

const antiplateletDrugType = [
  { value: 0, label: '阿司匹林' },
  { value: 1, label: '西洛他唑' },
  { value: 2, label: '氯吡格雷' },
  { value: 3, label: '替格瑞洛' },
  { value: 4, label: '双嘧达莫' },
];

const anticoagulantDrugType = [
  { value: 0, label: '华法林' },
  { value: 1, label: '达比加群' },
  { value: 2, label: '利伐沙班' },
];

const jyyIsTake = [
  { value: 1, label: '未服用' },
  { value: 2, label: '已服用' },
  { value: 3, label: '偶尔服用' },
];

const jyyNotTakeReason = [
  { value: 0, label: '不关注' },
  { value: 1, label: '血压忽高忽低，不稳定' },
  { value: 2, label: '药物副作用不耐受' },
];

const jzyNotTakeReason = [
  { value: 0, label: '肝功异常' },
  { value: 1, label: '肌痛副作用' },
  { value: 2, label: '不知晓' },
];

const jyyMedicines = [
  { value: 0, label: '钙离子拮剂' },
  { value: 1, label: 'ACEI类' },
  { value: 2, label: 'ARB类' },
  { value: 3, label: 'β受体拮抗剂' },
  { value: 4, label: '利尿剂' },
];

const jzyMedicines = [
  { value: 0, label: '阿托伐他汀' },
  { value: 1, label: '瑞舒伐他汀' },
  { value: 2, label: '辛伐他汀' },
  { value: 3, label: '普伐他汀' },
  { value: 4, label: '依折麦布' },
  { value: 5, label: '普罗布考' },
];

const notTakeHypoglycemicReason = [
  { value: 0, label: '不关注' },
  { value: 1, label: '血糖忽高忽低，不稳定' },
  { value: 2, label: '药物副作用不耐受' },
];

const jtyMedicines = [
  { value: 0, label: '胰岛素' },
  { value: 1, label: '磺酰尿类' },
  { value: 2, label: '双胍类' },
  { value: 3, label: 'α糖苷酶抑制剂' },
  { value: 4, label: '胰岛素增敏剂' },
  { value: 5, label: '非磺酰尿类促胰岛素分泌剂' },
  { value: 6, label: '其他' },
];

const kzgmType = [
  {
    value: 0,
    label: '硝酸酯类',
    children: [
      { value: 0, label: '硝酸甘油' },
      { value: 1, label: '硝酸异山梨酯' },
      { value: 2, label: '单硝酸异山梨酯' },
    ],
  },
  {
    value: 1,
    label: '钾通道开放剂',
    children: [{ value: 3, label: '尼可地尔' }],
  },
  {
    value: 2,
    label: '钙通道阻滞剂',
    children: [
      { value: 4, label: '维拉帕米' },
      { value: 5, label: '地尔硫卓' },
    ],
  },
  { value: 3, label: '其他', children: [{ value: 6, label: '曲美他嗪' }] },
];

const ysMedicine = [
  {
    value: 0,
    label: '质子泵抑制剂',
    children: [
      { value: 0, label: '奥美拉唑' },
      { value: 1, label: '兰索拉唑' },
      { value: 2, label: '雷贝拉唑' },
      { value: 3, label: '泮托拉唑' },
    ],
  },
  {
    value: 1,
    label: '组织H2受体抑制剂',
    children: [
      { value: 4, label: '雷尼替丁' },
      { value: 5, label: '西咪替丁' },
      { value: 6, label: '莫替丁' },
    ],
  },
  { value: 2, label: '抗胆碱能药', children: [{ value: 7, label: '哌吡氮平' }] },
  {
    value: 3,
    label: '胃泌素受体拮抗剂',
    children: [
      { value: 8, label: '胃泌素' },
      { value: 9, label: '西咪替丁' },
    ],
  },
  {
    value: 4,
    label: '碱性抗酸药',
    children: [
      { value: 10, label: '氢氧化铝' },
      { value: 11, label: '碳酸氢钠' },
      { value: 12, label: '胃舒平' },
    ],
  },
];

interface MedicineHistoryFormProps {
  readonly?: boolean;
}

const MedicineHistoryForm: React.FC<MedicineHistoryFormProps> = ({ readonly }) => {
  return (
    <Fragment>
      <ProFormRadio.Group
        label="服用抗血小板药物"
        name="antiplatelet"
        options={isOrNot}
        initialValue={0}
        readonly={readonly}
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.antiplatelet !== current.antiplatelet}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('antiplatelet') === 1 && (
              <ProFormCheckbox.Group
                label="药物名称"
                name="antiplateletDrugType"
                options={antiplateletDrugType}
                readonly={readonly}
              ></ProFormCheckbox.Group>
            )
          );
        }}
      </Form.Item>

      <ProFormText
        name="antiplateletText"
        placeholder="在此录入备注信息"
        readonly={readonly}
        label="备注"
      />
      <Divider />
      <ProFormRadio.Group
        label="口服抗凝药物"
        name="anticoagulant"
        options={isOrNot}
        initialValue={0}
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
                label="药物名称"
                name="anticoagulantDrugType"
                options={anticoagulantDrugType}
                readonly={readonly}
              ></ProFormCheckbox.Group>
            )
          );
        }}
      </Form.Item>
      <ProFormText
        name="anticoagulantText"
        placeholder="在此录入备注信息"
        readonly={readonly}
        label="备注"
      />
      <Divider />
      <ProFormRadio.Group
        label="是否需要降压治疗"
        name="isNeedJyzl"
        options={isOrNotNeed}
        readonly={readonly}
      />
      <Form.Item noStyle shouldUpdate={(prev, current) => prev.isNeedJyzl !== current.isNeedJyzl}>
        {({ getFieldValue }) => {
          return (
            getFieldValue('isNeedJyzl') === 1 && (
              <ProFormSelect
                name="lowerBloodPressure"
                label="服用降压药"
                options={jyyIsTake}
                readonly={readonly}
              />
            )
          );
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.lowerBloodPressure !== current.lowerBloodPressure}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('lowerBloodPressure') === 1 && (
              <ProFormSelect
                name="jyyNotTakeReason"
                label="未服用原因"
                options={jyyNotTakeReason}
                mode="multiple"
                readonly={readonly}
              />
            )
          );
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.lowerBloodPressure !== current.lowerBloodPressure}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('lowerBloodPressure') === 2 && (
              <ProFormSelect
                mode="multiple"
                name="jyyMedicine"
                label="药物种类"
                options={jyyMedicines}
                readonly={readonly}
              />
            )
          );
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.lowerBloodPressure !== current.lowerBloodPressure}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('lowerBloodPressure') === 3 && (
              <ProFormText name="jyyLeakageReason" label="漏服原因" readonly={readonly} />
            )
          );
        }}
      </Form.Item>
      <ProFormText
        name="lipidRegulatorText"
        placeholder="在此录入备注信息"
        readonly={readonly}
        label="备注"
      />
      <Divider />

      <ProFormRadio.Group
        label="调节血脂治疗"
        name="isNeedLipidRegulator"
        options={isOrNotNeed}
        readonly={readonly}
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.isNeedLipidRegulator !== current.isNeedLipidRegulator}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('isNeedLipidRegulator') === 1 && (
              <ProFormSelect
                name="lipidRegulator"
                label="服用调脂药"
                options={jyyIsTake}
                readonly={readonly}
              />
            )
          );
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.lipidRegulator !== current.lipidRegulator}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('lipidRegulator') === 1 && (
              <ProFormSelect
                name="jzyNotTakeReason"
                label="未服用原因"
                options={jzyNotTakeReason}
                mode="multiple"
                readonly={readonly}
              />
            )
          );
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.lipidRegulator !== current.lipidRegulator}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('lipidRegulator') === 2 && (
              <ProFormCheckbox.Group
                name="jzMedicine"
                label="药物种类"
                options={jzyMedicines}
                readonly={readonly}
              />
            )
          );
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.hypoglycemic !== current.hypoglycemic}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('lipidRegulator') === 3 && (
              <ProFormText name="jyLeakageReason" label="漏服原因" readonly={readonly} />
            )
          );
        }}
      </Form.Item>
      <Divider />

      <ProFormRadio.Group
        label="是否需要降糖治疗"
        name="isNeedHypoglycemic"
        options={isOrNotNeed}
        readonly={readonly}
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.isNeedHypoglycemic !== current.isNeedHypoglycemic}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('isNeedHypoglycemic') === 1 && (
              <ProFormSelect
                name="hypoglycemic"
                label="服用降糖药"
                options={jyyIsTake}
                readonly={readonly}
              />
            )
          );
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.hypoglycemic !== current.hypoglycemic}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('hypoglycemic') === 1 && (
              <ProFormSelect
                name="notTakeHypoglycemicReason"
                label="未服用原因"
                options={notTakeHypoglycemicReason}
                mode="multiple"
                readonly={readonly}
              />
            )
          );
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.hypoglycemic !== current.hypoglycemic}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('hypoglycemic') === 2 && (
              <ProFormCheckbox.Group
                name="jtMedicine"
                label="药物种类"
                options={jtyMedicines}
                readonly={readonly}
              />
            )
          );
        }}
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.hypoglycemic !== current.hypoglycemic}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('hypoglycemic') === 3 && (
              <ProFormText name="hypoglycemicLeakageReason" label="漏服原因" readonly={readonly} />
            )
          );
        }}
      </Form.Item>
      <Divider />

      <ProFormRadio.Group
        label="服用抑酸药物"
        name="acidSuppression"
        options={isOrNot}
        readonly={readonly}
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.acidSuppression !== current.acidSuppression}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('acidSuppression') === 1 && (
              <Form.Item noStyle label="药物名称">
                {ysMedicine.map((v, k) => (
                  <ProFormCheckbox.Group
                    key={`acid${k}`}
                    name={`acid${k}`}
                    label={v.label}
                    options={v.children}
                    readonly={readonly}
                  />
                ))}
              </Form.Item>
            )
          );
        }}
      </Form.Item>
      <ProFormText
        name="acidSuppressionText"
        placeholder="在此录入备注信息"
        readonly={readonly}
        label="备注"
      />

      <Divider />
      <ProFormRadio.Group
        label="服用扩张冠脉药物"
        name="expandTheCrown"
        options={isOrNot}
        initialValue={0}
        readonly={readonly}
      />

      <Form.Item
        noStyle
        shouldUpdate={(prev, current) => prev.expandTheCrown !== current.expandTheCrown}
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('expandTheCrown') === 1 && (
              <Form.Item noStyle label="药物名称">
                {kzgmType.map((v, k) => (
                  <ProFormCheckbox.Group
                    key={`expand${k}`}
                    name={`expand${k}`}
                    label={v.label}
                    options={v.children}
                    readonly={readonly}
                  />
                ))}
              </Form.Item>
            )
          );
        }}
      </Form.Item>

      <Divider />

      <ProFormRadio.Group
        label="是否服用益生菌"
        name="probiotics"
        options={isOrNot}
        initialValue={0}
        readonly={readonly}
      />
      <Form.Item noStyle shouldUpdate={(prev, current) => prev.probiotics !== current.probiotics}>
        {({ getFieldValue }) => {
          return (
            getFieldValue('probiotics') === 1 && (
              <ProFormText name="probioticsDrugText" label="药物" readonly={readonly} />
            )
          );
        }}
      </Form.Item>
      <ProFormText
        name="probioticsText"
        placeholder="在此录入备注信息"
        readonly={readonly}
        label="备注"
      />
      <Divider />
      <ProFormRadio.Group
        label="是否服用促胃肠动力药物"
        name="gastrointestinalMotivation"
        options={isOrNot}
        initialValue={0}
        readonly={readonly}
      />
      <Form.Item
        noStyle
        shouldUpdate={(prev, current) =>
          prev.gastrointestinalMotivation !== current.gastrointestinalMotivation
        }
      >
        {({ getFieldValue }) => {
          return (
            getFieldValue('gastrointestinalMotivation') === 1 && (
              <ProFormText
                name="gastrointestinalMotivationDrugText"
                label="药物"
                readonly={readonly}
              />
            )
          );
        }}
      </Form.Item>
      <ProFormText
        name="gastrointestinalMotivationText"
        placeholder="在此录入备注信息"
        readonly={readonly}
        label="备注"
      />
      <Divider />
      <ProFormRadio.Group
        label="是否服用泻药"
        name="laxative"
        options={isOrNot}
        initialValue={0}
        readonly={readonly}
      />
      <Form.Item noStyle shouldUpdate={(prev, current) => prev.laxative !== current.laxative}>
        {({ getFieldValue }) => {
          return (
            getFieldValue('laxative') === 1 && (
              <ProFormText name="laxativeDrugText" label="药物" readonly={readonly} />
            )
          );
        }}
      </Form.Item>
      <ProFormText
        name="laxativeText"
        placeholder="在此录入备注信息"
        readonly={readonly}
        label="备注"
      />
    </Fragment>
  );
};

export default MedicineHistoryForm;
