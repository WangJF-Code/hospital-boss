import {
  ProFormText,
  ProFormRadio,
  ProFormUploadButton,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import type { Rule } from 'rc-field-form/lib/interface';

const result = [
  { label: '正常', value: 1 },
  { label: '异常，无临床意义', value: 2 },
  { label: '异常，有临床意义', value: 3 },
];

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
        name="il2"
        label="IL-2测定值"
        fieldProps={{ addonAfter: 'ng/ml' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="il2Outcome"
        options={result}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormText
        name="il4"
        label="IL-4测定值"
        fieldProps={{ addonAfter: 'ng/ml' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="il4Outcome"
        options={result}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormText
        name="il6"
        label="IL-6测定值"
        fieldProps={{ addonAfter: 'ng/ml' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="il6Outcome"
        options={result}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormText
        name="il10"
        label="IL-10测定值"
        fieldProps={{ addonAfter: 'ng/ml' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="il10Outcome"
        options={result}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormText
        name="il17"
        label="IL-17测定值"
        fieldProps={{ addonAfter: 'ng/ml' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="il17Outcome"
        options={result}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormText
        name="tnfa"
        label="TNF-α测定值"
        fieldProps={{ addonAfter: 'fmol/ml' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="tnfaoutcome"
        options={result}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormText
        name="tnfc"
        label="TNF-γ测定值"
        fieldProps={{ addonAfter: 'fmol/ml' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="tnfcoutcome"
        options={result}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>

      <ProFormUploadButton label="上传检查照片" name="images" rules={[{ required: true }]} />
      <ProFormDateTimePicker name="checkTime" label="检查时间" rules={[{ required: true }]} />
    </>
  );
};
