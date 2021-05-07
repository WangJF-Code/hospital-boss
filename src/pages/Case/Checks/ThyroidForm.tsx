import { checkResultType } from '@/utils/options';
import {
  ProFormText,
  ProFormRadio,
  ProFormUploadButton,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import type { Rule } from 'rc-field-form/lib/interface';

export default () => {
  const digitRules: Rule[] = [
    { required: true },
    { type: 'number', message: '只能输入数字', transform: (value) => +value },
    { type: 'number', min: 0.001, max: 10000, transform: (value) => +value },
  ];

  const resultRules: Rule[] = [{ required: true }];

  return (
    <>
      <ProFormText
        name="freeT3"
        label="游离T3测定值"
        fieldProps={{ addonAfter: 'pmol/L' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="freeT3Outcome"
        options={checkResultType}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormText
        name="freeT4"
        label="游离T4测定值"
        fieldProps={{ addonAfter: 'pmol/L' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="freeT4Outcome"
        options={checkResultType}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormText
        name="thyrotropin"
        label="促甲状腺激素测定值"
        fieldProps={{ addonAfter: 'µIU/ml' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="thyrotropinOutcome"
        options={checkResultType}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormText
        label="甲状腺过氧化物酶抗体测定值"
        name="peroxidaseAntibody"
        fieldProps={{ addonAfter: 'IU/ml' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="peroxidaseAntibodyOutcome"
        options={checkResultType}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>

      <ProFormUploadButton label="上传检查照片" name="images" rules={[{ required: true }]} />
      <ProFormDateTimePicker name="checkTime" label="检查时间" rules={[{ required: true }]} />
    </>
  );
};
